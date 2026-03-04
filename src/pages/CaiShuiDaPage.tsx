import React from 'react';

interface PageProps {
  pageNum: number;
}

// ==================== 页面2：财税达 ====================
const CaiShuiDaPage = ({ pageNum }: PageProps) => (
  <div className="p-5 h-full flex flex-col">
    {/* 紧凑标题 */}
    <div className="mb-2 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-light text-gray-800">财税达 - 财税智能集中记账SaaS平台</h1>
        <p className="text-xs text-gray-500">湖北万亚软件技术有限公司 · 全栈软件架构师 · 2018.12 - 2025.8</p>
      </div>
      <div className="flex gap-2">
        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[11px] rounded">K8s</span>
        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[11px] rounded">微服务</span>
        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[11px] rounded">RPA</span>
      </div>
    </div>
    <div className="mb-2 h-px bg-gray-300"></div>

    {/* 内容区域 */}
    <div className="flex-1 overflow-y-auto">
      <div className="space-y-2">
        {/* 核心工作概述 */}
        <div className="bg-gray-50 p-2 rounded">
          <p className="text-[11px] text-gray-600 leading-relaxed">
            <strong>核心工作：</strong>2018至2025年全程主导企业业务方向迭代与技术体系重构升级，独立承担全栈架构设计、核心技术选型、关键技术攻坚及DevOps全流程。牵头财税达系统全生命周期研发，主导Web前端3个SPA核心页面开发、后端接口架构搭建及多环境部署运维，深度适配财税行业核心业务场景，形成多项差异化技术成果，推动系统从传统定制化软件演进为私有云SaaS模式，最终服务近千家企业。
          </p>
        </div>

        {/* 七阶段技术迭代 - 每阶段详细展开 */}
        <div>
          <h3 className="text-xs font-medium text-gray-700 mb-1">七阶段技术迭代与架构重构（2018-2025）</h3>
          <div className="space-y-1 text-[11px] text-gray-600">
            <div className="bg-gray-50 p-1.5 rounded">
              <strong>1. 初期架构重构阶段（2018-2019）</strong>
              <p>摒弃eclipse struct jsp、jdk1.6、tomcat传统技术架构，重构为maven jar+spring jpa标准化架构，适配jdk1.8、jdk13、jdk15多版本迭代需求。采用sql server数据库搭建数据存储体系，设计windows bat自动化打包方案，完成基础技术体系标准化建设，显著提升项目可维护性与规模化复制能力。</p>
            </div>
            <div className="bg-gray-50 p-1.5 rounded">
              <strong>2. 定制化软件研发阶段（2019-2020）</strong>
              <p>聚焦定制化财税软件研发需求，创新采用前端script直接引入Vue框架（非nodejs环境），重点攻克复杂交互组件开发难点。核心突破填制凭证复杂表格的渲染与交互瓶颈，实现凭证录入、多维度校验、批量处理等基础财税功能模块的标准化开发，形成可复用的前端组件库雏形。</p>
            </div>
            <div className="bg-gray-50 p-1.5 rounded">
              <strong>3. 云SaaS财税应用架构阶段（2020-2021）</strong>
              <p>转向云SaaS财税服务方向，搭建前后端分离架构体系，引入nodejs、vue2、elementui技术栈。初期通过视图与存储过程实现业务逻辑封装，后续迭代升级为restful接口架构。完成微前端框架选型论证，对比无界、qiankun两种技术方案，最终确定无界框架作为多模块集成方案。</p>
            </div>
            <div className="bg-gray-50 p-1.5 rounded">
              <strong>4. 混合云架构迭代阶段（2021-2022）</strong>
              <p>完成后端架构升级，从spring web jpa架构迭代为webflux r2dbc响应式架构，推行代码规范化与优雅化设计。采用postgres数据库优化数据存储性能，同步落地electron桌面化、Tauri（Rust）跨平台开发，结合uniapp实现多终端部署，构建"PC端+移动端+桌面端"多终端协同体系。</p>
            </div>
            <div className="bg-gray-50 p-1.5 rounded">
              <strong>5. 私有云架构升级阶段（2022-2023）</strong>
              <p>重构为spring cloud alibaba微服务架构，引入jeecgboot低代码开发平台。创新采用sharding-jdbc分库分表技术（按租户ID水平分片、按时间垂直分片），解决多租户大规模数据存储与查询瓶颈。前端升级为vue3、vbenadmin、antdesign、ts技术栈，搭建jenkins CI体系，实现研发流程自动化。</p>
            </div>
            <div className="bg-gray-50 p-1.5 rounded">
              <strong>6. 私有云SaaS集群化阶段（2023-2024）</strong>
              <p>部署5台高性能服务器（128线程、512G内存×5），搭建PVE超融合服务器集群与k8s容器化集群，采用kairos不可变基础设施与github CI/CD流水线。引入oceanbase分布式数据库，搭建微服务集群体系（nacos注册配置集群、redis缓存集群、微服务模块集群），大幅提升系统负载能力与并发处理性能。</p>
            </div>
            <div className="bg-gray-50 p-1.5 rounded">
              <strong>7. Python RPA自动化技术落地阶段（2024-2025）</strong>
              <p>主导Python RPA技术与财税业务深度融合，实现发票自动抓取、社保自动缴纳、税务数据批量采集。基于k8s集群搭建linux+ffmpeg容器环境，嵌套安卓虚拟机。创新设计多终端协同登录方案：windows虚拟机执行RPA任务→截图二维码→ffmpeg转虚拟摄像头视频流→安卓物联卡自动登录→PC端执行财税任务。与同类产品相比，在多终端协同、数据采集精度上形成显著差异化优势。</p>
            </div>
          </div>
        </div>

        {/* 身份认证与服务订购 */}
        <div>
          <h3 className="text-xs font-medium text-gray-700 mb-1">身份认证与服务订购（Nuxt SSR）</h3>
          <div className="bg-gray-50 p-2 rounded text-[11px] text-gray-600">
            基于Nuxt SSR服务端渲染构建身份认证与SaaS服务订购体系，解决SPA首屏加载慢、SEO不友好问题，实现秒级首屏渲染与搜索引擎优化。服务订购管理（套餐配置、阶梯定价、自动续费）、企业实名认证、员工账号分配、多角色权限控制、异地登录预警、登录日志审计。累计支撑近千家企业、3000+用户同时在线。
          </div>
        </div>

        {/* 平台管理 */}
        <div>
          <h3 className="text-xs font-medium text-gray-700 mb-1">平台管理中台（Vben+Ant Design Vue）</h3>
          <div className="bg-gray-50 p-2 rounded text-[11px] text-gray-600">
            代账公司业务管理核心中枢，支持多账套集中管理、商机线索跟踪、税局直连登录、发票实时监测、账套健康状态诊断及经营数据统计。实现企业工商信息自动同步、纳税人资格智能识别、税务申报状态实时监控、发票进销项智能比对、账套逾期预警等功能，赋能代账企业数字化运营效率提升。
          </div>
        </div>

        {/* 核心账套业务 */}
        <div>
          <h3 className="text-xs font-medium text-gray-700 mb-1">核心账套业务（Vben+Ant Design Vue）</h3>
          <div className="bg-gray-50 p-2 rounded text-[11px] text-gray-600">
            覆盖财税核心全业务流程：科目体系管理（支持科目编码、多级科目树、辅助核算维度自定义）、填制凭证（凭证录入、辅助核算、多币种处理、现金流量分配、凭证审核/记账/作废/红字更正）、账簿体系（总账/明细账/多栏账/科目余额表/日记账）、期末处理（期末结转、试算平衡、自动生成税务申报数据）、财务报表（资产负债表/利润表/现金流量表自动生成）及账务对账等完整功能，全面复刻用友好会计账务处理全流程。
          </div>
        </div>

        {/* DevOps与运维 */}
        <div className="bg-gray-50 p-2 rounded text-[11px] text-gray-600">
          <strong>DevOps与运维：</strong>独立搭建全流程DevOps部署运维体系，完成从windows bat打包到jenkins CI、github CI/CD流水线、k8s容器化部署的迭代升级。搭建nacos注册配置集群、redis缓存集群、微服务模块集群。建立定期数据备份与系统优化机制，降低运维成本35%以上，提升部署效率60%。
        </div>

        {/* 技术指标 */}
        <div className="grid grid-cols-5 gap-1 text-center text-[11px]">
          <div className="bg-gray-100 p-1 rounded">
            <div className="text-sm font-medium text-gray-800">1000+</div>
            <div className="text-gray-500">服务企业</div>
          </div>
          <div className="bg-gray-100 p-1 rounded">
            <div className="text-sm font-medium text-gray-800">90%</div>
            <div className="text-gray-500">前瞻技术</div>
          </div>
          <div className="bg-gray-100 p-1 rounded">
            <div className="text-sm font-medium text-gray-800">高</div>
            <div className="text-gray-500">容器安全性</div>
          </div>
          <div className="bg-gray-100 p-1 rounded">
            <div className="text-sm font-medium text-gray-800">中</div>
            <div className="text-gray-500">运维成本</div>
          </div>
          <div className="bg-gray-100 p-1 rounded">
            <div className="text-sm font-medium text-gray-800">高</div>
            <div className="text-gray-500">迭代与自动化</div>
          </div>
        </div>
      </div>
    </div>

    {/* 底部 */}
    <div className="mt-1 pt-1 border-t border-gray-100 flex justify-between text-[8px] text-gray-400">
      <span>财税达 SaaS 平台</span>
      <span>第 {pageNum} 页</span>
    </div>
  </div>
);

export default CaiShuiDaPage;
