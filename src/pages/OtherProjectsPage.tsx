import React from 'react';

interface PageProps {
  pageNum: number;
}

// ==================== 页面4：其他项目 ====================
const OtherProjectsPage = ({ pageNum }: PageProps) => (
  <div className="p-6 h-full flex flex-col">
    {/* 标题区域 */}
    <div className="mb-2 min-h-[72px]">
      <h1 className="text-3xl font-light text-gray-800 tracking-widest uppercase">其他项目</h1>
      <p className="text-sm text-gray-500 mt-1">多领域项目经验，涵盖薪酬、报销、医药、软著等系统</p>
      <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
        <span className="px-2 py-0.5 bg-gray-100 rounded">湖北万亚软件技术有限公司</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">全栈开发</span>
      </div>
      <div className="mt-2 h-px bg-gray-300"></div>
    </div>

    {/* 内容区域 */}
    <div className="flex gap-6 flex-1 overflow-y-auto">
      <div className="w-full space-y-3">
        {/* 1. 希格薪酬系统 */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">1. 希格薪酬系统</h3>
          <div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
            <p className="mb-1.5">
              <strong>项目描述：</strong>
              面向多院所场景的薪酬、社保一体化处理系统，支持批量核算、自动计税、社保申报、人员档案管理等核心功能。
            </p>
            <p className="mb-1.5">
              <strong>负责内容：</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>参与需求分析、系统设计与功能开发，实现院所、人员、薪酬、社保数据的统一管理</li>
              <li>完成薪酬核算逻辑、报表导出、数据校验等模块开发，提升薪酬发放效率与准确性</li>
            </ul>
          </div>
        </div>

        {/* 2. 蟒蛇报销 */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">2. 蟒蛇报销（在线报销平台）</h3>
          <div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
            <p className="mb-1.5">
              <strong>项目描述：</strong>
              企业级在线报销管理平台，实现报销申请、审批流、发票识别、财务对账、单据管理全流程线上化。
            </p>
            <p className="mb-1.5">
              <strong>负责内容：</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>负责前端页面开发与接口联调，实现表单提交、流程审批、状态追踪等功能</li>
              <li>参与后端接口设计、数据持久化与权限控制，提升财务报销流程自动化水平</li>
            </ul>
          </div>
        </div>

        {/* 3. 医药品管理系统 */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">3. 医药品管理系统</h3>
          <div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
            <p className="mb-1.5">
              <strong>项目描述：</strong>
              医药行业进销存管理系统，覆盖药品采购、入库、出库、库存预警、批次管理、统计报表等全链路业务。
            </p>
            <p className="mb-1.5">
              <strong>负责内容：</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>设计并实现药品基础信息、库存、出入库等核心模块，支持多维度查询与数据统计</li>
              <li>优化库存逻辑与操作流程，降低药品管理差错率，提升仓库与财务对账效率</li>
            </ul>
          </div>
        </div>

        {/* 4. 批量软著申请系统 */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">4. 批量软著申请系统（PHP）</h3>
          <div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
            <p className="mb-1.5">
              <strong>项目描述：</strong>
              面向批量软著申报场景的自动化处理系统，用于简化软件著作权登记流程、提升申报效率。
            </p>
            <p className="mb-1.5">
              <strong>负责内容：</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>使用 PHP 完成系统开发，实现信息批量录入、材料自动生成、数据格式化导出</li>
              <li>封装标准化申报流程，大幅减少人工重复操作，支持高并发、大批量申报任务</li>
            </ul>
          </div>
        </div>

        {/* 5. 财税达工厂 */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">
            5. 财税达工厂 — 大规模代账作业中心
          </h3>
          <div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
            <p className="mb-1.5">
              <strong>项目描述：</strong>
              财税达的规模化作业支撑系统，专为代账公司、财税工厂设计，用于集中处理海量企业记账、报税、社保、票据等业务。
            </p>
            <p className="mb-1.5">
              <strong>负责内容：</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>设计并实现多企业、多账套、高并发的集中式处理架构，支持批量记账、批量报税</li>
              <li>优化任务调度、数据处理与批量操作逻辑，大幅提升代账机构人效与产能</li>
              <li>构建标准化作业流程，实现从票据采集→凭证→记账→报税→归档的全链路自动化</li>
            </ul>
          </div>
        </div>

        {/* 6. 各院所定制化软件集群 */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">
            6. 各院所定制化软件集群（JSP + Layui）
          </h3>
          <div className="bg-gray-50 p-3 rounded text-xs text-gray-600">
            <p className="mb-1.5">
              <strong>项目描述：</strong>
              面向科研院所与政府单位的定制化业务系统群，覆盖薪资核算、费用报销、医药进销存、CRM 客户关系管理等业务场景，
              服务于农科院各院所、国家安全中心、民族报社、海迅达等多类客户。
            </p>
            <p className="mb-1.5">
              <strong>负责内容：</strong>
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>基于 JSP + Layui 技术栈，为各院所设计并实现定制化业务模块（薪资、报销、医药、进销存、CRM 等）</li>
              <li>统一封装列表、表单、报表等通用组件，提升多项目复用率与交付效率</li>
              <li>负责关键页面性能优化与交互体验改造，适配不同院所的个性化流程与权限要求</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* 底部 */}
    <div className="mt-auto pt-2 border-t border-gray-100 flex justify-between text-xs text-gray-400">
      <span>其他项目</span>
      <span>第 {pageNum} 页</span>
    </div>
  </div>
);

export default OtherProjectsPage;