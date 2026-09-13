# 论文式求职简历 Implementation Plan

> **For agentic workers:** Execute task-by-task. Steps use checkbox syntax.

**Goal:** Add three paper-style resume pages plus independent `/export/paper/*` endpoints.

**Architecture:** React A4 pages + curated `paperThesis` data; FastAPI paper routes reuse existing Playwright capture/build with fixed `PAPER_PAGE_IDS`.

**Tech Stack:** React, TypeScript, Tailwind, FastAPI, Playwright (existing)

## Global Constraints

- Default exports remain 7 pages only
- Paper exports are exactly the 3 paper pages
- No runtime `.doc` parsing
- Visual language: existing gray/light type + chapter left border (style B)
- Do not commit unless user asks

## File map

| File | Role |
|------|------|
| `src/data.ts` | Page ids, `paperKeywords`, `paperThesis` |
| `src/components/PaperResumeShell.tsx` | Shared chrome |
| `src/pages/PaperOverviewPage.tsx` | Ch.1 |
| `src/pages/PaperExperiencePage.tsx` | Ch.2 |
| `src/pages/PaperThesisPage.tsx` | Ch.3 |
| `src/App.tsx` | Nav + paper export buttons |
| `export-service/app/pages.py` | `PAPER_PAGE_IDS` |
| `export-service/app/main.py` | `/export/paper/*`, `/pages` |
| `export-service/README.md` | Document paper APIs |

---

### Task 1: Data + page registry

**Files:**
- Modify: `src/data.ts`
- Modify: `export-service/app/pages.py`

- [ ] **Step 1:** Extend `PageType` with `paper-overview` | `paper-experience` | `paper-thesis`
- [ ] **Step 2:** Append three entries to `pages` array (en: Paper-1/2/3)
- [ ] **Step 3:** Add `paperKeywords: string[]` and `paperThesis` object (title, school, major, date, abstract, keywords, modules[], techPath[], capabilityMap)
- [ ] **Step 4:** In `pages.py` add `PAPER_PAGE_IDS` and titles; leave `ACTIVE_PAGE_IDS` unchanged

**Verify:** Typecheck / import pages list includes 10 ids total (7+3)

---

### Task 2: Paper page UI

**Files:**
- Create: `src/components/PaperResumeShell.tsx`
- Create: `src/pages/PaperOverviewPage.tsx`
- Create: `src/pages/PaperExperiencePage.tsx`
- Create: `src/pages/PaperThesisPage.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1:** Shell with name, jobTitle, chapter label `第 N / 3 章`, bottom rule
- [ ] **Step 2:** Overview / Experience / Thesis pages as specified in design
- [ ] **Step 3:** Wire switch cases + props (location/title) in App

**Verify:** Hash `#/paper-overview` renders chapter 1

---

### Task 3: Paper export API + UI buttons

**Files:**
- Modify: `export-service/app/main.py`
- Modify: `src/App.tsx`
- Modify: `export-service/README.md`

- [ ] **Step 1:** Add `_resolve_paper` using `PAPER_PAGE_IDS`; four POST routes; filename stem `resume-paper`
- [ ] **Step 2:** `GET /pages` include `paper_page_ids`
- [ ] **Step 3:** Second export button row calling `/export/paper/...`
- [ ] **Step 4:** Update README

**Verify:** `curl -X POST .../export/paper/pdf` returns PDF; default `/export/pdf` still 7 pages

---

### Task 4: Smoke check

- [ ] Frontend builds / dev loads three paper pages
- [ ] Paper ZIP contains 3-page artifacts only
