import React from 'react';

interface PageProps {
  pageNum: number;
}

// ==================== 页面5：辽宁易为项目 ====================
const LiaoningYiweiPage = ({ pageNum }: PageProps) => (
  <div className="p-6 h-full flex flex-col">
    {/* 标题区域 */}
    <div className="mb-2">
      <h1 className="font-display text-3xl text-gray-800 tracking-wide">辽宁易为项目</h1>
      <p className="font-accent text-sm text-gray-500 mt-1">辽宁易为控股集团有限公司 · 核心全栈 (AI) 架构师 · 2025.9 - 2026.03.19</p>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="px-2 py-0.5 bg-gray-100 rounded">辽宁易为</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">核心全栈 (AI) 架构师</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">珍酒城</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">国资委科创助手</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">TK 店群</span>
      </div>
      <div className="mt-2 h-px bg-gray-300"></div>
    </div>

    <div className="flex-1 flex flex-col gap-2.5 overflow-hidden">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">项目简介</h3>
        <div className="text-xs text-gray-600 leading-relaxed">
          <p>
            以珍酒城私域电商、国资委科创助手、TK 店群管理平台为核心交付，并覆盖辽宁跨境电商、独立站、辽易智能科技平台、中源谈话工作及康泰智慧看护等其他业务线。
          </p>
        </div>
      </div>

      <div className="flex-1 space-y-2">
        <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wide">项目经历 · 本人负责</h3>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">1. 珍酒城（私域电商 · 多商户）</h4>
            <span className="font-accent text-[10px] text-gray-400">主责 · SpringBoot / Uniapp</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              基于 SpringBoot + Uniapp 的珍酒私域电商中台：多商户 / 多门店入驻与独立经营，租户级商品、库存、订单、营销与结算隔离；平台侧统一会员体系与分账规则，商户侧自管货架、活动与售后。覆盖珍享秒杀、珍享团购及「1 拉 3 带 9」裂变推广全流程——活动配置、库存预扣与超卖防护、成团/阶梯奖励结算、推广关系链与佣金归因。
            </p>
            <p>
              复杂业务还包括：多商户权限与数据隔离、跨店优惠券与平台券叠加策略、订单拆单合单、库存锁定与回滚、营销活动互斥规则引擎，以及 Uniapp 多端（H5 / 小程序 / App）统一下单与支付回调对账，保障高并发秒杀与团购场景下的一致性与可运营性。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">2. 国资委科创助手（Dify Agent · Vue3+TS 前端）</h4>
            <span className="font-accent text-[10px] text-gray-400">主责 · AI 前端</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              基于 Dify 工作流 + Python 工具服务 + Vue3+TS 的国资委科创 Agent 助手。前端侧重 Agent 人机交互：多 Agent / 多工作流会话面板，SSE 流式输出与打字机渲染；工具调用（Tool Call）过程可视化——展示检索、统计、审批节点的中间态与引用溯源；支持会话分支、上下文注入（项目 / 指标 / 公文模板）与停止生成、重试、重新编排。
            </p>
            <p>
              交互层落地：意图快捷入口与技能卡片（数据统计、项目管理、智能分析、流程审批）；结构化结果落 UI——表格、图表、审批表单、待办清单由 Agent 产出驱动渲染；Streaming Markdown / 代码块高亮、附件上传与知识库引用高亮；角色权限下的对话留痕与审计时间线。对接 Dify API 完成应用切换、变量注入、会话续跑，Python 侧承接领域工具，前端负责 Agent 编排过程的可观测与可操作体验。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">3. TK 店群管理平台（跨境供销）</h4>
            <span className="font-accent text-[10px] text-gray-400">主责 · SpringBoot</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              跨境电商店群供销管理平台：面向多店铺、多站点的商品供销链路，统一管理铺货、供货价、库存水位与订单履约；支持店群维度的商品映射、库存同步与异常补货，降低多店运营的重复录入与超卖风险。
            </p>
            <p>
              主责 SpringBoot 侧订单处理、库存同步与供销状态机；覆盖跨境订单拉取/推送、供销分账与售后回传，保障店群在高并发铺货与库存波动下的数据一致性与可运营性。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">4. 其他项目</h4>
            <span className="font-accent text-[10px] text-gray-400">参与 · 多业务线</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1.5">
            <p>
              <span className="font-medium text-gray-700">辽宁跨境电商平台 / 跨境独立站</span>
              <br />
              区域跨境综合服务与 PHP Laravel 独立站：商品展示、交易下单、报关申报、物流轨迹与支付对接；支撑跨境卖家从选品上架到履约清关的一站式链路。
            </p>
            <p>
              <span className="font-medium text-gray-700">辽易智能科技平台</span>
              <br />
              Strapi + React Next.js 内容与业务中台：CMS 内容管理、经营数据可视化看板、角色权限与审批流程自动化，沉淀企业级内容发布与内部协同能力。
            </p>
            <p>
              <span className="font-medium text-gray-700">中源谈话工作</span>
              <br />
              若依对接海康摄像头、NVR 与固定审讯设备：音视频采集、集中存储、按案回放与设备远程管控，满足谈话场景下的全程留痕与集中运维。
            </p>
            <p>
              <span className="font-medium text-gray-700">康泰智慧看护</span>
              <br />
              若依 + 海康 + 蓝牙网关 MQ：视频监控、穿戴/网关设备监测、异常告警推送与实时音视频传输，面向智慧看护场景的设备接入与告警闭环。
            </p>
          </div>
        </div>
      </div>

      <div className="mt-auto space-y-2">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">技术栈</h3>
          <div className="flex flex-wrap gap-1.5">
            {[
              'SpringBoot / Uniapp', 'Dify / Python', 'Vue3+TS',
              'PHP Laravel', 'Strapi / Next.js', '若依',
              '海康 / NVR', '蓝牙网关 MQ',
            ].map((t) => (
              <span key={t} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded">{t}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">珍酒城</div>
            <div className="text-gray-500">私域电商</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">科创助手</div>
            <div className="text-gray-500">Dify / AI</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">TK 店群</div>
            <div className="text-gray-500">跨境供销</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">其他</div>
            <div className="text-gray-500">跨境 / IoT / CMS</div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between text-xs text-gray-400">
      <span>辽宁易为项目</span>
      <span className="font-accent">第 {pageNum} 页</span>
    </div>
  </div>
);

export default LiaoningYiweiPage;
