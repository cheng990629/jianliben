import React from 'react';

interface PageProps {
  pageNum: number;
}

// ==================== 页面：礁岛 · 一人公司 OPC · AI 研发创业 ====================
const JiaodaoStartupPage = ({ pageNum }: PageProps) => (
  <div className="p-6 h-full flex flex-col">
    {/* 标题区域 */}
    <div className="mb-2">
      <h1 className="font-display text-3xl text-gray-800 tracking-wide">一人公司 OPC · AI 算力平台</h1>
      <p className="font-accent text-sm text-gray-500 mt-1">
        礁岛（辽阳）软件技术有限公司 · 一人有限责任公司（OPC）创始人 / 全栈架构 · 2024.11 - 2025.8
      </p>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="px-2 py-0.5 bg-gray-100 rounded">一人公司 OPC</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">创始人 · 唯一股东</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">CEO / CTO 一体</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">OpenResty 网关</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">Token 计量计费</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">电商闭环变现</span>
      </div>
      <div className="mt-2 h-px bg-gray-300"></div>
    </div>

    <div className="flex-1 flex flex-col gap-2.5 overflow-hidden">
      {/* 简介 + OPC 职责矩阵 */}
      <div className="grid grid-cols-5 gap-3">
        <div className="col-span-3">
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">项目简介 · OPC 一人公司</h3>
          <div className="text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              以一人有限责任公司（OPC）模式独立创办礁岛软件：法人、唯一股东、产品、架构、研发、运维、客服、电商运营由同一人闭环承担。从 0 到 1 交付面向国内用户的 AI 服务镜像与算力分发平台——将 GPT / Claude 等国际主流大模型经 OpenResty + Lua 边缘网关聚合加速，提供共享 API、多租户会话隔离、Token 计量计费、历史持久化与电商标准化变现；用户侧成本约降 75%，形成「算力供应 → 镜像网关 → 账号池 → 淘宝交付」的可复制轻资产创业链路。
            </p>
          </div>
        </div>
        <div className="col-span-2">
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">OPC 一人职责</h3>
          <div className="grid grid-cols-2 gap-1 text-[10px]">
            {[
              { s: '法人/股东', d: '工商 · 税务 · 合规' },
              { s: '产品/架构', d: '选型 · 拆分 · 演进' },
              { s: '全栈研发', d: '网关 · 后台 · 前端' },
              { s: '运营变现', d: '店铺 · 客服 · 交付' },
            ].map((item) => (
              <div key={item.s} className="border border-gray-200 px-1.5 py-1">
                <div className="text-gray-800 font-medium">{item.s}</div>
                <div className="text-gray-500">{item.d}</div>
              </div>
            ))}
          </div>
          <p className="mt-1 text-[9px] text-gray-400 leading-snug">
            无外包团队 · 端到端一人交付与持续运营
          </p>
        </div>
      </div>

      {/* 项目经历 */}
      <div className="flex-1 space-y-2">
        <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wide">技术攻坚 · 本人独立交付</h3>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">
              1. OpenResty + Lua 边缘网关 · 多租户会话隔离 · 协议兼容层
            </h4>
            <span className="font-accent text-[10px] text-gray-400">主责 · 网关架构</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              基于 OpenResty（Nginx + LuaJIT）自研 AI 边缘网关：JWT / API-Key 双鉴权、按租户与模型维度的限流熔断、请求改写与上游健康检查；在网关层完成 OpenAI / Anthropic 等多厂商协议兼容与路径归一，支持流式 SSE / chunked 透传与超时重试。多用户会话上下文按 tenant_id + conversation_id 强隔离，历史对话与项目数据落库持久化（MySQL / SQLite），避免串会话与串计费。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">
              2. 共享 API-Key 池调度 · Token 计量计费 · 故障转移
            </h4>
            <span className="font-accent text-[10px] text-gray-400">主责 · 调度/计费</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              设计多账号池调度器：按模型能力、配额余量、延迟与错误率做加权路由与粘性会话；账号级冷却、熔断与自动摘除，保障共享 Key 场景下的高可用。自研 Token 计量管道——解析上游 usage、本地预估兜底、按用户/订单聚合入账；对接余额扣减、套餐配额与超额熔断，支撑按量与包时长两种计费。管理后台（Vue3 / Nuxt + Element Plus）可视化订单、时长、算力消耗、账号健康与告警，Python 侧承担计费对账与批处理任务。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">
              3. 跨境账号 / 虚拟资产供应链 · 生命周期自动化
            </h4>
            <span className="font-accent text-[10px] text-gray-400">主责 · 供应链自动化</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              搭建跨境账号与虚拟资产供应链：覆盖 Google / Outlook / Apple ID / App Store 等货源，串联接码、虚拟卡充值、风控检测与账号入库；状态机管理「采购 → 激活 → 入池 → 服役 → 冷却 → 回收」，异常账号自动下线并触发补货。以脚本 + 队列驱动批量运维，降低人工盯盘成本，保障上游算力与镜像入口的稳定供给。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">
              4. 对话工作台 · 项目空间 · 多端接入（Web / 桌面）
            </h4>
            <span className="font-accent text-[10px] text-gray-400">主责 · 产品全栈</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              交付类 ChatGPT 体验的对话工作台：流式输出、多轮上下文、模型切换、提示词模板与项目空间（按项目归档会话 / 附件元数据）。Nuxt SSR 保障首屏与 SEO；另基于 Tauri + Rust 打磨轻量桌面客户端，复用同一套鉴权与网关协议，支持离线偏好配置与系统托盘常驻，降低非技术用户接入门槛。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">
              5. 可观测性 · 告警闭环 · 一人运维高可用
            </h4>
            <span className="font-accent text-[10px] text-gray-400">主责 · SRE</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              在 OPC 无专职运维条件下自建可观测链路：网关 access/error 日志结构化入库、按租户与上游维度统计 QPS / 延迟 / 5xx / Token 消耗；账号池耗尽、上游超时、余额异常等触发即时告警。配合定时健康探测、配置热更新与一键摘除故障上游，实现单人可维护的准高可用，支撑店铺高峰期不中断交付。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">
              6. OPC 一人公司运营闭环 · 淘宝标准化交付
            </h4>
            <span className="font-accent text-[10px] text-gray-400">主责 · 商业化</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              OPC 模式下独立完成工商注册、产品定义、技术交付、客服话术与售后SOP；淘宝开设 5 家店铺做标准化 SKU 变现（镜像接入 / 算力包 / 时长卡），单店稳定销量 1000+，月净利润约 5000–8000 元。将技术侧网关能力封装为可售商品与自动化开通流程，打通「下单 → 鉴权开通 → 用量消耗 → 续费/客服」全链路，验证轻资产一人公司的可持续盈利模型。
            </p>
          </div>
        </div>
      </div>

      {/* 底部 */}
      <div className="mt-auto space-y-2">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">技术栈</h3>
          <div className="flex flex-wrap gap-1.5">
            {[
              'OpenResty / Nginx + LuaJIT', 'SSE 流式透传', '多租户会话隔离',
              'API-Key 池调度', 'Token 计量计费', '限流 / 熔断 / 重试',
              'Vue3 / Nuxt SSR', 'Tauri + Rust', '项目空间 / 提示词模板',
              'Python 批处理', 'MySQL / SQLite', '可观测 / 告警闭环',
            ].map((t) => (
              <span key={t} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded">{t}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-5 gap-1.5 text-center text-[10px]">
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">OPC</div>
            <div className="text-gray-500">一人公司闭环</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">75%↓</div>
            <div className="text-gray-500">用户侧成本</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">5 店</div>
            <div className="text-gray-500">淘宝标准化</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">1000+</div>
            <div className="text-gray-500">单店销量</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">5–8k</div>
            <div className="text-gray-500">月净利润</div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between text-xs text-gray-400">
      <span>礁岛 · 一人公司 OPC · AI 算力平台</span>
      <span className="font-accent">第 {pageNum} 页</span>
    </div>
  </div>
);

export default JiaodaoStartupPage;
