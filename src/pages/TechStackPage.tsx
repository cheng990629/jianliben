import React, { useState } from 'react';
import { techData, phases } from '../data';
import { START_YEAR, TOTAL_YEARS, colorMap, getYearStatus } from '../constants';

interface TechStackPageProps {
  pageNum: number;
}

// ==================== 页面2：技术栈 ====================
const TechStackPage = ({ pageNum }: TechStackPageProps) => {
  const [template, setTemplate] = useState<'A' | 'B'>('A');

  // 模板A：时间轴样式
  const TemplateA = () => (
    <>
      {/* 顶部年份轴 */}
      <div className="mb-3">
        <div className="flex">
          {Array.from({ length: TOTAL_YEARS }, (_, i) => START_YEAR + i).map(year => (
            <div 
              key={year} 
              className="flex-1 text-center relative"
              style={{ minWidth: '30px' }}
            >
              <span className="text-xs text-gray-400">{year}</span>
              <div className="h-1 w-px bg-gray-200 mx-auto mt-1"></div>
            </div>
          ))}
        </div>
      </div>

      {/* 技术列表 */}
      <div className="space-y-1">
        {techData.map(tech => {
          const color = colorMap[tech.color] || tech.color;
          
          return (
            <div key={tech.name} className="flex items-center">
              {/* 技术名 */}
              <div 
                className="w-24 text-xs font-medium text-right pr-3 shrink-0"
                style={{ color: color }}
              >
                {tech.name}
              </div>
              
              {/* 时间条 */}
              <div className="flex-1 h-6 relative">
                {/* 背景网格 */}
                <div className="absolute inset-0 flex">
                  {Array.from({ length: TOTAL_YEARS }, (_, i) => START_YEAR + i).map(year => (
                    <div 
                      key={year} 
                      className="flex-1 border-r border-gray-100"
                      style={{ marginRight: year === START_YEAR + TOTAL_YEARS - 1 ? 0 : '-1px' }}
                    ></div>
                  ))}
                </div>
                
                {/* 彩色块 */}
                <div className="absolute inset-0 flex items-center">
                  {Array.from({ length: TOTAL_YEARS }, (_, i) => START_YEAR + i).map(year => {
                    const months = getYearStatus(year, tech.ranges);
                    if (months.length === 0) return null;
                    
                    return (
                      <div 
                        key={year}
                        className="flex-1 h-4 relative"
                      >
                        {months.length === 12 ? (
                          <div 
                            className="absolute inset-y-0 rounded-sm"
                            style={{ 
                              backgroundColor: color,
                              opacity: 0.85,
                              left: 0,
                              width: '100%',
                              minWidth: '4px'
                            }}
                          ></div>
                        ) : (
                          months.map(month => {
                            const monthWidth = 100 / 12;
                            return (
                              <div
                                key={month}
                                className="absolute h-2 rounded-sm"
                                style={{
                                  backgroundColor: color,
                                  opacity: 0.75,
                                  left: `${(month - 1) * monthWidth}%`,
                                  width: `${monthWidth - 1}%`,
                                  top: '50%',
                                  transform: 'translateY(-50%)'
                                }}
                              ></div>
                            );
                          })
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );

  // 模板B：矩阵表格样式
  const TemplateB = () => (
    <div className="flex">
      {/* 左侧技术名 */}
      <div className="w-32 shrink-0">
        <div className="h-8 border-b border-gray-300"></div>
        {techData.map(tech => (
          <div 
            key={tech.name}
            className="h-8 flex items-center pr-3 text-xs font-medium border-b border-gray-100 whitespace-nowrap overflow-visible"
            style={{ color: colorMap[tech.color] || tech.color }}
          >
            {tech.name}
          </div>
        ))}
      </div>

      {/* 右侧矩阵 */}
      <div className="flex-1 overflow-hidden">
        {/* 年份头部 */}
        <div className="flex h-8 border-b border-gray-300">
          {Array.from({ length: TOTAL_YEARS }, (_, i) => START_YEAR + i).map(year => (
            <div 
              key={year}
              className="flex-1 text-center text-xs text-gray-400 border-l border-gray-100 flex items-end justify-center pb-1"
            >
              {year}
            </div>
          ))}
        </div>

        {/* 技术行 */}
        {techData.map(tech => {
          const color = colorMap[tech.color] || tech.color;
          
          return (
            <div key={tech.name} className="flex h-8 border-b border-gray-100">
              {Array.from({ length: TOTAL_YEARS }, (_, i) => START_YEAR + i).map(year => {
                const months = getYearStatus(year, tech.ranges);
                const isActive = months.length > 0;
                
                return (
                  <div 
                    key={year}
                    className="flex-1 border-l border-gray-50 relative"
                  >
                    {isActive && (
                      <div 
                        className="absolute inset-y-1 left-0.5 right-0.5 rounded-sm"
                        style={{ backgroundColor: color }}
                      ></div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="p-10 h-full relative">
      {/* 标题区域 */}
      <div className="mb-3">
        <h1 className="text-3xl font-light text-gray-800 tracking-widest uppercase">Technology Timeline</h1>
        <div className="mt-2 h-px bg-gray-300"></div>
        <div className="mt-3 flex justify-between text-xs text-gray-500">
          <span>2016 — 2027</span>
          <span>{techData.length} Technologies</span>
        </div>
      </div>

      {/* 模板切换按钮（打印时隐藏） */}
      <div className="absolute top-10 right-10 flex gap-1 print:hidden">
        <button
          onClick={() => setTemplate('A')}
          className={`px-3 py-1 text-xs rounded transition-colors ${
            template === 'A'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Timeline
        </button>
        <button
          onClick={() => setTemplate('B')}
          className={`px-3 py-1 text-xs rounded transition-colors ${
            template === 'B'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Matrix
        </button>
      </div>

      {/* 模板内容 */}
      {template === 'A' ? <TemplateA /> : <TemplateB />}

      {/* 阶段图例 */}
      <div className="mt-4 pt-3 border-t border-gray-200">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {phases.map((phase, idx) => (
            <div key={phase.year} className="flex items-center gap-2">
              <div className="flex items-center">
                <div className="w-px h-3 bg-gray-300"></div>
                <span className="ml-2 text-xs text-gray-600">{phase.year}</span>
              </div>
              <span className="text-xs text-gray-400">{phase.label}</span>
              {idx < phases.length - 1 && (
                <span className="text-gray-300 ml-2">|</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 底部 */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between text-[10px] text-gray-400">
        <span>Technology Stack</span>
        <span>Page {pageNum}</span>
      </div>
    </div>
  );
};

export default TechStackPage;
