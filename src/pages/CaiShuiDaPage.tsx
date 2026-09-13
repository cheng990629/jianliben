import React from 'react';

interface PageProps {
  pageNum: number;
}

// ==================== 页面2：财税达 ====================
const CaiShuiDaPage = ({ pageNum }: PageProps) => (
  <div className="p-6 h-full flex flex-col">
    {/* 标题区域 */}
    <div className="mb-2">
      <h1 className="text-3xl font-light text-gray-800 tracking-widest uppercase">财税智能集中记账 SaaS 平台</h1>
      <p className="text-sm text-gray-500 mt-1">湖北万亚软件技术有限公司 · 全栈软件架构师 · 项目周期： 2018.12 - 2025.8</p>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="px-2 py-0.5 bg-gray-100 rounded">财税达</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">全栈软件架构师</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">K8s</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">微服务</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">RPA</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">私有云 SaaS</span>
      </div>
      <div className="mt-2 h-px bg-gray-300"></div>
    </div>

    <div className="flex-1 flex flex-col gap-2.5 overflow-hidden">
      {/* 项目简介 */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">项目简介</h3>
        <div className="text-xs text-gray-600 leading-relaxed space-y-1">
          <p>
            2018至2025年全程主导企业业务方向迭代与技术体系重构升级，独立承担全栈架构设计、核心技术选型、关键技术攻坚及DevOps全流程。牵头财税达系统全生命周期研发，主导Web前端3个SPA核心页面开发、后端接口架构搭建及多环境部署运维，深度适配财税行业核心业务场景，形成多项差异化技术成果，推动系统从传统定制化软件演进为私有云SaaS模式，最终服务近千家企业。
          </p>
        </div>
      </div>

      {/* 七阶段技术迭代 */}
      <div className="flex-1 space-y-2 overflow-hidden">
        <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wide">七阶段技术迭代与架构重构（2018-2025）</h3>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">1. 初期架构重构阶段（2018-2019）</h4>
            <span className="text-[10px] text-gray-400">主责 · 架构</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              摒弃 eclipse struct jsp、jdk1.6、tomcat 传统技术架构，重构为 maven jar+spring jpa 标准化架构，适配 jdk1.8、jdk13、jdk15 多版本迭代需求。采用 sql server 数据库搭建数据存储体系，设计 windows bat 自动化打包方案，完成基础技术体系标准化建设，显著提升项目可维护性与规模化复制能力。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">2. 定制化软件研发阶段（2019-2020）</h4>
            <span className="text-[10px] text-gray-400">主责 · 前端</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              聚焦定制化财税软件研发需求，创新采用前端 script 直接引入 Vue 框架（非 nodejs 环境），重点攻克复杂交互组件开发难点。核心突破填制凭证复杂表格的渲染与交互瓶颈，实现凭证录入、多维度校验、批量处理等基础财税功能模块的标准化开发，形成可复用的前端组件库雏形。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">3. 云 SaaS 财税应用架构阶段（2020-2021）</h4>
            <span className="text-[10px] text-gray-400">主责 · 全栈</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              转向云 SaaS 财税服务方向，搭建前后端分离架构体系，引入 nodejs、vue2、elementui 技术栈。初期通过视图与存储过程实现业务逻辑封装，后续迭代升级为 restful 接口架构。完成微前端框架选型论证，对比无界、qiankun 两种技术方案，最终确定无界框架作为多模块集成方案。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">4. 混合云架构迭代阶段（2021-2022）</h4>
            <span className="text-[10px] text-gray-400">主责 · 后端+多端</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              完成后端架构升级，从 spring web jpa 架构迭代为 webflux r2dbc 响应式架构，推行代码规范化与优雅化设计。采用 postgres 数据库优化数据存储性能，同步落地 electron 桌面化、Tauri（Rust）跨平台开发，结合 uniapp 实现多终端部署，构建「PC端+移动端+桌面端」多终端协同体系。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">5. 私有云架构升级阶段（2022-2023）</h4>
            <span className="text-[10px] text-gray-400">主责 · 微服务</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              重构为 spring cloud alibaba 微服务架构，引入 jeecgboot 低代码开发平台。创新采用 sharding-jdbc 分库分表技术（按租户ID水平分片、按时间垂直分片），解决多租户大规模数据存储与查询瓶颈。前端升级为 vue3、vbenadmin、antdesign、ts 技术栈，搭建 jenkins CI 体系，实现研发流程自动化。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">6. 私有云 SaaS 集群化阶段（2023-2024）</h4>
            <span className="text-[10px] text-gray-400">主责 · 运维</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              部署5台高性能服务器（128线程、512G内存×5），搭建 PVE 超融合服务器集群与 k8s 容器化集群，采用 kairos 不可变基础设施与 github CI/CD 流水线。引入 oceanbase 分布式数据库，搭建微服务集群体系（nacos 注册配置集群、redis 缓存集群、微服务模块集群），大幅提升系统负载能力与并发处理性能。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">7. Python RPA 自动化技术落地阶段（2024-2025）</h4>
            <span className="text-[10px] text-gray-400">主责 · RPA</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              主导 Python RPA 技术与财税业务深度融合，实现发票自动抓取、社保自动缴纳、税务数据批量采集。基于 k8s 集群搭建 linux+ffmpeg 容器环境，嵌套安卓虚拟机。创新设计多终端协同登录方案：windows 虚拟机执行 RPA 任务→截图二维码→ffmpeg 转虚拟摄像头视频流→安卓物联卡自动登录→PC端执行财税任务。与同类产品相比，在多终端协同、数据采集精度上形成显著差异化优势。
            </p>
          </div>
        </div>
      </div>

      {/* 底部：技术栈 + 指标 */}
      <div className="mt-auto space-y-2">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">技术栈</h3>
          <div className="flex flex-wrap gap-1.5">
            {[
              'Vue3 / Vben / Ant Design Vue', 'Nuxt SSR', 'Spring Cloud Alibaba',
              'WebFlux / R2DBC', 'Sharding-JDBC', 'OceanBase',
              'K8s / PVE', 'Jenkins / GitHub CI', 'Electron / Tauri',
              'Python RPA', 'Nacos / Redis', 'PostgreSQL',
            ].map((t) => (
              <span key={t} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded">{t}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-5 gap-1.5 text-center text-[10px]">
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">微服务</div>
            <div className="text-gray-500">Spring Cloud Alibaba</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">分库分表</div>
            <div className="text-gray-500">Sharding-JDBC</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">响应式</div>
            <div className="text-gray-500">WebFlux / R2DBC</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">K8s 集群</div>
            <div className="text-gray-500">PVE 超融合</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">私有云 SaaS</div>
            <div className="text-gray-500">多租户隔离</div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between text-xs text-gray-400">
      <span>财税达 · SaaS 平台</span>
      <span>第 {pageNum} 页</span>
    </div>
  </div>
);

export default CaiShuiDaPage;
