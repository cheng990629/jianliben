import React, { useCallback, useEffect, useState } from 'react';
import {
  pages,
  PageType,
  LocationMode,
  locationVariants,
  TitleMode,
  titleVariants,
} from './data';
import ProfilePage from './pages/ProfilePage';
import TechStackPage from './pages/TechStackPage';
import ArchitecturePage from './pages/ArchitecturePage';
import ProjectsPage from './pages/ProjectsPage';
import PrototypePage from './pages/PrototypePage';
import CaiShuiDaPage from './pages/CaiShuiDaPage';
import RunhePage from './pages/RunhePage';
import TeamTechPage from './pages/TeamTechPage';
import OtherProjectsPage from './pages/OtherProjectsPage';
import LiaoningYiweiPage from './pages/LiaoningYiweiPage';
import JiaodaoStartupPage from './pages/JiaodaoStartupPage';

const EXPORT_API = import.meta.env.VITE_EXPORT_API ?? 'http://127.0.0.1:8001';
/** Playwright 在导出服务本机访问的前端地址（勿用 Cursor 转发端口；与 vite.config server.port 对齐） */
const EXPORT_BASE_URL =
  import.meta.env.VITE_EXPORT_BASE_URL ?? 'http://127.0.0.1:5173';

const PAGE_IDS = new Set(pages.map((p) => p.id));
const LOCATION_MODES = new Set<LocationMode>(['intent', 'residence']);
const TITLE_MODES = new Set<TitleMode>(['all', 'fullstack', 'backend', 'frontend']);

function pageFromHash(): PageType {
  const raw = window.location.hash.replace(/^#\/?/, '').split('?')[0];
  if (raw && PAGE_IDS.has(raw as PageType)) {
    return raw as PageType;
  }
  return pages[0]?.id ?? 'profile';
}

function locationFromSearch(): LocationMode {
  const loc = new URLSearchParams(window.location.search).get('loc');
  if (loc && LOCATION_MODES.has(loc as LocationMode)) {
    return loc as LocationMode;
  }
  return 'intent';
}

function titleFromSearch(): TitleMode {
  const title = new URLSearchParams(window.location.search).get('title');
  if (title && TITLE_MODES.has(title as TitleMode)) {
    return title as TitleMode;
  }
  return 'all';
}

function syncVariantsToUrl(locationMode: LocationMode, titleMode: TitleMode) {
  const url = new URL(window.location.href);
  if (locationMode === 'intent') {
    url.searchParams.delete('loc');
  } else {
    url.searchParams.set('loc', locationMode);
  }
  if (titleMode === 'all') {
    url.searchParams.delete('title');
  } else {
    url.searchParams.set('title', titleMode);
  }
  window.history.replaceState(null, '', url.toString());
}

async function downloadExport(
  path: string,
  fallbackName: string,
  locationMode: LocationMode,
  titleMode: TitleMode,
) {
  const res = await fetch(`${EXPORT_API}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      base_url: EXPORT_BASE_URL,
      location_mode: locationMode,
      title_mode: titleMode,
    }),
  });
  if (!res.ok) {
    let detail = await res.text();
    try {
      const parsed = JSON.parse(detail) as { detail?: string };
      if (parsed.detail) detail = parsed.detail;
    } catch {
      /* keep raw */
    }
    throw new Error(detail || `导出失败 (${res.status})`);
  }
  const blob = await res.blob();
  const cd = res.headers.get('content-disposition') ?? '';
  const match = /filename\*=UTF-8''([^;]+)|filename="?([^";]+)"?/i.exec(cd);
  const name = decodeURIComponent(match?.[1] || match?.[2] || fallbackName);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

// ==================== 主应用 ====================
export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(() =>
    typeof window !== 'undefined' ? pageFromHash() : 'profile',
  );
  const [locationMode, setLocationMode] = useState<LocationMode>(() =>
    typeof window !== 'undefined' ? locationFromSearch() : 'intent',
  );
  const [titleMode, setTitleMode] = useState<TitleMode>(() =>
    typeof window !== 'undefined' ? titleFromSearch() : 'all',
  );
  const [exporting, setExporting] = useState<string | null>(null);
  const [exportError, setExportError] = useState<string | null>(null);

  const locationVariant = locationVariants[locationMode];
  const titleVariant = titleVariants[titleMode];

  useEffect(() => {
    const onHash = () => setCurrentPage(pageFromHash());
    window.addEventListener('hashchange', onHash);
    if (!window.location.hash) {
      window.location.hash = `#/${currentPage}`;
    }
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const goPage = useCallback((id: PageType) => {
    setCurrentPage(id);
    window.location.hash = `#/${id}`;
  }, []);

  const changeLocationMode = (mode: LocationMode) => {
    setLocationMode(mode);
    syncVariantsToUrl(mode, titleMode);
  };

  const changeTitleMode = (mode: TitleMode) => {
    setTitleMode(mode);
    syncVariantsToUrl(locationMode, mode);
  };

  const handleExport = async (path: string, label: string, filename: string) => {
    setExportError(null);
    setExporting(label);
    try {
      await downloadExport(path, filename, locationMode, titleMode);
    } catch (e) {
      setExportError(e instanceof Error ? e.message : String(e));
    } finally {
      setExporting(null);
    }
  };

  const profileProps = {
    locationLabel: locationVariant.label,
    locationValue: locationVariant.value,
    jobTitle: titleVariant.title,
  };

  const renderPage = () => {
    const pageNum = pages.findIndex((p) => p.id === currentPage) + 1;

    switch (currentPage) {
      case 'profile':
        return <ProfilePage pageNum={pageNum} {...profileProps} />;
      case 'tech':
        return <TechStackPage pageNum={pageNum} />;
      case 'architecture':
        return <ArchitecturePage pageNum={pageNum} />;
      case 'projects':
        return <ProjectsPage pageNum={pageNum} />;
      case 'prototype':
        return <PrototypePage pageNum={pageNum} />;
      case 'runhe':
        return <RunhePage pageNum={pageNum} />;
      case 'caishuida':
        return <CaiShuiDaPage pageNum={pageNum} />;
      case 'teamtech':
        return <TeamTechPage pageNum={pageNum} />;
      case 'otherprojects':
        return <OtherProjectsPage pageNum={pageNum} />;
      case 'liaoningyiwei':
        return <LiaoningYiweiPage pageNum={pageNum} />;
      case 'jiaodao':
        return <JiaodaoStartupPage pageNum={pageNum} />;
      default:
        return <ProfilePage pageNum={pageNum} {...profileProps} />;
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-100 p-4 flex flex-col items-center print:p-0 print:bg-white"
      data-export-shell
      data-location-mode={locationMode}
      data-title-mode={titleMode}
    >
      {/* 导航 */}
      <nav data-export-chrome className="mb-4 flex gap-1 bg-white px-2 py-1 rounded shadow-sm print:hidden">
        {pages.map((page) => (
          <button
            key={page.id}
            type="button"
            data-page-id={page.id}
            onClick={() => goPage(page.id)}
            className={`px-3 py-1.5 text-xs rounded transition-colors ${
              currentPage === page.id
                ? 'bg-gray-800 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {page.en}
          </button>
        ))}
      </nav>

      {/* 内容变体 + 导出 */}
      <div data-export-chrome className="mb-3 flex flex-col items-center gap-2 print:hidden">
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-gray-500">求职意向：</span>
          {(Object.keys(titleVariants) as TitleMode[]).map((mode) => {
            const v = titleVariants[mode];
            const active = titleMode === mode;
            return (
              <button
                key={mode}
                type="button"
                disabled={!!exporting}
                onClick={() => changeTitleMode(mode)}
                className={`px-3 py-1.5 text-xs rounded transition-colors disabled:opacity-50 ${
                  active
                    ? 'bg-gray-800 text-white'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                title={v.title}
              >
                {v.short}
              </button>
            );
          })}
          <span className="text-gray-300 mx-1">|</span>
          <span className="text-xs text-gray-500">地点：</span>
          {(Object.keys(locationVariants) as LocationMode[]).map((mode) => {
            const v = locationVariants[mode];
            const active = locationMode === mode;
            return (
              <button
                key={mode}
                type="button"
                disabled={!!exporting}
                onClick={() => changeLocationMode(mode)}
                className={`px-3 py-1.5 text-xs rounded transition-colors disabled:opacity-50 ${
                  active
                    ? 'bg-gray-800 text-white'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                title={`${v.label}：${v.value}`}
              >
                {v.short}
              </button>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            disabled={!!exporting}
            onClick={() => handleExport('/export/pdf', 'PDF', 'resume.pdf')}
            className="px-3 py-1.5 text-xs rounded bg-gray-800 text-white disabled:opacity-50"
          >
            {exporting === 'PDF' ? '导出中…' : '导出 PDF'}
          </button>
          <button
            type="button"
            disabled={!!exporting}
            onClick={() =>
              handleExport('/export/docx/visual', '视觉 Word', 'resume-visual.docx')
            }
            className="px-3 py-1.5 text-xs rounded border border-gray-300 text-gray-700 disabled:opacity-50"
          >
            {exporting === '视觉 Word' ? '导出中…' : '导出视觉 Word'}
          </button>
          <button
            type="button"
            disabled={!!exporting}
            onClick={() =>
              handleExport('/export/docx/editable', '可编辑 Word', 'resume-editable.docx')
            }
            className="px-3 py-1.5 text-xs rounded border border-gray-300 text-gray-700 disabled:opacity-50"
          >
            {exporting === '可编辑 Word' ? '导出中…' : '导出可编辑 Word'}
          </button>
          <button
            type="button"
            disabled={!!exporting}
            onClick={() => handleExport('/export/all', 'ZIP', 'resume-export.zip')}
            className="px-3 py-1.5 text-xs rounded border border-gray-300 text-gray-700 disabled:opacity-50"
          >
            {exporting === 'ZIP' ? '导出中…' : '导出全部 (ZIP)'}
          </button>
          {exportError && (
            <span className="text-xs text-red-500 max-w-md truncate" title={exportError}>
              {exportError}
            </span>
          )}
        </div>
      </div>

      {/* A4 页面 */}
      <div
        data-a4-page
        data-page-id={currentPage}
        className="w-[210mm] h-[297mm] bg-white shadow-md print:shadow-none print:w-full overflow-y-auto print:overflow-visible"
      >
        {renderPage()}
      </div>

      {/* 技术引擎水印 */}
      <div data-export-chrome className="mt-3 flex items-center justify-center gap-3 text-xs text-gray-400 print:hidden">
        <span>Built with</span>
        <span className="flex items-center gap-1">
          <span className="text-gray-500">⚡</span>
          <span className="text-gray-600">Cursor</span>
        </span>
        <span className="text-gray-300">|</span>
        <span className="flex items-center gap-1">
          <span className="text-blue-500">⚛</span>
          <span className="text-gray-600">React</span>
        </span>
        <span className="text-gray-300">|</span>
        <span className="flex items-center gap-1">
          <span className="text-cyan-500">💨</span>
          <span className="text-gray-600">Tailwind CSS</span>
        </span>
        <span className="text-gray-300">|</span>
        <span className="flex items-center gap-1">
          <span className="text-orange-500">▲</span>
          <span className="text-gray-600">Vite</span>
        </span>
        <span className="text-gray-300">|</span>
        <span className="text-gray-500">by 高成</span>
      </div>

      <div data-export-chrome className="mt-2 text-xs text-gray-400 print:hidden">
        当前：{titleVariant.title} · {locationVariant.label} {locationVariant.value} · Export{' '}
        {EXPORT_API}
      </div>
    </div>
  );
}
