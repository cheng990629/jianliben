import React from 'react';

interface PageProps {
  pageNum: number;
}

// ==================== 页面6：礁岛创业 ====================
const JiaodaoStartupPage = ({ pageNum }: PageProps) => (
  <div className="p-8 h-full flex flex-col">
    {/* 标题区域 */}
    <div className="mb-3 min-h-[80px]">
      <h1 className="text-3xl font-light text-gray-800 tracking-widest uppercase">AI研发创业</h1>
      <p className="text-sm text-gray-500 mt-1">一人公司模式 · AI服务镜像与算力分发平台</p>
      <div className="mt-2 flex items-center gap-4 text-xs text-gray-500">
        <span className="px-2 py-0.5 bg-gray-100 rounded">礁岛（辽阳）软件技术有限公司</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">一人公司 & AI研发</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">2024.11 - 2025.8</span>
      </div>
      <div className="mt-2 h-px bg-gray-300"></div>
    </div>

    {/* 内容区域 */}
    <div className="flex gap-6 flex-1 overflow-y-auto">
      <div className="w-full space-y-4">
        {/* 个人概述 */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">个人概述</h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            具备独立创业与全栈开发经验，擅长 AI 服务整合、API 网关开发、前后端实现与电商商业化落地。能够独立完成从技术架构、系统开发到项目运营的全流程工作，拥有从 0 到 1 搭建商业化项目的实战能力。
          </p>
        </div>

        {/* AI 服务镜像与算力分发平台 */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">AI 服务镜像与算力分发平台 | 独立全栈开发 & 运营</h3>
          <div className="bg-gray-50 p-3 rounded text-xs text-gray-600 space-y-2">
            <p><strong>项目描述：</strong>独立搭建面向国内用户的 AI 服务聚合与加速平台，实现国际主流大模型（GPT、Claude）低成本、高可用访问，提供共享 API、会话隔离、历史记录持久化等企业级功能，降低用户使用成本约 75%，提升 Token 与算力使用效率。</p>
            <p><strong>技术栈：</strong>Nginx + Lua、Python、Vue3、Nuxt、Element Plus、MySQL/SQLite 持久化、API 网关、负载分发</p>
            
            <p className="mt-2"><strong>核心工作</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>负责全链路架构设计与开发，使用 Nginx + Lua 实现请求路由、鉴权与流量分发，完成多用户会话隔离、历史对话与项目数据持久化存储</li>
              <li>自研共享 API-Key 调度系统，实现多账号池管理、负载均衡与资源利用率最大化，保障服务高可用</li>
              <li>搭建前端管理后台，实现用户订单、使用时长、算力消耗、账号状态的可视化监控与管理</li>
              <li>整合跨境账号资源池（Google、Outlook、Apple ID、App Store 等），完成从货源、接码、虚拟卡到账号生命周期的自动化管理</li>
            </ul>
            
            <p className="mt-2"><strong>业务运营</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>以一人公司模式独立完成产品、技术、运营、客服全流程</li>
              <li>在淘宝开设 5 家店铺进行标准化变现，单店稳定销量 1000+，实现月净利润 5000–8000 元</li>
              <li>构建从算力供应、AI 镜像、跨境货源到电商变现的完整闭环</li>
            </ul>
            
            <p className="mt-2"><strong>项目亮点</strong></p>
            <ul className="list-disc list-inside space-y-1">
              <li>独立完成技术攻坚 + 产品落地 + 商业变现，具备极强的自驱与全栈执行能力</li>
              <li>实现 AI 服务国内加速与成本优化，用户成本降低 75%</li>
              <li>打通跨境账号货源、虚拟资产、AI 算力、电商销售的全链条，形成可复制的轻资产创业模式</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* 底部 */}
    <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-400">
      <span>AI研发创业</span>
      <span>第 {pageNum} 页</span>
    </div>
  </div>
);

export default JiaodaoStartupPage;
