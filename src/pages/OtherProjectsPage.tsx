import React from 'react';

interface PageProps {
  pageNum: number;
}

// ==================== 页面4：其他项目 ====================
const OtherProjectsPage = ({ pageNum }: PageProps) => (
  <div className="p-6 h-full flex flex-col">
    {/* 标题区域 */}
    <div className="mb-2">
      <h1 className="text-3xl font-light text-gray-800 tracking-widest uppercase">其他项目</h1>
      <p className="text-sm text-gray-500 mt-1">多领域项目经验，涵盖薪酬、报销、医药、看护、软著等系统</p>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="px-2 py-0.5 bg-gray-100 rounded">湖北万亚软件技术有限公司</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">全栈开发</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">薪酬 / 报销</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">医药 / 看护</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">代账工厂</span>
      </div>
      <div className="mt-2 h-px bg-gray-300"></div>
    </div>

    <div className="flex-1 flex flex-col gap-2.5 overflow-hidden">
      <div className="flex-1 space-y-2">
        <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wide">项目经历 · 本人负责</h3>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">1. 希格薪酬系统</h4>
            <span className="text-[10px] text-gray-400">参与 · 全栈</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed">
            <p>
              面向多院所场景的薪酬、社保一体化处理系统，支持批量核算、自动计税、社保申报、人员档案管理。参与需求分析、系统设计与功能开发，完成薪酬核算逻辑、报表导出、数据校验等模块，提升薪酬发放效率与准确性。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">2. 蟒蛇报销（在线报销平台）</h4>
            <span className="text-[10px] text-gray-400">主责 · 全栈</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed">
            <p>
              企业级在线报销管理平台，实现报销申请、审批流、发票识别、财务对账、单据管理全流程线上化。负责前端页面开发与接口联调，参与后端接口设计、数据持久化与权限控制，提升财务报销流程自动化水平。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">3. 医药品管理系统</h4>
            <span className="text-[10px] text-gray-400">主责 · 全栈</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed">
            <p>
              医药行业进销存管理系统，覆盖药品采购、入库、出库、库存预警、批次管理、统计报表。设计并实现药品基础信息、库存、出入库等核心模块，优化库存逻辑与操作流程，降低管理差错率。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">4. 批量软著申请系统（PHP）</h4>
            <span className="text-[10px] text-gray-400">主责 · 后端</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed">
            <p>
              面向批量软著申报场景的自动化处理系统。使用 PHP 完成系统开发，实现信息批量录入、材料自动生成、数据格式化导出，封装标准化申报流程，支持高并发、大批量申报任务。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">5. 财税达工厂 — 大规模代账作业中心</h4>
            <span className="text-[10px] text-gray-400">主责 · 架构</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed">
            <p>
              专为代账公司、财税工厂设计的规模化作业支撑系统。设计多企业、多账套、高并发的集中式处理架构，优化任务调度与批量操作逻辑，构建从票据采集→凭证→记账→报税→归档的全链路自动化。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">6. 各院所定制化软件集群（JSP + Layui）</h4>
            <span className="text-[10px] text-gray-400">主责 · 全栈</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed">
            <p>
              面向科研院所与政府单位的定制化业务系统群，覆盖薪资、报销、医药进销存、CRM 等，服务于农科院各院所、国家安全中心、民族报社、海迅达等多类客户。统一封装列表、表单、报表等通用组件，提升多项目复用率与交付效率。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">7. 康泰智慧看护（若依 / 人脸情绪识别 / 蓝牙设备）</h4>
            <span className="text-[10px] text-gray-400">主责 · 全栈</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed">
            <p>
              基于若依框架的智慧看护管理系统，融合人脸情绪识别与蓝牙设备协议对接，实现情绪监测、设备状态感知、异常告警及数据实时传输。落地情绪状态采集与异常识别，完成蓝牙设备接入、状态上报与告警链路。
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto space-y-2">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">技术栈</h3>
          <div className="flex flex-wrap gap-1.5">
            {[
              'Spring Boot', 'JSP / Layui', 'Vue', 'PHP',
              '若依', '人脸情绪识别', '蓝牙协议', '进销存',
            ].map((t) => (
              <span key={t} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded">{t}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">7+</div>
            <div className="text-gray-500">独立/参与项目</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">多院所</div>
            <div className="text-gray-500">定制化交付</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">代账工厂</div>
            <div className="text-gray-500">规模化作业</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">全链路</div>
            <div className="text-gray-500">薪酬→看护</div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between text-xs text-gray-400">
      <span>其他项目</span>
      <span>第 {pageNum} 页</span>
    </div>
  </div>
);

export default OtherProjectsPage;
