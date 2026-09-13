"""简历导出服务：Playwright 渲染 HTML → PDF / 视觉 Word / 可编辑 Word。"""

from __future__ import annotations

import io
import zipfile
from urllib.parse import quote

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import Response
from pydantic import BaseModel, Field

from .exporter import ExportRequest, export_all, export_editable_docx, export_pdf, export_visual_docx
from .pages import ACTIVE_PAGE_IDS

app = FastAPI(title="jianliben export service", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ExportBody(BaseModel):
    base_url: str = Field(
        default="http://127.0.0.1:5173",
        description="前端地址（Vite dev 或 preview；与 vite.config server.port 对齐）",
    )
    page_ids: list[str] | None = Field(
        default=None,
        description="可选：覆盖导出页顺序；默认与前端导航一致",
    )
    location_mode: str = Field(
        default="intent",
        description="地点变体：intent=意向城市深圳杭州江苏；residence=现居沈阳",
    )
    title_mode: str = Field(
        default="all",
        description="求职意向：all / fullstack / backend / frontend",
    )


LOCATION_MODES = frozenset({"intent", "residence"})
TITLE_MODES = frozenset({"all", "fullstack", "backend", "frontend"})


def _attachment(filename: str, content_type: str, data: bytes) -> Response:
    encoded = quote(filename)
    return Response(
        content=data,
        media_type=content_type,
        headers={
            "Content-Disposition": f"attachment; filename=\"{filename}\"; filename*=UTF-8''{encoded}",
        },
    )


def _resolve(body: ExportBody) -> ExportRequest:
    page_ids = body.page_ids or list(ACTIVE_PAGE_IDS)
    unknown = [p for p in page_ids if p not in ACTIVE_PAGE_IDS]
    if unknown:
        raise HTTPException(status_code=400, detail=f"未知 page_ids: {unknown}")
    loc = body.location_mode or "intent"
    if loc not in LOCATION_MODES:
        raise HTTPException(
            status_code=400,
            detail=f"未知 location_mode: {loc}，可选 intent / residence",
        )
    title = body.title_mode or "all"
    if title not in TITLE_MODES:
        raise HTTPException(
            status_code=400,
            detail=f"未知 title_mode: {title}，可选 all / fullstack / backend / frontend",
        )
    return ExportRequest(
        base_url=body.base_url.rstrip("/"),
        page_ids=page_ids,
        location_mode=loc,
        title_mode=title,
    )


def _name(stem: str, location_mode: str, title_mode: str, ext: str) -> str:
    loc = "intent" if location_mode == "intent" else "residence"
    return f"{stem}-{title_mode}-{loc}.{ext}"


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/pages")
def list_pages() -> dict[str, list[str]]:
    return {
        "page_ids": list(ACTIVE_PAGE_IDS),
        "location_modes": list(LOCATION_MODES),
        "title_modes": list(TITLE_MODES),
    }


@app.post("/export/pdf")
async def api_export_pdf(body: ExportBody = ExportBody()) -> Response:
    req = _resolve(body)
    try:
        data = await export_pdf(req)
    except Exception as exc:  # noqa: BLE001 — 返回可诊断错误给前端
        raise HTTPException(status_code=500, detail=str(exc)) from exc
    return _attachment(
        _name("resume", req.location_mode, req.title_mode, "pdf"),
        "application/pdf",
        data,
    )


@app.post("/export/docx/visual")
async def api_export_visual(body: ExportBody = ExportBody()) -> Response:
    req = _resolve(body)
    try:
        data = await export_visual_docx(req)
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=500, detail=str(exc)) from exc
    return _attachment(
        _name("resume-visual", req.location_mode, req.title_mode, "docx"),
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        data,
    )


@app.post("/export/docx/editable")
async def api_export_editable(body: ExportBody = ExportBody()) -> Response:
    req = _resolve(body)
    try:
        data = await export_editable_docx(req)
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=500, detail=str(exc)) from exc
    return _attachment(
        _name("resume-editable", req.location_mode, req.title_mode, "docx"),
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        data,
    )


@app.post("/export/all")
async def api_export_all(body: ExportBody = ExportBody()) -> Response:
    req = _resolve(body)
    try:
        bundle = await export_all(req)
    except Exception as exc:  # noqa: BLE001
        raise HTTPException(status_code=500, detail=str(exc)) from exc
    buf = io.BytesIO()
    with zipfile.ZipFile(buf, "w", compression=zipfile.ZIP_DEFLATED) as zf:
        zf.writestr(_name("resume", req.location_mode, req.title_mode, "pdf"), bundle.pdf)
        zf.writestr(
            _name("resume-visual", req.location_mode, req.title_mode, "docx"),
            bundle.visual_docx,
        )
        zf.writestr(
            _name("resume-editable", req.location_mode, req.title_mode, "docx"),
            bundle.editable_docx,
        )
    return _attachment(
        _name("resume-export", req.location_mode, req.title_mode, "zip"),
        "application/zip",
        buf.getvalue(),
    )

