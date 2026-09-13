import React from 'react';

interface PageProps {
  pageNum: number;
}

// ==================== 页面：润和 · 空间态势仿真智能体 ====================
const RunhePage = ({ pageNum }: PageProps) => (
  <div className="p-6 h-full flex flex-col">
    {/* 标题区域 */}
    <div className="mb-2">
      <h1 className="text-3xl font-light text-gray-800 tracking-widest uppercase">空间态势仿真智能体</h1>
      <p className="text-sm text-gray-500 mt-1">润和软件 · 全栈 (Agent) 研发 · 项目周期： 2025年10月至今</p>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="px-2 py-0.5 bg-gray-100 rounded text-center">润和软件（创业板）</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded text-center">全栈 (Agent) 研发工程师</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded text-center">负责主系统前端</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded text-center">全模态研发</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded text-center">DAG编排研发</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded text-center">重塑内网工作形态</span>
      </div>
      <div className="mt-2 h-px bg-gray-300"></div>
    </div>

    <div className="flex-1 flex flex-col gap-2.5 overflow-hidden">
      {/* 项目简介 + 团队规模 */}
      <div className="grid grid-cols-5 gap-3">
        <div className="col-span-3">
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">项目简介</h3>
          <div className="text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              四屏空间态势仿真智能体：屏1 数字人 · 屏2 多Agent节点 · 屏3 空间态势仿真 · 屏4 资源屏与全模态。本人负责主系统独立前端（屏1/屏2）、筹划规则引擎前端、算力与模型与服务部署调优，打通端到端主链路。覆盖全模态 ASR/TTS/OCR 与自研 DAG 编排，贯通「上传方案 → 多智能体编排 → 态势仿真协议 → 知识检索 / 纪要公文」全流程；并推动内网团队用 LLM Agent重塑工作与协作形态。
            </p>
          </div>
        </div>
        <div className="col-span-2">
          <h3 className="text-sm font-medium text-gray-700 mb-1 uppercase tracking-wide">四屏架构</h3>
          <div className="grid grid-cols-2 gap-1 text-[10px]">
            {[
              { s: '屏1', d: '数字人屏' },
              { s: '屏2', d: '多Agent节点屏' },
              { s: '屏3', d: '空间态势仿真' },
              { s: '屏4', d: '人机协同' },
            ].map((item) => (
              <div key={item.s} className="border border-gray-200 px-1.5 py-1">
                <div className="text-gray-800 font-medium">{item.s}</div>
                <div className="text-gray-500">{item.d}</div>
              </div>
            ))}
          </div>
          <p className="mt-1 text-[9px] text-gray-400 leading-snug">
            跨职能大团队协作，骨干多为互联网系背景
          </p>
        </div>
      </div>

      {/* 项目经历 */}
      <div className="flex-1 space-y-2">
        <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wide">项目经历 · 本人负责</h3>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">1. 主系统独立前端（屏1 数字人 / 屏2 多Agent节点 / 规则引擎）</h4>
            <span className="text-[10px] text-gray-400">主责 · 前端全栈</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              独立构建四屏外壳与屏1/屏2 页面（Vue + Ant Design X + Electron/Tauri），并交付筹划规则引擎前端：提示词版本管理、规则编排。屏1 数字人屏以视频区与全双工对话为核心，贯通 ASR/TTS、方案与附件上传，并与 Agent SSE 流式联动；屏2 多Agent节点屏呈现多阶段节点进度与产出，覆盖意图理解、态势研判、方案构想的流式过程，经 Harness SSE 驱动态势增量标绘。规则引擎前端对接制定计划的波次编排规则面板，以及空间态势的规则配置与结果可视化。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">2. 内网服务器 · 算力与模型与服务部署调优</h4>
            <span className="text-[10px] text-gray-400">主责 · 运维+算力</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              负责内网多台服务器全链路：算力节点与业务服务规划、Docker Compose / K8s 部署、CI 冒烟与日常运维监控；完成 LLM / ASR / TTS / OCR 等模型及配套微服务的部署、显存与推理参数调优，保障四屏演示与 Agent 链路稳定可用。按算力、生产、开发、敏捷、仿真、MAS 等角色划分机位，以算力·模型·服务三位一体上线与吞吐调优，支撑筹划 Agent 的敏捷研发。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">3. LLM 路由分发 · Text2SQL · RAG · 自由对话后端</h4>
            <span className="text-[10px] text-gray-400">主责 · 后端</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              设计并实现 Agent 路由后端：对每条用户输入做意图分类与下游分流，避免多屏对话串线与工具误调。覆盖 free_chat、rag_qa、text_to_sql、筹划步进等链路，统一落 route_trace 可观测。路由按屏位、module、会话状态与 ui_hint 分流至 vLLM、RAGFlow、数据库 NL 引擎与 Harness；Text2SQL 支撑资源屏/数据库 Tab 的自然语言查数，并施加只读安全约束与 SQL 门控；知识库与星云侧栏走 rag_qa，屏1 数字人闲聊走 free_chat（无检索、无工具）。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">4. 知识库 &amp; 会议纪要 &amp; 公文撰写 &amp; 三心二意</h4>
            <span className="text-[10px] text-gray-400">主责 · 全栈</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              屏4 应用中心四大模块独立交付。知识库以 knowledge-app 代理 RAGFlow，完成数据集 CRUD、上传解析与多选文档问答，输出引用溯源卡片，并将领域知识检索注入筹划链路，与 MAS / Harness 解耦、独立于筹划 MCP。会议纪要走 FunASR 全链路：转写、声纹分离区分说话人，经 DFN 降噪与扩音提升嘈杂会场识别率，再经要点提取成稿，并对接屏1 语音通路。公文撰写基于 FastAPI + vLLM(Qwen) + 三级模板库(YAML/MD) + SSE，生成前 RAG 注入，覆盖草拟→审阅→签发→归档，中栏对话与右栏富文本支持多轮修订与版本回退。三心二意作为筹划 Agent 旁路，对已产出数据另开一线追问：主 Agent 播报中可切入打断且不扰动主会话状态，绑定筹划上下文只读检索、不写主链路节点。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">5. 星云图 · 资源屏</h4>
            <span className="text-[10px] text-gray-400">主责 · 前端</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              人机交互大屏基于 Three.js 构建宇宙星云与星球可视化，承载筹划思维链与节点空间叙事：星云、星球节点按思维链空间排布，支持交互拾取；侧栏问答与节点上下文绑定，呈现碎碎念、结论等空间文案。资源屏提供想定表与业务资源的可视化查询，对接 Text2SQL 与数据 Tab。
            </p>
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-0.5">
            <h4 className="text-xs font-medium text-gray-800">6. 重塑内网工作形态</h4>
            <span className="text-[10px] text-gray-400">主责 · 流程+工具</span>
          </div>
          <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
            <p>
              推动内网团队用 LLM 重塑协作：从口头对齐、手工画图，转向「提示词驱动 → 原型/架构/时序图自动生成 → Obsidian 方案笔记沉淀 → 编码 Agent 落地」的闭环。以 LLM 生成原型、架构图与时序图缩短方案对齐与评审周期；产品提示词 CLI 标准化需求/验收提示词并支持版本管理；编码 Agent 工具链辅助实现与联调，提升交付吞吐；方案笔记在 Obsidian 知识库中由 LLM 辅助成稿与结构化沉淀。
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
              'Vue / Ant Design X', 'Electron / Tauri', 'SSE 流式',
              'LLM 路由', 'Text2SQL', 'RAG', '自由对话',
              'Python / FastAPI', 'RAGFlow', 'FunASR', 'DFN 降噪', 'Three.js', 'Obsidian', '自研 DAG', 'VLLM',
              'Docker Compose / K8s', '内网多机部署', 'PostgreSQL',
            ].map((t) => (
              <span key={t} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded">{t}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-5 gap-1.5 text-center text-[10px]">
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">屏1+屏2</div>
            <div className="text-gray-500">主前端独立交付</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">多机部署</div>
            <div className="text-gray-500">算力·模型·服务调优</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">LLM 路由</div>
            <div className="text-gray-500">RAG / SQL / 闲聊</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">屏4</div>
            <div className="text-gray-500">RAG/纪要/公文</div>
          </div>
          <div className="border border-gray-200 py-1.5">
            <div className="text-sm font-medium text-gray-800">重塑形态</div>
            <div className="text-gray-500">提示词 CLI · 编码 Agent</div>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between text-xs text-gray-400">
      <span>润和 · 空间态势仿真智能体</span>
      <span>第 {pageNum} 页</span>
    </div>
  </div>
);

export default RunhePage;
