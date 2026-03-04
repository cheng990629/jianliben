import React from 'react';

interface PrototypePageProps {
  pageNum: number;
}

// ==================== 页面5：原型展示 ====================
const PrototypePage = ({ pageNum }: PrototypePageProps) => (
  <div className="p-10 h-full">
    {/* 标题区域 */}
    <div className="mb-3">
      <h1 className="text-3xl font-light text-gray-800 tracking-widest uppercase">Design Prototypes</h1>
      <div className="mt-2 h-px bg-gray-300"></div>
      <div className="mt-2 flex justify-between text-xs text-gray-500">
        <span>UI/UX Design Works</span>
        <span>Wireframes & Mockups</span>
      </div>
    </div>

    {/* 原型占位 */}
    <div className="grid grid-cols-2 gap-4">
      {[1, 2, 3, 4].map((item) => (
        <div 
          key={item}
          className="aspect-video bg-gray-50 border border-gray-200 rounded-sm flex flex-col items-center justify-center"
        >
          <div className="w-12 h-8 border-2 border-gray-300 border-dashed rounded mb-2"></div>
          <span className="text-xs text-gray-400">Prototype {item}</span>
          <span className="text-[10px] text-gray-300 mt-1">1280 × 720</span>
        </div>
      ))}
    </div>

    {/* 说明 */}
    <div className="mt-6 p-4 bg-gray-50 border border-gray-100 rounded-sm">
      <div className="flex items-center justify-center gap-8 text-center">
        <div>
          <p className="text-lg font-light text-gray-800">Figma</p>
          <p className="text-[10px] text-gray-400">Design Tool</p>
        </div>
        <div>
          <p className="text-lg font-light text-gray-800">50+</p>
          <p className="text-[10px] text-gray-400">Screens</p>
        </div>
        <div>
          <p className="text-lg font-light text-gray-800">10+</p>
          <p className="text-[10px] text-gray-400">Components</p>
        </div>
        <div>
          <p className="text-lg font-light text-gray-800">A+</p>
          <p className="text-[10px] text-gray-400">User Rating</p>
        </div>
      </div>
    </div>

    {/* 底部 */}
    <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-400">
      <span>Design Prototypes</span>
      <span>Page {pageNum}</span>
    </div>
  </div>
);

export default PrototypePage;
