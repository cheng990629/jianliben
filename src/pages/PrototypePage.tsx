import React from 'react';

interface PrototypePageProps {
  pageNum: number;
}

// ==================== 页面5：原型展示 ====================
const PrototypePage = ({ pageNum }: PrototypePageProps) => (
  <div className="p-6 h-full flex flex-col">
    {/* 标题区域 */}
    <div className="mb-2">
      <h1 className="text-3xl font-light text-gray-800 tracking-widest uppercase">Design Prototypes</h1>
      <p className="text-sm text-gray-500 mt-1">UI/UX 设计作品 · Wireframes & Mockups</p>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="px-2 py-0.5 bg-gray-100 rounded">Figma</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">UI/UX</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">Wireframes</span>
      </div>
      <div className="mt-2 h-px bg-gray-300"></div>
    </div>

    <div className="flex-1 flex flex-col gap-2.5 overflow-hidden">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">原型占位</h3>
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="aspect-video border border-gray-200 flex flex-col items-center justify-center"
            >
              <div className="w-12 h-8 border-2 border-gray-300 border-dashed rounded mb-2"></div>
              <span className="text-xs text-gray-500">Prototype {item}</span>
              <span className="text-[10px] text-gray-400 mt-0.5">1280 × 720</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto space-y-2">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">设计能力</h3>
          <div className="flex flex-wrap gap-1.5">
            {['Figma', 'Wireframes', 'Mockups', 'Design System'].map((t) => (
              <span key={t} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded">{t}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">Figma</div>
            <div className="text-gray-500">Design Tool</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">50+</div>
            <div className="text-gray-500">Screens</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">10+</div>
            <div className="text-gray-500">Components</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">A+</div>
            <div className="text-gray-500">User Rating</div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between text-xs text-gray-400">
      <span>原型展示 · Design Prototypes</span>
      <span>第 {pageNum} 页</span>
    </div>
  </div>
);

export default PrototypePage;
