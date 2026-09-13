# 论文式求职简历导出 — Design

**Date:** 2026-09-13  
**Project:** `jianliben`  
**Status:** Approved

## Goal

在现有多页视觉简历之外，新增 3 页「论文式」求职简历（预览 + 独立导出），气质为现有灰度细字 × 章节编号；代表作品页提炼自本科学位论文《人工智能时代背景下的——下一代企业产品设计研究》（AGI-Admin），不运行时解析 `.doc`。

## Decisions

| 项 | 选择 |
|----|------|
| 形态 | 导航独立三页 + 独立论文式导出 API |
| 页数 | 3 |
| 气质 | B：现有简历 × 章节编号 |
| 骨架 | 概要 → 经历与项目 → 论文代表作 |
| 默认导出 | 仍仅原 7 页；论文式另按钮 |

## Information architecture

### Pages (nav)

| id | Nav | Chapter |
|----|-----|---------|
| `paper-overview` | Paper-1 | 第1章 个人概要 |
| `paper-experience` | Paper-2 | 第2章 经历与项目 |
| `paper-thesis` | Paper-3 | 第3章 代表作品 |

共用意向职位 / 地点变体（`title_mode` / `location_mode`）。

### Export

- Existing: `/export/pdf|docx/visual|docx/editable|all` → `ACTIVE_PAGE_IDS`（7 页）
- New: `/export/paper/pdf|docx/visual|docx/editable|all` → fixed `PAPER_PAGE_IDS`（3 页）
- Filenames: `resume-paper-{title_mode}-{location_mode}.{ext}`（ZIP 内同前缀）

## Page content

### Shared chrome

- Left: name + `jobTitle`
- Right: `Paper Resume · 第 N / 3 章`
- Bottom rule; contact/location follow variants

### Paper-1

- 1.1 摘要 ← `personalInfo.summary`
- 1.2 关键词 ← `paperKeywords`
- 1.3 基本信息（经验、薪资、状态、教育、电话、邮箱、地点）
- 1.4 核心能力 ← `skillCategories` 精简列表（无进度条）

### Paper-2

- 2.1–2.3 ← `workExperience`
- 2.4 ← `personalInfo.quickProjects`

### Paper-3

- Metadata + compressed abstract/keywords ← `paperThesis` in `data.ts` (curated from thesis `.doc`)
- 3.2 四大模块要点
- 3.3 技术路径要点
- 3.4 与求职能力映射  
- `.doc` is reference only; not in export pipeline

## Components

**Frontend**

- `PaperResumeShell`, `PaperOverviewPage`, `PaperExperiencePage`, `PaperThesisPage`
- `data.ts`: `PageType`, `pages`, `paperThesis`, `paperKeywords`
- `App.tsx`: nav + second export row → `/export/paper/*`

**Backend**

- `pages.py`: `PAPER_PAGE_IDS`, titles; keep `ACTIVE_PAGE_IDS` as 7 pages
- `main.py`: four `/export/paper/...` endpoints reusing `ExportRequest` + capture/build
- `GET /pages` also returns `paper_page_ids`

## Error handling

- Same frontend error banner for paper exports
- Unknown page_ids → 400; render failure → 500 + detail
- Base URL probe unchanged

## Out of scope

- Runtime `.doc` parsing
- Merging paper pages into default ZIP
- Changing visual style of existing 7 pages

## Acceptance

1. Nav switches three paper pages; style B; skeleton as above
2. Title/location variants sync preview + paper export filenames
3. Default export still 7 pages; paper export exactly 3
4. Paper PDF / visual Word / editable Word / ZIP downloadable
5. Paper-3 has title, abstract, modules, tech path, capability map; no `.doc` dependency at runtime
