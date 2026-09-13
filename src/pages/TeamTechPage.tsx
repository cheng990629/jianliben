import React from 'react';

interface PageProps {
  pageNum: number;
}

// ==================== 页面3：团队技术贡献 ====================
const TeamTechPage = ({ pageNum }: PageProps) => (
  <div className="p-6 h-full flex flex-col">
    {/* 标题区域 */}
    <div className="mb-2">
      <h1 className="font-display text-3xl text-gray-800 tracking-wide">团队技术贡献</h1>
      <p className="font-accent text-sm text-gray-500 mt-1">湖北万亚软件技术有限公司 · 技术架构负责人</p>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="px-2 py-0.5 bg-gray-100 rounded">技术架构负责人</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">DevOps</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">云原生</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">AI 工具</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">微服务</span>
      </div>
      <div className="mt-2 h-px bg-gray-300"></div>
    </div>

    <div className="flex-1 flex flex-col gap-2.5 overflow-hidden">
      {/* 项目简介 */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">个人概述</h3>
        <div className="text-xs text-gray-600 leading-relaxed space-y-1">
          <p>
            作为团队技术先驱与架构负责人，主导全栈技术前瞻规划与落地实践，推动团队研发能力实现本质飞跃。通过对响应式编程、微服务、DevOps、云原生、AI 研发工具链的全链路推动与攻坚，大幅提升系统稳定性、并发能力与迭代效率，形成可复用、可扩展的技术体系与工程规范，项目交付更可靠、技术亮点更突出，代码优雅度、系统性能与协作效率均达到行业先进水平。
          </p>
        </div>
      </div>

      {/* 一、架构与技术栈 */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wide">一、架构与技术栈全面现代化升级</h3>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">后端技术体系深度演进</h4>
            <span className="font-accent text-[10px] text-gray-400">主责 · 架构</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed">
            <p>
              完成从传统 Eclipse JSP 迁移至 IDEA Maven 工程化体系；推动架构从 Spring Boot 单体升级为 Spring Cloud Alibaba 微服务；完成从 Spring Web 向 Spring WebFlux + R2dbc 响应式异步架构转型，解决高并发与复杂交互场景的性能瓶颈。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">前端架构现代化</h4>
            <span className="font-accent text-[10px] text-gray-400">主责 · 前端</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed">
            <p>
              从 Layui 升级为 Vue 技术体系，落地前后端分离；全面普及 Vue3 Composition API、`script setup` 规范；完成 Uniapp 跨端 Vue3 适配，实现一套代码运行于 iOS、Android、H5、小程序等多端。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">多租户权限与资源隔离 / 数据库架构升级</h4>
            <span className="font-accent text-[10px] text-gray-400">主责 · 中台</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed">
            <p>
              构建从账套、租户到组织架构的多租户权限与资源隔离体系，基于 RBAC 支持多粒度权限分配。推动数据库从单一 SQL Server 迁移至 MySQL、PostgreSQL、OceanBase 混合架构，实施读写分离与分库分表，保障大规模数据场景响应速度。
            </p>
          </div>
        </div>
      </div>

      {/* 二、研发效能 */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wide">二、研发效能与工程化体系建设</h3>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">代码管理 · 制品镜像 · CI/CD · 云原生 · 开发环境</h4>
            <span className="font-accent text-[10px] text-gray-400">主责 · DevOps</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed">
            <p>
              推动 SVN 迁移至 GitHub / 云效 Git / Coding，建立分支模型与 Code Review；搭建 Maven/NPM 私有仓库与 Harbor 镜像仓库；流水线从 Jenkins 升级至云效 CI、GitHub CI/CD；完成 Docker/Podman 容器化并向 K8s 持续交付演进；推动团队切换 IDEA + WSL，引入 Cursor 等 AI 辅助工具。
            </p>
          </div>
        </div>
      </div>

      {/* 三、AI 转型 */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wide">三、AI 研发与团队技术转型先行者</h3>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">通义灵码 · ChatGPT 桌面客户端 · Claude · AI 商业化探索</h4>
            <span className="font-accent text-[10px] text-gray-400">主责 · AI</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed">
            <p>
              早期引入通义灵码并落地到订票、外卖等真实业务；基于 Tauri + Rust 独立开发 ChatGPT 桌面客户端，率先验证 AI 协作模式；推广 Claude 编程友好版与提示工程实践，搭建企业内部 AI 服务中台；进一步开展 GPT、Claude 相关商业化创业探索，形成从技术研究到产品落地的完整闭环。
            </p>
          </div>
        </div>
      </div>

      {/* 底部 */}
      <div className="mt-auto space-y-2">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">技术影响力</h3>
          <div className="text-xs text-gray-600 leading-relaxed">
            <p>
              通过全链路技术推动与攻坚，团队整体研发水平实现质的飞跃。形成可复用、可扩展的技术体系与工程规范，为公司后续项目提供标准化技术支撑。
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">技术栈</h3>
          <div className="flex flex-wrap gap-1.5">
            {[
              'Spring Cloud Alibaba', 'WebFlux / R2DBC', 'Vue3 / Uniapp',
              'OceanBase / PostgreSQL', 'K8s / Docker', 'Jenkins / GitHub CI',
              'Harbor', 'IDEA + WSL', 'Cursor / 通义灵码', 'Tauri + Rust',
            ].map((t) => (
              <span key={t} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded">{t}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">60%↑</div>
            <div className="text-gray-500">研发效率</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">35%↓</div>
            <div className="text-gray-500">运维成本</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">85%</div>
            <div className="text-gray-500">代码复用率</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">60%↑</div>
            <div className="text-gray-500">部署效率</div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between text-xs text-gray-400">
      <span>团队技术贡献</span>
      <span className="font-accent">第 {pageNum} 页</span>
    </div>
  </div>
);

export default TeamTechPage;
