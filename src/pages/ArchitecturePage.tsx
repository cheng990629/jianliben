import React from 'react';
import { architectureData } from '../data';

interface ArchitecturePageProps {
  pageNum: number;
}

// ==================== 页面3：技术架构 ====================
const ArchitecturePage = ({ pageNum }: ArchitecturePageProps) => (
  <div className="p-8 h-full">
    {/* 标题区域 */}
    <div className="mb-3">
      <h1 className="text-3xl font-light text-gray-800 tracking-widest uppercase">System Architecture</h1>
      <div className="mt-2 h-px bg-gray-300"></div>
      <div className="mt-2 flex justify-between text-xs text-gray-500">
        <span>Microservices Architecture</span>
        <span>Cloud Native Design</span>
      </div>
    </div>

    {/* 架构图 */}
    <div className="flex flex-col gap-2">
      {architectureData.layers.map((layer, layerIdx) => (
        <div key={layer.name} className="flex items-center">
          {/* 层名称 */}
          <div 
            className="w-20 text-[10px] font-medium text-right pr-2 shrink-0"
            style={{ color: layer.color }}
          >
            {layer.name}
          </div>
          
          {/* 层内容 */}
          <div className="flex-1 flex gap-1.5">
            {layer.components.map((comp, compIdx) => (
              <div 
                key={comp.name}
                className="flex-1 px-2 py-1.5 bg-gray-50 border border-gray-200 rounded-sm text-center relative"
              >
                <span className="text-xs mr-0.5">{comp.icon}</span>
                <span className="text-[10px] text-gray-700">{comp.name}</span>
                {/* 连接线 */}
                {compIdx < layer.components.length - 1 && (
                  <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-px bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* 基础设施 */}
    <div className="mt-4 pt-3 border-t border-gray-200">
      <div className="flex items-center justify-center gap-6">
        {architectureData.infrastructure.map((item, idx) => (
          <React.Fragment key={item.name}>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
              <span className="text-[10px] text-gray-600">{item.name}</span>
              <span className="text-[9px] text-gray-400">({item.type})</span>
            </div>
            {idx < architectureData.infrastructure.length - 1 && (
              <span className="text-gray-300">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>

    {/* 架构说明 */}
    <div className="mt-4 p-3 bg-gray-50 border border-gray-100 rounded-sm">
      <div className="grid grid-cols-4 gap-2 text-center">
        <div>
          <p className="text-base font-light text-gray-800">99.99%</p>
          <p className="text-[9px] text-gray-400">Availability</p>
        </div>
        <div>
          <p className="text-base font-light text-gray-800">30+</p>
          <p className="text-[9px] text-gray-400">Microservices</p>
        </div>
        <div>
          <p className="text-base font-light text-gray-800">10M+</p>
          <p className="text-[9px] text-gray-400">Daily Requests</p>
        </div>
        <div>
          <p className="text-base font-light text-gray-800">&lt;100ms</p>
          <p className="text-[9px] text-gray-400">Response Time</p>
        </div>
      </div>
    </div>

    {/* 底部 */}
    <div className="mt-auto pt-2 border-t border-gray-100 flex justify-between text-[10px] text-gray-400">
      <span>System Architecture</span>
      <span>Page {pageNum}</span>
    </div>
  </div>
);

export default ArchitecturePage;
