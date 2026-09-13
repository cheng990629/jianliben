# jianliben 导出服务

基于 Playwright 渲染现有 React/HTML A4 页，导出：

| 文件 | 说明 |
|------|------|
| `resume.pdf` | 与 HTML 视觉一致（**截图拼 PDF**；导出时注入 ExportCJK 中文字体） |
| `resume-visual.docx` | 每页截图嵌入，版式一致，不可改字 |
| `resume-editable.docx` | **LayoutIR 绝对定位**：文本框 / 图片 / 色块按 HTML 几何铺回 A4，几乎所有可见文字可改，布局贴近网页 |

## PDF / 视觉 Word 中文

- 链路：Playwright 打开前端 → 注入 `ExportCJK`（`export-service/fonts/NotoSansCJKsc-*.otf`）→ 截 `[data-a4-page]` → `img2pdf`
- 方块字通常是截图阶段缺 CJK 字形，不是 PDF 编码问题
- 字体生成（首次或换机）：

```bash
cd jianliben/export-service
source .venv/bin/activate
pip install -r requirements.txt
python prepare_fonts.py   # 需系统已装 fonts-noto-cjk
```

`run.sh` 启动时会自动调用 `prepare_fonts.py`。

## 可编辑 Word（布局保真）

- Playwright 测量 `[data-a4-page]` 内文字、图片、装饰色块 → `LayoutIR`
- Word 内：色块/图片用浮动 DrawingML；**文字用 `w:framePr` 绝对定位段落**（避免 DrawingML 文本框在 WPS/预览中文方块）
- **已知限制**：圆角/阴影/字距不还原；改字过长可能挤出框；部分阅读器对 frame 重叠支持差，请用 Word/WPS 桌面版验收
- **中文**：UTF-8；**ascii/hAnsi/eastAsia 均用「微软雅黑」**（WPS 常忽略 eastAsia，只用 ascii；Calibri 会导致汉字方块）。请用 WPS/Word 重新打开最新导出，勿看旧标签页缓存。
- 设计规格：仓库根目录 `docs/superpowers/specs/2026-09-13-jianliben-editable-docx-layout-design.md`

## 准备

```bash
# 终端 1：前端
cd jianliben
pnpm install
pnpm dev

# 终端 2：导出服务
cd jianliben/export-service
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
playwright install chromium
uvicorn app.main:app --host 127.0.0.1 --port 8001 --reload
```

可选环境变量：

- `VITE_EXPORT_API`：导出服务地址（默认 `http://127.0.0.1:8001`）
- `VITE_EXPORT_BASE_URL`：Playwright 抓取的前端地址（默认 `http://127.0.0.1:5173`，与 `vite.config` 一致）

注意：不要用 Cursor 端口转发后的 `window.location.origin`（如 `:49618`），导出服务在本机跑 Playwright，只能访问本机真实 Vite 端口。本机 3000 常被 OneAPI 占用，故 Vite 固定 `5173`（`strictPort`）。地址错配时服务会探测常见端口并用 `[data-a4-page]` 校验。

## API

- `GET /health`
- `GET /pages`
- `POST /export/pdf` body: `{"base_url":"http://127.0.0.1:5173","location_mode":"intent"}`
  - `location_mode`: `intent`（默认，意向城市 深圳/杭州/江苏）或 `residence`（现居 沈阳）
- `POST /export/docx/visual`
- `POST /export/docx/editable`
- `POST /export/all` → zip

前端可切换「全栈意向城市 / 现居沈阳」，预览与导出同步；文件名带 `-intent` / `-residence` 后缀。

前端导航栏下方有导出按钮；也可：

```bash
curl -X POST http://127.0.0.1:8001/export/pdf \
  -H 'Content-Type: application/json' \
  -d '{"base_url":"http://127.0.0.1:5173"}' \
  -o resume.pdf
```

## 注意

- 导出时前端必须可访问（dev 或 `pnpm build && pnpm preview`）。
- 页面列表与 `src/data.ts` 中启用的 `pages` 保持同步（见 `app/pages.py`）。
