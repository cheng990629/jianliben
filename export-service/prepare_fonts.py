#!/usr/bin/env python3
"""从系统 Noto Sans CJK 抽出 SC Regular/Bold，供 Playwright PDF 截图注入。"""

from __future__ import annotations

import sys
from pathlib import Path

OUT_DIR = Path(__file__).resolve().parent / "fonts"
CANDIDATES = [
    Path("/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc"),
    Path("/usr/share/fonts/noto-cjk/NotoSansCJK-Regular.ttc"),
]
BOLD_CANDIDATES = [
    Path("/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc"),
    Path("/usr/share/fonts/noto-cjk/NotoSansCJK-Bold.ttc"),
]


def _pick_sc_face(ttc_path: Path, out_name: str) -> Path:
    from fontTools.ttLib import TTCollection

    ttc = TTCollection(str(ttc_path))
    for font in ttc.fonts:
        names: list[str] = []
        for rec in font["name"].names:
            try:
                names.append(rec.toUnicode())
            except Exception:  # noqa: BLE001
                continue
        joined = " ".join(names)
        if "Noto Sans CJK SC" in joined and "Mono" not in joined:
            out = OUT_DIR / out_name
            OUT_DIR.mkdir(parents=True, exist_ok=True)
            font.save(str(out))
            return out
    raise RuntimeError(f"未在 {ttc_path} 找到 Noto Sans CJK SC")


def main() -> int:
    regular_src = next((p for p in CANDIDATES if p.is_file()), None)
    bold_src = next((p for p in BOLD_CANDIDATES if p.is_file()), None)
    if not regular_src or not bold_src:
        print(
            "缺少系统字体 NotoSansCJK-*.ttc。Ubuntu/Debian: sudo apt install fonts-noto-cjk",
            file=sys.stderr,
        )
        return 1

    regular = OUT_DIR / "NotoSansCJKsc-Regular.otf"
    bold = OUT_DIR / "NotoSansCJKsc-Bold.otf"
    if regular.is_file() and bold.is_file():
        print(f"已存在: {regular.name}, {bold.name}")
        return 0

    r = _pick_sc_face(regular_src, "NotoSansCJKsc-Regular.otf")
    b = _pick_sc_face(bold_src, "NotoSansCJKsc-Bold.otf")
    print(f"已生成: {r} ({r.stat().st_size} bytes)")
    print(f"已生成: {b} ({b.stat().st_size} bytes)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
