from __future__ import annotations

from dataclasses import dataclass

from .docx_editable import build_editable_docx
from .docx_visual import build_visual_docx
from .pdf_export import build_pdf
from .renderer import PageCapture, capture_pages


@dataclass
class ExportRequest:
    base_url: str
    page_ids: list[str]
    location_mode: str = "intent"
    title_mode: str = "all"


@dataclass
class ExportBundle:
    pdf: bytes
    visual_docx: bytes
    editable_docx: bytes


async def _capture(req: ExportRequest) -> list[PageCapture]:
    return await capture_pages(
        req.base_url,
        req.page_ids,
        location_mode=req.location_mode,
        title_mode=req.title_mode,
    )


async def export_pdf(req: ExportRequest) -> bytes:
    pages = await _capture(req)
    return build_pdf(pages)


async def export_visual_docx(req: ExportRequest) -> bytes:
    pages = await _capture(req)
    return build_visual_docx(pages)


async def export_editable_docx(req: ExportRequest) -> bytes:
    pages = await _capture(req)
    return build_editable_docx(pages)


async def export_all(req: ExportRequest) -> ExportBundle:
    pages = await _capture(req)
    return ExportBundle(
        pdf=build_pdf(pages),
        visual_docx=build_visual_docx(pages),
        editable_docx=build_editable_docx(pages),
    )
