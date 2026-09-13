import React from 'react';
import { architectureData } from '../data';

interface ArchitecturePageProps {
  pageNum: number;
}

// ==================== 页面3：技术架构 ====================
const ArchitecturePage = ({ pageNum }: ArchitecturePageProps) => (
  <div className="p-6 h-full flex flex-col">
    {/* 标题区域 */}
    <div className="mb-2">
      <h1 className="font-display italic text-3xl text-gray-800 tracking-widest uppercase">System Architecture</h1>
      <p className="font-accent text-sm text-gray-500 mt-1">微服务架构 · 云原生设计</p>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="px-2 py-0.5 bg-gray-100 rounded">Microservices</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">Cloud Native</span>
      </div>
      <div className="mt-2 h-px bg-gray-300"></div>
    </div>

    {/* 架构图 */}
    <div className="flex-1 flex flex-col gap-2.5 overflow-hidden">
      <div className="flex flex-col gap-2">
        {architectureData.layers.map((layer) => (
          <div key={layer.name} className="flex items-center">
            <div
              className="w-20 text-[10px] font-medium text-right pr-2 shrink-0"
              style={{ color: layer.color }}
            >
              {layer.name}
            </div>
            <div className="flex-1 flex gap-1.5">
              {layer.components.map((comp, compIdx) => (
                <div
                  key={comp.name}
                  className="flex-1 px-2 py-1.5 border border-gray-200 text-center relative"
                >
                  <span className="text-xs mr-0.5">{comp.icon}</span>
                  <span className="text-[10px] text-gray-700">{comp.name}</span>
                  {compIdx < layer.components.length - 1 && (
                    <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-px bg-gray-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto space-y-2">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">基础设施</h3>
          <div className="flex flex-wrap gap-1.5">
            {architectureData.infrastructure.map((item) => (
              <span key={item.name} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded">
                {item.name} · {item.type}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">99.99%</div>
            <div className="text-gray-500">Availability</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">30+</div>
            <div className="text-gray-500">Microservices</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">10M+</div>
            <div className="text-gray-500">Daily Requests</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">&lt;100ms</div>
            <div className="text-gray-500">Response Time</div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between text-xs text-gray-400">
      <span>技术架构 · System Architecture</span>
      <span className="font-accent">第 {pageNum} 页</span>
    </div>
  </div>
);

export default ArchitecturePage;
