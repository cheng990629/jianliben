"""DrawingML helpers: floating text box, picture, and filled rectangle."""

from __future__ import annotations

import io

from docx.document import Document as DocumentObject
from docx.oxml import OxmlElement
from docx.oxml.ns import nsmap, qn
from lxml import etree

NSMAP = {
    "w": nsmap["w"],
    "wp": "http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing",
    "a": "http://schemas.openxmlformats.org/drawingml/2006/main",
    "pic": "http://schemas.openxmlformats.org/drawingml/2006/picture",
    "r": nsmap["r"],
    "wps": "http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
}

# 强制标准前缀，避免序列化为 ns1: 导致部分 Word/WPS 解析异常
for _prefix, _uri in NSMAP.items():
    etree.register_namespace(_prefix, _uri)

# WPS 对 frame/文本常忽略 eastAsia，只用 ascii 字体；Calibri 无汉字 → 方块。
# 四槽位统一「微软雅黑」（含拉丁+汉字），中文 Windows / WPS 可正常显示。
LATIN_FONT = "微软雅黑"
CJK_FONT = "微软雅黑"


def mm_to_emu(mm: float) -> int:
    return int(round(mm * 36000))


def mm_to_twips(mm: float) -> int:
    return int(round(mm * 1440 / 25.4))


def _qn(prefix: str, tag: str) -> str:
    return "{%s}%s" % (NSMAP[prefix], tag)


def _has_cjk(text: str) -> bool:
    return any("\u4e00" <= ch <= "\u9fff" for ch in text)


def _set_run_rfonts(r_pr: etree._Element, *, hint_east_asia: bool = False) -> None:
    r_fonts = OxmlElement("w:rFonts")
    r_fonts.set(qn("w:ascii"), LATIN_FONT)
    r_fonts.set(qn("w:hAnsi"), LATIN_FONT)
    r_fonts.set(qn("w:eastAsia"), CJK_FONT)
    r_fonts.set(qn("w:cs"), LATIN_FONT)
    if hint_east_asia:
        r_fonts.set(qn("w:hint"), "eastAsia")
    r_pr.append(r_fonts)


def _set_run_lang(r_pr: etree._Element) -> None:
    lang = OxmlElement("w:lang")
    lang.set(qn("w:val"), "en-US")
    lang.set(qn("w:eastAsia"), "zh-CN")
    r_pr.append(lang)


def _rgb_hex(rgb: tuple[int, int, int]) -> str:
    return "%02X%02X%02X" % rgb


def _build_text_run(
    *,
    text: str,
    font_size_pt: float,
    bold: bool,
    color_rgb: tuple[int, int, int],
) -> etree._Element:
    run = OxmlElement("w:r")
    r_pr = OxmlElement("w:rPr")
    _set_run_rfonts(r_pr, hint_east_asia=_has_cjk(text))
    _set_run_lang(r_pr)
    sz_val = str(int(round(font_size_pt * 2)))
    sz = OxmlElement("w:sz")
    sz.set(qn("w:val"), sz_val)
    r_pr.append(sz)
    sz_cs = OxmlElement("w:szCs")
    sz_cs.set(qn("w:val"), sz_val)
    r_pr.append(sz_cs)
    # 中文也写 w:b：微软雅黑等有 Bold 字形；仅放大字号在 Word 里几乎看不出粗体
    if bold:
        r_pr.append(OxmlElement("w:b"))
        r_pr.append(OxmlElement("w:bCs"))
    color = OxmlElement("w:color")
    color.set(qn("w:val"), _rgb_hex(color_rgb))
    r_pr.append(color)
    run.append(r_pr)
    t = OxmlElement("w:t")
    t.set("{http://www.w3.org/XML/1998/namespace}space", "preserve")
    t.text = text
    run.append(t)
    return run


def make_framed_text_paragraph(
    *,
    text: str,
    x_mm: float,
    y_mm: float,
    w_mm: float,
    h_mm: float,
    font_size_pt: float,
    bold: bool,
    color_rgb: tuple[int, int, int],
    align: str,
    line_height: float,
) -> etree._Element:
    """用 w:framePr 绝对定位的普通段落承载文字（比 DrawingML 文本框中文兼容性好）。"""
    p = OxmlElement("w:p")
    p_pr = OxmlElement("w:pPr")

    frame = OxmlElement("w:framePr")
    frame.set(qn("w:w"), str(max(mm_to_twips(w_mm), 20)))
    frame.set(qn("w:h"), str(max(mm_to_twips(h_mm), 20)))
    frame.set(qn("w:hRule"), "atLeast")
    frame.set(qn("w:x"), str(max(mm_to_twips(x_mm), 0)))
    frame.set(qn("w:y"), str(max(mm_to_twips(y_mm), 0)))
    frame.set(qn("w:hAnchor"), "page")
    frame.set(qn("w:vAnchor"), "page")
    frame.set(qn("w:wrap"), "none")
    frame.set(qn("w:vSpace"), "0")
    frame.set(qn("w:hSpace"), "0")
    frame.set(qn("w:anchorLock"), "1")
    p_pr.append(frame)

    jc_val = {"left": "left", "center": "center", "right": "right"}.get(align, "left")
    jc = OxmlElement("w:jc")
    jc.set(qn("w:val"), jc_val)
    p_pr.append(jc)

    spacing = OxmlElement("w:spacing")
    spacing.set(qn("w:before"), "0")
    spacing.set(qn("w:after"), "0")
    # exact 行距（twips）：比 auto 更可控，避免 WPS/Word 把 CJK 行距撑开
    line_twips = int(round(font_size_pt * 20 * max(1.0, min(line_height, 1.35))))
    spacing.set(qn("w:line"), str(max(line_twips, 120)))
    spacing.set(qn("w:lineRule"), "exact")
    p_pr.append(spacing)
    p.append(p_pr)

    # 中文标题：粗体 + 略放大
    effective_pt = font_size_pt * (1.04 if bold and _has_cjk(text) else 1.0)
    lines = text.split("\n") if "\n" in text else [text]
    for i, line in enumerate(lines):
        if i > 0:
            p.append(OxmlElement("w:br"))
        p.append(
            _build_text_run(
                text=line,
                font_size_pt=effective_pt,
                bold=bold,
                color_rgb=color_rgb,
            )
        )
    return p


def ensure_cjk_doc_fonts(doc: DocumentObject) -> None:
    """主题 + Normal 样式补东亚字体，避免预览器只认 latin 时中文方块。"""
    try:
        from docx.opc.constants import RELATIONSHIP_TYPE as RT

        theme_part = doc.part.part_related_by(RT.THEME)
        root = etree.fromstring(theme_part.blob)
        ns_a = NSMAP["a"]
        for font_scheme in root.xpath(
            "//*[local-name()='majorFont'] | //*[local-name()='minorFont']"
        ):
            for local in ("ea", "latin", "cs"):
                nodes = font_scheme.xpath("./*[local-name()='%s']" % local)
                if not nodes:
                    node = etree.SubElement(font_scheme, "{%s}%s" % (ns_a, local))
                    node.set("typeface", CJK_FONT)
                else:
                    for node in nodes:
                        # 主题拉丁也写成中文字体，避免 WPS 回退 Calibri 导致汉字方块
                        if local in ("ea", "latin", "cs"):
                            node.set("typeface", CJK_FONT)
        theme_part._blob = etree.tostring(  # noqa: SLF001
            root,
            xml_declaration=True,
            encoding="UTF-8",
            standalone=True,
        )
    except Exception:  # noqa: BLE001
        pass

    try:
        styles = doc.styles
        normal = styles["Normal"]
        normal.font.name = LATIN_FONT
        r_pr = normal.element.get_or_add_rPr()
        for old in r_pr.findall(qn("w:rFonts")):
            r_pr.remove(old)
        _set_run_rfonts(r_pr, hint_east_asia=True)
        for old in r_pr.findall(qn("w:lang")):
            r_pr.remove(old)
        _set_run_lang(r_pr)
    except Exception:  # noqa: BLE001
        pass


def _anchor_wrapper(
    *,
    cx: int,
    cy: int,
    pos_x: int,
    pos_y: int,
    doc_pr_id: int,
    doc_pr_name: str,
    behind_doc: bool,
    graphic_data_uri: str,
    graphic_child: etree._Element,
) -> etree._Element:
    drawing = OxmlElement("w:drawing")
    anchor = etree.SubElement(drawing, _qn("wp", "anchor"))
    anchor.set("distT", "0")
    anchor.set("distB", "0")
    anchor.set("distL", "0")
    anchor.set("distR", "0")
    anchor.set("simplePos", "0")
    anchor.set("relativeHeight", str(100 + doc_pr_id))
    anchor.set("behindDoc", "1" if behind_doc else "0")
    anchor.set("locked", "0")
    anchor.set("layoutInCell", "1")
    anchor.set("allowOverlap", "1")

    simple = etree.SubElement(anchor, _qn("wp", "simplePos"))
    simple.set("x", "0")
    simple.set("y", "0")

    pos_h = etree.SubElement(anchor, _qn("wp", "positionH"))
    pos_h.set("relativeFrom", "page")
    etree.SubElement(pos_h, _qn("wp", "posOffset")).text = str(max(0, pos_x))

    pos_v = etree.SubElement(anchor, _qn("wp", "positionV"))
    pos_v.set("relativeFrom", "page")
    etree.SubElement(pos_v, _qn("wp", "posOffset")).text = str(max(0, pos_y))

    extent = etree.SubElement(anchor, _qn("wp", "extent"))
    extent.set("cx", str(cx))
    extent.set("cy", str(cy))

    effect = etree.SubElement(anchor, _qn("wp", "effectExtent"))
    effect.set("l", "0")
    effect.set("t", "0")
    effect.set("r", "0")
    effect.set("b", "0")

    etree.SubElement(anchor, _qn("wp", "wrapNone"))

    doc_pr = etree.SubElement(anchor, _qn("wp", "docPr"))
    doc_pr.set("id", str(doc_pr_id))
    doc_pr.set("name", doc_pr_name)

    etree.SubElement(anchor, _qn("wp", "cNvGraphicFramePr"))

    graphic = etree.SubElement(anchor, _qn("a", "graphic"))
    graphic_data = etree.SubElement(graphic, _qn("a", "graphicData"))
    graphic_data.set("uri", graphic_data_uri)
    graphic_data.append(graphic_child)
    return drawing


def make_textbox_drawing(
    *,
    text: str,
    x_mm: float,
    y_mm: float,
    w_mm: float,
    h_mm: float,
    font_size_pt: float,
    bold: bool,
    color_rgb: tuple[int, int, int],
    align: str,
    line_height: float,
    shape_id: int,
) -> etree._Element:
    cx = max(mm_to_emu(w_mm), mm_to_emu(1))
    cy = max(mm_to_emu(h_mm), mm_to_emu(1))
    pos_x = mm_to_emu(x_mm)
    pos_y = mm_to_emu(y_mm)

    wsp = etree.Element(_qn("wps", "wsp"))
    cnv = etree.SubElement(wsp, _qn("wps", "cNvSpPr"))
    cnv.set("txBox", "1")

    sp_pr = etree.SubElement(wsp, _qn("wps", "spPr"))
    xfrm = etree.SubElement(sp_pr, _qn("a", "xfrm"))
    off = etree.SubElement(xfrm, _qn("a", "off"))
    off.set("x", "0")
    off.set("y", "0")
    ext = etree.SubElement(xfrm, _qn("a", "ext"))
    ext.set("cx", str(cx))
    ext.set("cy", str(cy))
    prst = etree.SubElement(sp_pr, _qn("a", "prstGeom"))
    prst.set("prst", "rect")
    etree.SubElement(prst, _qn("a", "avLst"))
    etree.SubElement(sp_pr, _qn("a", "noFill"))
    ln = etree.SubElement(sp_pr, _qn("a", "ln"))
    etree.SubElement(ln, _qn("a", "noFill"))

    txbx = etree.SubElement(wsp, _qn("wps", "txbx"))
    txbx_content = etree.SubElement(txbx, qn("w:txbxContent"))

    jc_val = {"left": "left", "center": "center", "right": "right"}.get(align, "left")
    lines = text.split("\n") if "\n" in text else [text]
    for line in lines:
        p = OxmlElement("w:p")
        p_pr = OxmlElement("w:pPr")
        jc = OxmlElement("w:jc")
        jc.set(qn("w:val"), jc_val)
        p_pr.append(jc)
        spacing = OxmlElement("w:spacing")
        spacing.set(qn("w:before"), "0")
        spacing.set(qn("w:after"), "0")
        spacing.set(qn("w:line"), str(int(240 * max(1.0, min(line_height, 3.0)))))
        spacing.set(qn("w:lineRule"), "auto")
        p_pr.append(spacing)
        p.append(p_pr)

        run = _build_text_run(
            text=line,
            font_size_pt=font_size_pt,
            bold=bold,
            color_rgb=color_rgb,
        )
        p.append(run)
        txbx_content.append(p)

    body_pr = etree.SubElement(wsp, _qn("wps", "bodyPr"))
    body_pr.set("wrap", "square")
    body_pr.set("lIns", "0")
    body_pr.set("tIns", "0")
    body_pr.set("rIns", "0")
    body_pr.set("bIns", "0")
    body_pr.set("anchor", "t")
    # 允许文字略超出形状可视，减少 Word 裁切短标签
    etree.SubElement(body_pr, _qn("a", "spAutoFit"))

    return _anchor_wrapper(
        cx=cx,
        cy=cy,
        pos_x=pos_x,
        pos_y=pos_y,
        doc_pr_id=shape_id,
        doc_pr_name=f"TextBox {shape_id}",
        behind_doc=False,
        graphic_data_uri="http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
        graphic_child=wsp,
    )


def make_rect_drawing(
    *,
    x_mm: float,
    y_mm: float,
    w_mm: float,
    h_mm: float,
    fill_rgb: tuple[int, int, int],
    fill_alpha: float,
    shape_id: int,
) -> etree._Element:
    cx = max(mm_to_emu(w_mm), 1)
    cy = max(mm_to_emu(h_mm), 1)
    pos_x = mm_to_emu(x_mm)
    pos_y = mm_to_emu(y_mm)

    wsp = etree.Element(_qn("wps", "wsp"))
    etree.SubElement(wsp, _qn("wps", "cNvSpPr"))
    sp_pr = etree.SubElement(wsp, _qn("wps", "spPr"))
    xfrm = etree.SubElement(sp_pr, _qn("a", "xfrm"))
    off = etree.SubElement(xfrm, _qn("a", "off"))
    off.set("x", "0")
    off.set("y", "0")
    ext = etree.SubElement(xfrm, _qn("a", "ext"))
    ext.set("cx", str(cx))
    ext.set("cy", str(cy))
    prst = etree.SubElement(sp_pr, _qn("a", "prstGeom"))
    prst.set("prst", "rect")
    etree.SubElement(prst, _qn("a", "avLst"))

    solid = etree.SubElement(sp_pr, _qn("a", "solidFill"))
    srgb = etree.SubElement(solid, _qn("a", "srgbClr"))
    srgb.set("val", _rgb_hex(fill_rgb))
    if fill_alpha < 0.999:
        alpha = etree.SubElement(srgb, _qn("a", "alpha"))
        alpha.set("val", str(int(fill_alpha * 100000)))
    ln = etree.SubElement(sp_pr, _qn("a", "ln"))
    etree.SubElement(ln, _qn("a", "noFill"))
    etree.SubElement(wsp, _qn("wps", "bodyPr"))

    return _anchor_wrapper(
        cx=cx,
        cy=cy,
        pos_x=pos_x,
        pos_y=pos_y,
        doc_pr_id=shape_id,
        doc_pr_name=f"Rect {shape_id}",
        behind_doc=True,
        graphic_data_uri="http://schemas.microsoft.com/office/word/2010/wordprocessingShape",
        graphic_child=wsp,
    )


def make_picture_drawing(
    *,
    r_id: str,
    x_mm: float,
    y_mm: float,
    w_mm: float,
    h_mm: float,
    shape_id: int,
) -> etree._Element:
    cx = max(mm_to_emu(w_mm), 1)
    cy = max(mm_to_emu(h_mm), 1)
    pos_x = mm_to_emu(x_mm)
    pos_y = mm_to_emu(y_mm)

    pic = etree.Element(_qn("pic", "pic"))
    nv = etree.SubElement(pic, _qn("pic", "nvPicPr"))
    cnv = etree.SubElement(nv, _qn("pic", "cNvPr"))
    cnv.set("id", str(shape_id))
    cnv.set("name", f"Picture {shape_id}")
    etree.SubElement(nv, _qn("pic", "cNvPicPr"))

    blip_fill = etree.SubElement(pic, _qn("pic", "blipFill"))
    blip = etree.SubElement(blip_fill, _qn("a", "blip"))
    blip.set(_qn("r", "embed"), r_id)
    stretch = etree.SubElement(blip_fill, _qn("a", "stretch"))
    etree.SubElement(stretch, _qn("a", "fillRect"))

    sp_pr = etree.SubElement(pic, _qn("pic", "spPr"))
    xfrm = etree.SubElement(sp_pr, _qn("a", "xfrm"))
    off = etree.SubElement(xfrm, _qn("a", "off"))
    off.set("x", "0")
    off.set("y", "0")
    ext = etree.SubElement(xfrm, _qn("a", "ext"))
    ext.set("cx", str(cx))
    ext.set("cy", str(cy))
    prst = etree.SubElement(sp_pr, _qn("a", "prstGeom"))
    prst.set("prst", "rect")
    etree.SubElement(prst, _qn("a", "avLst"))

    return _anchor_wrapper(
        cx=cx,
        cy=cy,
        pos_x=pos_x,
        pos_y=pos_y,
        doc_pr_id=shape_id,
        doc_pr_name=f"Picture {shape_id}",
        behind_doc=True,
        graphic_data_uri="http://schemas.openxmlformats.org/drawingml/2006/picture",
        graphic_child=pic,
    )


def append_drawing_to_paragraph(paragraph, drawing: etree._Element) -> None:
    run = paragraph.add_run()
    run._r.append(drawing)


def register_png(document: DocumentObject, png: bytes) -> str:
    """Add PNG bytes to the package; return relationship id."""
    r_id, _image = document.part.get_or_add_image(io.BytesIO(png))
    return r_id
