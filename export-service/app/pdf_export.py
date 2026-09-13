from __future__ import annotations

import img2pdf

from .renderer import PageCapture

A4 = (img2pdf.mm_to_pt(210), img2pdf.mm_to_pt(297))


def build_pdf(pages: list[PageCapture]) -> bytes:
    """用与视觉 Word 相同的 A4 截图拼 PDF，强制页面为 210×297mm。"""
    layout_fun = img2pdf.get_layout_fun(pagesize=A4)
    return img2pdf.convert([p.png for p in pages], layout_fun=layout_fun)
