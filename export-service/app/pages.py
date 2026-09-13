# 与前端 src/data.ts pages 导航保持同步（仅启用页）
ACTIVE_PAGE_IDS: tuple[str, ...] = (
    "profile",
    "runhe",
    "liaoningyiwei",
    "jiaodao",
    "caishuida",
    "teamtech",
    "otherprojects",
)

PAGE_TITLES: dict[str, str] = {
    "profile": "个人介绍",
    "runhe": "润和",
    "liaoningyiwei": "辽宁易为",
    "jiaodao": "AI创业",
    "caishuida": "财税达",
    "teamtech": "团队技术",
    "otherprojects": "其他项目",
}
