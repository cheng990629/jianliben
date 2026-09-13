from __future__ import annotations

from dataclasses import dataclass, field


@dataclass
class LayoutText:
    x_mm: float
    y_mm: float
    w_mm: float
    h_mm: float
    text: str
    font_size_pt: float
    bold: bool = False
    color_rgb: tuple[int, int, int] = (55, 65, 81)
    align: str = "left"
    line_height: float = 1.25


@dataclass
class LayoutImage:
    x_mm: float
    y_mm: float
    w_mm: float
    h_mm: float
    png: bytes = b""
    role: str = "img"  # img | svg
    nth: int = 0


@dataclass
class LayoutRect:
    x_mm: float
    y_mm: float
    w_mm: float
    h_mm: float
    fill_rgb: tuple[int, int, int] = (229, 231, 235)
    fill_alpha: float = 1.0


@dataclass
class PageLayout:
    texts: list[LayoutText] = field(default_factory=list)
    images: list[LayoutImage] = field(default_factory=list)
    rects: list[LayoutRect] = field(default_factory=list)
