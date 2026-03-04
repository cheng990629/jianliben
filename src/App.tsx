import React, { useState } from 'react';
import { pages, PageType } from './data';
import ProfilePage from './pages/ProfilePage';
import TechStackPage from './pages/TechStackPage';
import ArchitecturePage from './pages/ArchitecturePage';
import ProjectsPage from './pages/ProjectsPage';
import PrototypePage from './pages/PrototypePage';
import CaiShuiDaPage from './pages/CaiShuiDaPage';
import TeamTechPage from './pages/TeamTechPage';
import OtherProjectsPage from './pages/OtherProjectsPage';
import LiaoningYiweiPage from './pages/LiaoningYiweiPage';
import JiaodaoStartupPage from './pages/JiaodaoStartupPage';

// ==================== 主应用 ====================
export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('profile');

  const renderPage = () => {
    const pageNum = pages.findIndex(p => p.id === currentPage) + 1;
    
    switch (currentPage) {
      case 'profile':
        return <ProfilePage pageNum={pageNum} />;
      case 'tech':
        return <TechStackPage pageNum={pageNum} />;
      case 'architecture':
        return <ArchitecturePage pageNum={pageNum} />;
      case 'projects':
        return <ProjectsPage pageNum={pageNum} />;
      case 'prototype':
        return <PrototypePage pageNum={pageNum} />;
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
        return <ProfilePage pageNum={pageNum} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center print:p-0 print:bg-white">
      {/* 导航 */}
      <nav className="mb-4 flex gap-1 bg-white px-2 py-1 rounded shadow-sm print:hidden">
        {pages.map(page => (
          <button
            key={page.id}
            onClick={() => setCurrentPage(page.id)}
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

      {/* A4 页面 - 固定高度 297mm (A4标准高度)，允许滚动查看溢出内容 */}
      <div className="w-[210mm] h-[297mm] bg-white shadow-md print:shadow-none print:w-full overflow-y-auto print:overflow-visible">
        {renderPage()}
      </div>

      {/* 技术引擎水印 */}
      <div className="mt-3 flex items-center justify-center gap-3 text-xs text-gray-400 print:hidden">
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

      {/* 打印说明 */}
      <div className="mt-2 text-xs text-gray-400 print:hidden">
        Press Ctrl+P to print · Each page prints separately
      </div>
    </div>
  );
}
