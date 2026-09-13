from __future__ import annotations

from dataclasses import dataclass, field
from pathlib import Path
from typing import Any

from playwright.async_api import Browser, BrowserContext, Page, Route, async_playwright

from .layout_ir import LayoutImage, LayoutRect, LayoutText, PageLayout
from .pages import PAGE_TITLES

_FONTS_DIR = Path(__file__).resolve().parent.parent / "fonts"
_FONT_REGULAR = _FONTS_DIR / "NotoSansCJKsc-Regular.otf"
_FONT_BOLD = _FONTS_DIR / "NotoSansCJKsc-Bold.otf"


@dataclass
class TextBlock:
    tag: str
    text: str
    level: int = 0


@dataclass
class PageCapture:
    page_id: str
    title: str
    png: bytes
    blocks: list[TextBlock] = field(default_factory=list)
    layout: PageLayout = field(default_factory=PageLayout)


# PDF/视觉 Word 截图前注入：强制可渲染的中文字体，避免 Inter/font-light(300) 缺字形变方块
EXPORT_FONT_CSS = """
@font-face {
  font-family: 'ExportCJK';
  src: url('/__export_fonts__/NotoSansCJKsc-Regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
  font-display: block;
}
@font-face {
  font-family: 'ExportCJK';
  src: url('/__export_fonts__/NotoSansCJKsc-Bold.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
  font-display: block;
}
[data-a4-page], [data-a4-page] * {
  font-family: 'ExportCJK', 'Noto Sans CJK SC', '微软雅黑', 'Microsoft YaHei', sans-serif !important;
  text-transform: none !important;
  letter-spacing: normal !important;
}
[data-a4-page] {
  font-weight: 400 !important;
}
[data-a4-page] .font-medium,
[data-a4-page] .font-semibold,
[data-a4-page] .font-bold,
[data-a4-page] h1,
[data-a4-page] h2,
[data-a4-page] h3,
[data-a4-page] strong,
[data-a4-page] b {
  font-weight: 700 !important;
}
"""

HIDE_CHROME_CSS = """
[data-export-chrome] {
  display: none !important;
}
[data-export-shell] {
  padding: 0 !important;
  margin: 0 !important;
  background: white !important;
  min-height: auto !important;
  display: block !important;
}
[data-a4-page] {
  box-shadow: none !important;
  margin: 0 !important;
  overflow: hidden !important;
  width: 210mm !important;
  height: 297mm !important;
}
"""

# Legacy stream extract (kept for debugging / fallback tooling)
EXTRACT_BLOCKS_JS = """
() => {
  const root = document.querySelector('[data-a4-page]');
  if (!root) return [];
  const blocks = [];
  const skip = new Set(['SCRIPT', 'STYLE', 'SVG', 'PATH', 'BUTTON', 'NAV']);
  const walk = (el) => {
    if (!el || el.nodeType !== 1) return;
    if (skip.has(el.tagName)) return;
    if (el.closest && el.closest('.print\\\\:hidden')) return;
    const tag = el.tagName;
    if (['H1','H2','H3','H4','H5','P','LI','TD','TH'].includes(tag)) {
      const text = (el.innerText || '').replace(/\\s+/g, ' ').trim();
      if (text) {
        const level = tag.startsWith('H') ? Number(tag.slice(1)) : 0;
        blocks.push({ tag: tag.toLowerCase(), text, level });
      }
      return;
    }
    if (tag === 'SPAN' && el.children.length === 0) {
      const text = (el.innerText || '').replace(/\\s+/g, ' ').trim();
      if (text && text.length > 1) {
        const cls = el.className || '';
        if (cls.includes('rounded') || cls.includes('bg-gray')) {
          blocks.push({ tag: 'tag', text, level: 0 });
        }
      }
      return;
    }
    for (const child of el.children) walk(child);
  };
  walk(root);
  return blocks;
}
"""

EXTRACT_LAYOUT_JS = """
() => {
  const root = document.querySelector('[data-a4-page]');
  if (!root) return { texts: [], images: [], rects: [] };

  const rootRect = root.getBoundingClientRect();
  const PAGE_W = 210;
  const PAGE_H = 297;
  const toBox = (r) => ({
    x_mm: ((r.left - rootRect.left) / rootRect.width) * PAGE_W,
    y_mm: ((r.top - rootRect.top) / rootRect.height) * PAGE_H,
    w_mm: (r.width / rootRect.width) * PAGE_W,
    h_mm: (r.height / rootRect.height) * PAGE_H,
  });

  const parseRgb = (c) => {
    if (!c || c === 'transparent') return null;
    const m = c.match(/rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)(?:,\\s*([\\d.]+))?\\)/);
    if (!m) return null;
    const a = m[4] === undefined ? 1 : Number(m[4]);
    if (a <= 0.01) return null;
    return { r: Number(m[1]), g: Number(m[2]), b: Number(m[3]), a };
  };

  const isSkipped = (el) => {
    if (!el || el.nodeType !== 1) return true;
    if (el.closest('[data-export-chrome]')) return true;
    if (el.closest('.print\\\\:hidden')) return true;
    const tag = el.tagName;
    if (['SCRIPT', 'STYLE', 'BUTTON', 'NAV', 'NOSCRIPT'].includes(tag)) return true;
    const st = getComputedStyle(el);
    if (st.display === 'none' || st.visibility === 'hidden') return true;
    if (Number(st.opacity) === 0) return true;
    return false;
  };

  const inPage = (box) => {
    if (box.w_mm < 0.15 || box.h_mm < 0.15) return false;
    if (box.x_mm > PAGE_W || box.y_mm > PAGE_H) return false;
    if (box.x_mm + box.w_mm < 0 || box.y_mm + box.h_mm < 0) return false;
    return true;
  };

  const clip = (box) => ({
    x_mm: Math.max(0, box.x_mm),
    y_mm: Math.max(0, box.y_mm),
    w_mm: Math.min(box.w_mm, PAGE_W - Math.max(0, box.x_mm)),
    h_mm: Math.min(box.h_mm, PAGE_H - Math.max(0, box.y_mm)),
  });

  const texts = [];
  const images = [];
  const rects = [];
  const seenText = new Set();
  const claimed = new WeakSet();

  // --- images (nth = querySelectorAll index for Playwright) ---
  root.querySelectorAll('img').forEach((el, idx) => {
    if (isSkipped(el)) return;
    const box = clip(toBox(el.getBoundingClientRect()));
    if (!inPage(box)) return;
    images.push({ ...box, role: 'img', nth: idx });
    claimed.add(el);
  });
  root.querySelectorAll('svg').forEach((el, idx) => {
    if (isSkipped(el)) return;
    if (el.closest('button')) return;
    const box = clip(toBox(el.getBoundingClientRect()));
    if (!inPage(box) || box.w_mm < 2 || box.h_mm < 2) return;
    images.push({ ...box, role: 'svg', nth: idx });
    claimed.add(el);
  });

  // --- decorative rects ---
  const pushRect = (el, box, fill) => {
    if (!fill || !inPage(box)) return;
    const c = clip(box);
    if (c.w_mm < 0.1 || c.h_mm < 0.1) return;
    rects.push({
      ...c,
      fill_rgb: [fill.r, fill.g, fill.b],
      fill_alpha: fill.a,
    });
  };

  root.querySelectorAll('*').forEach((el) => {
    if (isSkipped(el) || claimed.has(el)) return;
    if (['IMG', 'SVG', 'PATH', 'SPAN', 'A', 'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'LI', 'UL', 'OL'].includes(el.tagName)) {
      // still allow SPAN/DIV-like with bg as pill chrome — handled below for SPAN
    }
    const st = getComputedStyle(el);
    const box = toBox(el.getBoundingClientRect());
    if (!inPage(box)) return;

    const bg = parseRgb(st.backgroundColor);
    const hasDirectText = Array.from(el.childNodes).some(
      (n) => n.nodeType === 3 && (n.textContent || '').trim().length > 0
    );

    // hairline / divider
    if (bg && box.h_mm <= 0.6 && box.w_mm >= 5) {
      pushRect(el, box, bg);
      return;
    }

    // progress track / fill (short bar)
    if (bg && box.h_mm > 0.3 && box.h_mm <= 2.2 && box.w_mm >= 2 && !hasDirectText) {
      pushRect(el, box, bg);
      return;
    }

    // pill / card chrome: background, may contain text children
    if (bg && (bg.r < 250 || bg.g < 250 || bg.b < 250) && !hasDirectText) {
      // container with only element children (e.g. pill span with text node — hasDirectText true)
    }
    if (bg && (bg.r < 252 || bg.g < 252 || bg.b < 252)) {
      const cls = String(el.className || '');
      const pillLike =
        el.tagName === 'SPAN' ||
        cls.includes('rounded') ||
        cls.includes('bg-gray') ||
        cls.includes('bg-') ||
        (box.h_mm <= 12 && box.w_mm <= 80 && hasDirectText);
      if (pillLike && hasDirectText) {
        pushRect(el, box, bg);
      } else if (!hasDirectText && bg.a >= 0.05 && (box.w_mm >= 1 || box.h_mm >= 0.4)) {
        // empty shaded block
        if (el.children.length === 0 || box.h_mm <= 3 || cls.includes('bg-')) {
          pushRect(el, box, bg);
        }
      }
    }

    // left border accent（含 1px 时间轴线）
    const blw = parseFloat(st.borderLeftWidth) || 0;
    if (blw >= 0.8) {
      const bc = parseRgb(st.borderLeftColor);
      if (bc) {
        const br = el.getBoundingClientRect();
        const borderBox = toBox({
          left: br.left,
          top: br.top,
          width: Math.max(blw, 1.2),
          height: br.height,
          right: br.left + Math.max(blw, 1.2),
          bottom: br.bottom,
        });
        pushRect(el, borderBox, bc);
      }
    }
  });

  // --- text (leaf-first: 复合 li/div 拆成子节点，避免标题+描述糊成一块) ---
  const textBearingChildCount = (el) =>
    Array.from(el.children).filter((c) => {
      if (['BR', 'WBR', 'SCRIPT', 'STYLE'].includes(c.tagName)) return false;
      return ((c.innerText || '').trim().length > 0);
    }).length;

  const isComposite = (el) => textBearingChildCount(el) >= 2;

  const isTextLeaf = (el) => {
    if (textBearingChildCount(el) > 0) return false;
    const text = (el.innerText || '').replace(/\\s+/g, ' ').trim();
    return text.length > 0;
  };

  const insideClaimed = (el) => {
    let anc = el.parentElement;
    while (anc && anc !== root) {
      if (claimed.has(anc)) return true;
      anc = anc.parentElement;
    }
    return false;
  };

  const considerTextEl = (el) => {
    if (isSkipped(el) || claimed.has(el)) return;
    if (el.closest('svg')) return;
    if (insideClaimed(el)) return;
    const text = (el.innerText || '').replace(/\\s+/g, ' ').trim();
    if (!text) return;
    if (el === root) return;

    // 装饰分隔符（flex-1 的「·」）量出来极宽，会破坏右侧排版 → 跳过
    if (/^[·•|／/\\-—–]+$/.test(text)) return;

    let box = clip(toBox(el.getBoundingClientRect()));
    // 用 Range 收紧内容宽度，避免 flex 撑开的空白框
    try {
      const range = document.createRange();
      range.selectNodeContents(el);
      const rr = range.getBoundingClientRect();
      if (rr.width > 0 && rr.height > 0) {
        const content = clip(toBox(rr));
        // 元素框明显宽于文字内容时，改用内容框（保留高度用较大者）
        if (box.w_mm > content.w_mm * 1.35 + 2) {
          box = {
            x_mm: content.x_mm,
            y_mm: box.y_mm,
            w_mm: Math.max(content.w_mm, 2),
            h_mm: Math.max(box.h_mm, content.h_mm),
          };
        }
      }
    } catch (e) { /* ignore */ }

    if (!inPage(box)) return;
    if (box.w_mm < 1 || box.h_mm < 0.8) return;

    const key = `${text}|${box.x_mm.toFixed(1)}|${box.y_mm.toFixed(1)}|${box.w_mm.toFixed(1)}`;
    if (seenText.has(key)) return;
    seenText.add(key);

    const st = getComputedStyle(el);
    const color = parseRgb(st.color) || { r: 55, g: 65, b: 81 };
    const weight = parseInt(st.fontWeight, 10) || 400;
    const tag = el.tagName;
    const heading = /^H[1-4]$/.test(tag);
    const fontPx = parseFloat(st.fontSize) || 12;
    const pxPerMm = rootRect.width / PAGE_W;
    const fontPt = fontPx / pxPerMm * (72 / 25.4);
    let align = 'left';
    if (st.textAlign === 'center') align = 'center';
    else if (st.textAlign === 'right' || st.textAlign === 'end') align = 'right';
    // pill 标签默认居中（即使计算样式偶发 start）
    const cls = String(el.className || '');
    if ((cls.includes('rounded') && (cls.includes('bg-gray') || cls.includes('bg-'))) || cls.includes('text-center')) {
      align = 'center';
    }

    let lineHeight = 1.25;
    const lh = st.lineHeight;
    if (lh && lh.endsWith('px')) {
      lineHeight = Math.max(1.0, parseFloat(lh) / fontPx);
    } else if (lh && !Number.isNaN(Number(lh))) {
      lineHeight = Number(lh);
    }

    texts.push({
      ...box,
      text,
      font_size_pt: Math.max(5, Math.min(48, fontPt)),
      bold: heading || weight >= 600,
      color_rgb: [color.r, color.g, color.b],
      align,
      line_height: lineHeight,
    });
    claimed.add(el);
  };

  // 0) 右侧专长亮点行：flex 分发的短标签合并为一行，避免「·」撑开错位
  root.querySelectorAll('div.flex').forEach((el) => {
    if (isSkipped(el) || insideClaimed(el)) return;
    const kids = Array.from(el.children).filter((c) => (c.innerText || '').trim());
    if (kids.length < 3) return;
    const allShort = kids.every((c) => ((c.innerText || '').trim().length <= 20));
    const hasSep = kids.some((c) => /^[·•]+$/.test((c.innerText || '').trim()));
    if (!allShort || !hasSep) return;
    const joined = kids
      .map((c) => (c.innerText || '').trim())
      .filter((t) => t && !/^[·•]+$/.test(t))
      .join('  ·  ');
    if (!joined) return;
    const box = clip(toBox(el.getBoundingClientRect()));
    if (!inPage(box) || box.w_mm < 10) return;
    const st = getComputedStyle(kids[0] || el);
    const color = parseRgb(st.color) || { r: 55, g: 65, b: 81 };
    const fontPx = parseFloat(st.fontSize) || 11;
    const pxPerMm = rootRect.width / PAGE_W;
    texts.push({
      ...box,
      text: joined,
      font_size_pt: Math.max(5, Math.min(48, fontPx / pxPerMm * (72 / 25.4))),
      bold: false,
      color_rgb: [color.r, color.g, color.b],
      align: 'left',
      line_height: 1.25,
    });
    claimed.add(el);
    kids.forEach((c) => claimed.add(c));
  });

  // 1) 块级：纯文本或「子元素+直接文本」混合内容整段采集；纯嵌套结构留给叶子
  root.querySelectorAll('h1,h2,h3,h4,h5,p,td,th').forEach((el) => {
    const directText = Array.from(el.childNodes).some(
      (n) => n.nodeType === 3 && (n.textContent || '').trim().length > 0
    );
    if (isComposite(el) && !directText) return;
    // 专业特长等：<p><span>类名</span> / 技能列表纯文本</p> → 必须整段吃掉，否则丢直接文本
    considerTextEl(el);
  });

  // 2) 简单 li（无嵌套结构）
  root.querySelectorAll('li').forEach((el) => {
    if (isComposite(el) || el.querySelector('p,div,h1,h2,h3,h4,span')) return;
    considerTextEl(el);
  });

  // 3) 叶子 span/div/label（含 pill、左右分栏标签、复合 li 内子节点）
  root.querySelectorAll('span,div,label,p,li').forEach((el) => {
    if (!isTextLeaf(el)) return;
    considerTextEl(el);
  });

  return { texts, images, rects };
}
"""


async def _wait_ready(page: Page) -> None:
    await page.wait_for_selector("[data-a4-page]", timeout=60_000)
    await page.wait_for_load_state("networkidle")
    await page.wait_for_timeout(400)


async def _serve_export_font(route: Route) -> None:
    name = route.request.url.rsplit("/", 1)[-1].split("?")[0]
    path = _FONTS_DIR / name
    if not path.is_file():
        await route.fulfill(status=404, body=b"font not found")
        return
    await route.fulfill(
        status=200,
        body=path.read_bytes(),
        headers={
            "Content-Type": "font/otf",
            "Access-Control-Allow-Origin": "*",
            "Cache-Control": "public, max-age=86400",
        },
    )


async def _prepare_page(page: Page) -> None:
    """隐藏 chrome，并注入可截图的中文字体（PDF / 视觉 Word 共用）。"""
    if not _FONT_REGULAR.is_file() or not _FONT_BOLD.is_file():
        raise RuntimeError(
            f"缺少导出字体：{_FONT_REGULAR.name} / {_FONT_BOLD.name}。"
            "请在 export-service 下从 Noto Sans CJK 生成 fonts/*.otf。"
        )
    await page.add_style_tag(content=EXPORT_FONT_CSS + HIDE_CHROME_CSS)
    await page.emulate_media(media="print")
    loaded = await page.evaluate(
        """async () => {
          await document.fonts.ready;
          const out = { regular: false, bold: false, err: null };
          try {
            await document.fonts.load('400 16px ExportCJK');
            out.regular = true;
          } catch (e) { out.err = String(e); }
          try {
            await document.fonts.load('700 16px ExportCJK');
            out.bold = true;
          } catch (e) { out.err = (out.err || '') + ' | ' + String(e); }
          out.check400 = document.fonts.check('400 16px ExportCJK');
          out.check700 = document.fonts.check('700 16px ExportCJK');
          return out;
        }"""
    )
    if not (loaded.get("check400") or loaded.get("regular")):
        raise RuntimeError(f"ExportCJK 字体未加载成功: {loaded}")
    await page.wait_for_timeout(300)
# 与 vite.config server.port=5173 对齐；错配时探测候选，并用 data-a4-page 校验真站
_FALLBACK_ORIGINS = (
    "http://127.0.0.1:5173",
    "http://127.0.0.1:4173",
    "http://127.0.0.1:3002",
    "http://127.0.0.1:3000",
)


async def _probe_origin(
    context: BrowserContext,
    origin: str,
    location_mode: str,
    title_mode: str,
) -> None:
    """独立 page 探测，避免 OneAPI 等假 200 站点污染导航状态。"""
    probe_page = await context.new_page()
    try:
        probe = f"{origin.rstrip('/')}/?loc={location_mode}&title={title_mode}"
        resp = await probe_page.goto(probe, wait_until="domcontentloaded", timeout=8_000)
        if resp is not None and resp.status >= 400:
            raise RuntimeError(f"前端返回 HTTP {resp.status}: {probe}")
        await probe_page.wait_for_selector("[data-a4-page]", timeout=5_000)
    finally:
        await probe_page.close()


async def _resolve_frontend_origin(
    context: BrowserContext,
    base_url: str,
    location_mode: str,
    title_mode: str,
) -> str:
    primary = base_url.rstrip("/")
    candidates: list[str] = [primary]
    for origin in _FALLBACK_ORIGINS:
        if origin not in candidates:
            candidates.append(origin)

    errors: list[str] = []
    for origin in candidates:
        try:
            await _probe_origin(context, origin, location_mode, title_mode)
            return origin
        except Exception as exc:  # noqa: BLE001
            errors.append(f"{origin}: {exc}")

    tried = ", ".join(candidates)
    detail = " | ".join(errors[:3])
    raise RuntimeError(
        f"无法打开前端（已试 {tried}）。最后错误：{detail}。"
        "请确认 Vite 已在本机运行（pnpm dev，vite.config port=5173），"
        "且请求里的 base_url 不是 Cursor/浏览器转发端口。"
        "可设置 VITE_EXPORT_BASE_URL=http://127.0.0.1:5173。"
    )


def _parse_layout(raw: dict[str, Any]) -> PageLayout:
    texts = [
        LayoutText(
            x_mm=float(t["x_mm"]),
            y_mm=float(t["y_mm"]),
            w_mm=float(t["w_mm"]),
            h_mm=float(t["h_mm"]),
            text=str(t["text"]),
            font_size_pt=float(t.get("font_size_pt") or 10.5),
            bold=bool(t.get("bold")),
            color_rgb=tuple(t.get("color_rgb") or (55, 65, 81)),  # type: ignore[arg-type]
            align=str(t.get("align") or "left"),
            line_height=float(t.get("line_height") or 1.25),
        )
        for t in raw.get("texts") or []
        if t.get("text")
    ]
    texts = _dedupe_texts(texts)
    images = [
        LayoutImage(
            x_mm=float(im["x_mm"]),
            y_mm=float(im["y_mm"]),
            w_mm=float(im["w_mm"]),
            h_mm=float(im["h_mm"]),
            role=str(im.get("role") or "img"),
            nth=int(im.get("nth") or 0),
        )
        for im in raw.get("images") or []
    ]
    rects = [
        LayoutRect(
            x_mm=float(r["x_mm"]),
            y_mm=float(r["y_mm"]),
            w_mm=float(r["w_mm"]),
            h_mm=float(r["h_mm"]),
            fill_rgb=tuple(r.get("fill_rgb") or (229, 231, 235)),  # type: ignore[arg-type]
            fill_alpha=float(r.get("fill_alpha") or 1.0),
        )
        for r in raw.get("rects") or []
    ]
    return PageLayout(texts=texts, images=images, rects=rects)


def _box_area(t: LayoutText) -> float:
    return max(t.w_mm, 0.01) * max(t.h_mm, 0.01)


def _contains(outer: LayoutText, inner: LayoutText, pad: float = 0.8) -> bool:
    return (
        inner.x_mm >= outer.x_mm - pad
        and inner.y_mm >= outer.y_mm - pad
        and inner.x_mm + inner.w_mm <= outer.x_mm + outer.w_mm + pad
        and inner.y_mm + inner.h_mm <= outer.y_mm + outer.h_mm + pad
    )


def _dedupe_texts(texts: list[LayoutText]) -> list[LayoutText]:
    """Drop identical / nested duplicates; prefer smaller (leaf) boxes."""
    if not texts:
        return texts
    uniq: list[LayoutText] = []
    seen: set[str] = set()
    for t in texts:
        key = f"{t.text}|{t.x_mm:.1f}|{t.y_mm:.1f}|{t.w_mm:.1f}|{t.h_mm:.1f}"
        if key in seen:
            continue
        seen.add(key)
        uniq.append(t)

    # smaller first so leaves win; drop larger parents that only wrap kept children
    uniq.sort(key=_box_area)
    kept: list[LayoutText] = []
    for t in uniq:
        # drop if a kept smaller box is inside this and shares content (we're larger parent)
        # — we iterate small→large, so when we see parent, children already kept
        drop = False
        for k in kept:
            if _contains(t, k) and (k.text == t.text or k.text in t.text or t.text in k.text):
                # t is outer wrapper of k
                if _box_area(t) > _box_area(k) * 1.05:
                    drop = True
                    break
            if _contains(k, t) and (t.text == k.text or t.text in k.text or k.text in t.text):
                # t is inside already-kept larger? shouldn't happen often with small-first
                if _box_area(k) >= _box_area(t) and t.text in k.text and t.text != k.text:
                    # keep leaf distinct labels even if inside a wrong parent — already preferred
                    pass
        if not drop:
            kept.append(t)
    kept.sort(key=lambda t: (round(t.y_mm, 1), round(t.x_mm, 1)))
    return kept



async def _fill_image_pngs(page: Page, layout: PageLayout) -> None:
    a4 = page.locator("[data-a4-page]")
    for im in layout.images:
        try:
            loc = a4.locator("img" if im.role == "img" else "svg").nth(im.nth)
            im.png = await loc.screenshot(type="png")
        except Exception:  # noqa: BLE001
            im.png = b""


async def capture_pages(
    base_url: str,
    page_ids: list[str],
    location_mode: str = "intent",
    title_mode: str = "all",
) -> list[PageCapture]:
    results: list[PageCapture] = []
    async with async_playwright() as p:
        browser: Browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={"width": 900, "height": 1280},
            device_scale_factor=2,
        )
        await context.route("**/__export_fonts__/**", _serve_export_font)
        page = await context.new_page()
        try:
            root = await _resolve_frontend_origin(
                context, base_url, location_mode, title_mode
            )
            for page_id in page_ids:
                url = f"{root}/?loc={location_mode}&title={title_mode}#/{page_id}"
                await page.goto(url, wait_until="domcontentloaded", timeout=60_000)
                await _wait_ready(page)
                await page.wait_for_function(
                    """(args) => {
                      const [id, loc, title] = args;
                      const el = document.querySelector('[data-a4-page]');
                      const shell = document.querySelector('[data-export-shell]');
                      return el && el.getAttribute('data-page-id') === id
                        && shell
                        && shell.getAttribute('data-location-mode') === loc
                        && shell.getAttribute('data-title-mode') === title;
                    }""",
                    arg=[page_id, location_mode, title_mode],
                    timeout=30_000,
                )
                await _prepare_page(page)
                a4 = page.locator("[data-a4-page]")
                await a4.evaluate(
                    """el => {
                      el.style.height = '297mm';
                      el.style.overflow = 'hidden';
                    }"""
                )
                png = await a4.screenshot(type="png")
                raw_blocks: list[dict[str, Any]] = await page.evaluate(EXTRACT_BLOCKS_JS)
                blocks = [
                    TextBlock(tag=b["tag"], text=b["text"], level=int(b.get("level") or 0))
                    for b in raw_blocks
                    if b.get("text")
                ]
                raw_layout: dict[str, Any] = await page.evaluate(EXTRACT_LAYOUT_JS)
                layout = _parse_layout(raw_layout)
                await _fill_image_pngs(page, layout)
                results.append(
                    PageCapture(
                        page_id=page_id,
                        title=PAGE_TITLES.get(page_id, page_id),
                        png=png,
                        blocks=blocks,
                        layout=layout,
                    )
                )
                await page.emulate_media(media="screen")
        finally:
            await context.close()
            await browser.close()
    return results
