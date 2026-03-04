import React from 'react';

interface PageProps {
  pageNum: number;
}

// ==================== 页面3：团队技术贡献 ====================
const TeamTechPage = ({ pageNum }: PageProps) => (
  <div className="p-5 h-full flex flex-col">
    {/* 紧凑标题 */}
    <div className="mb-2 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-light text-gray-800">团队技术贡献</h1>
        <p className="text-xs text-gray-500">湖北万亚软件技术有限公司 · 技术架构负责人</p>
      </div>
      <div className="flex gap-2">
        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] rounded">DevOps</span>
        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] rounded">云原生</span>
        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] rounded">AI工具</span>
      </div>
    </div>
    <div className="mb-2 h-px bg-gray-300"></div>

    {/* 内容区域 */}
    <div className="flex-1 overflow-y-auto">
      <div className="space-y-2">
        {/* 个人概述 */}
        <div className="bg-gray-50 p-2 rounded">
          <p className="text-[10px] text-gray-600 leading-relaxed">
            作为团队技术先驱与架构负责人，主导全栈技术前瞻规划与落地实践，推动团队研发能力实现本质飞跃。通过对响应式编程、微服务、DevOps、云原生、AI研发工具链的全链路推动与攻坚，大幅提升系统稳定性、并发能力与迭代效率，形成可复用、可扩展的技术体系与工程规范，项目交付更可靠、技术亮点更突出，代码优雅度、系统性能与协作效率均达到行业先进水平。
          </p>
        </div>

        {/* 一、架构与技术栈全面现代化升级 - 每项详细展开 */}
        <div>
          <h3 className="text-xs font-medium text-gray-700 mb-1">一、架构与技术栈全面现代化升级</h3>
          <div className="space-y-1 text-[9px] text-gray-600">
            <div className="bg-gray-50 p-1.5 rounded">
              <strong>后端技术体系深度演进</strong>
              <p>完成从传统Eclipse JSP迁移至IDEA Maven工程化体系，统一团队开发工具与环境；推动架构从Spring Boot单体应用升级为Spring Cloud Alibaba微服务架构，实现服务拆分与独立部署；完成技术栈从Spring Web向Spring WebFlux + R2dbc响应式异步架构转型，解决高并发、状态管理、异步任务、复杂交互场景的性能瓶颈，显著提升系统吞吐量与资源利用率。</p>
            </div>
            <div className="bg-gray-50 p-1.5 rounded">
              <strong>前端架构现代化</strong>
              <p>从Layui传统框架升级为Vue技术体系，落地前后端分离开发模式；全面普及Vue3 Composition API、`script setup`规范，提升代码可维护性与类型安全；完成Uniapp跨端框架的Vue3适配，实现一套代码同时运行于iOS、Android、H5、小程序等多端，统一团队技术标准，降低多端维护成本。</p>
            </div>
            <div className="bg-gray-50 p-1.5 rounded">
              <strong>多租户权限与资源隔离体系</strong>
              <p>构建从账套、租户到组织架构的多租户权限与资源隔离体系，实现业务与权限的精细化、规模化管理。基于RBAC模型设计多维度权限控制，支持按企业、按角色、按功能等多粒度权限分配，适配私有云SaaS多企业集中管控需求，为财税达系统服务近千家企业提供坚实的权限基础。</p>
            </div>
            <div className="bg-gray-50 p-1.5 rounded">
              <strong>数据库架构升级</strong>
              <p>推动数据库从单一SQL Server迁移至MySQL 5.7、PostgreSQL、OceanBase多数据库混合架构。针对不同业务场景选择最优数据库：MySQL用于一般业务存储，PostgreSQL用于复杂查询与分析，OceanBase分布式数据库用于高并发核心业务。实施读写分离、分库分表策略，优化索引与查询性能，确保大规模数据场景下的系统响应速度。</p>
            </div>
          </div>
        </div>

        {/* 二、研发效能与工程化体系建设 - 每项详细展开 */}
        <div>
          <h3 className="text-xs font-medium text-gray-700 mb-1">二、研发效能与工程化体系建设</h3>
          <div className="space-y-1 text-[9px]">
            <div className="bg-gray-50 p-1.5 rounded">
              <strong className="block text-gray-700">代码管理</strong>
              <p className="text-gray-500">推动从SVN集中式管理逐步迁移至GitHub、云效Git、腾讯Coding等现代化协作平台。建立Git分支模型（master/ develop/ feature/ bugfix/ release），规范代码提交、合并、发布流程，引入代码审查机制（Code Review），提升代码质量与团队协作效率。</p>
            </div>
            <div className="bg-gray-50 p-1.5 rounded">
              <strong className="block text-gray-700">制品与镜像管理</strong>
              <p className="text-gray-500">搭建Maven/NPM私有仓库，统一管理Java与前端依赖，实现依赖版本可控与私有问题件复用。部署Harbor镜像仓库，形成统一制品管理体系，实现Docker镜像的存储、版本管理、安全扫描与分发。</p>
            </div>
            <div className="bg-gray-50 p-1.5 rounded">
              <strong className="block text-gray-700">CI/CD持续集成</strong>
              <p className="text-gray-500">推动流水线从Jenkins逐步升级至云效CI、GitHub CI/CD，实现自动化构建、自动化测试、自动化部署。引入单元测试、集成测试覆盖率检查，部署前自动执行质量门禁，确保每次发布的质量与稳定性。</p>
            </div>
            <div className="bg-gray-50 p-1.5 rounded">
              <strong className="block text-gray-700">云原生化实践</strong>
              <p className="text-gray-500">完成容器化落地（Docker、Podman），将应用打包为标准化容器镜像，实现环境一致性。逐步向K8s部署与持续交付方向演进，搭建自动弹性扩缩容机制，为高可用、弹性扩缩容奠定基础，降低基础设施成本。</p>
            </div>
            <div className="bg-gray-50 p-1.5 rounded">
              <strong className="block text-gray-700">开发环境升级</strong>
              <p className="text-gray-500">推动团队从Eclipse全面切换至IDEA，并普及IDEA + WSL Linux开发环境，实现Windows下流畅的Linux开发体验。引入Cursor等AI辅助工具，推广AI编程实践，大幅提升开发效率与代码质量。</p>
            </div>
          </div>
        </div>

        {/* 三、AI研发与团队技术转型先行者 - 每项详细展开 */}
        <div>
          <h3 className="text-xs font-medium text-gray-700 mb-1">三、AI研发与团队技术转型先行者</h3>
          <div className="space-y-1 text-[9px]">
            <div className="bg-gray-50 p-1.5 rounded">
              <strong className="block text-gray-700">通义灵码引入</strong>
              <p className="text-gray-500">作为团队AI工具落地先驱，早期便引入通义灵码提升编码效率。持续跟进通义千问能力迭代，并将其落地到订票、外卖等真实业务场景，推动AI能力工程化。组织团队培训，推广AI辅助编程最佳实践，使团队整体编码效率提升30%以上。</p>
            </div>
            <div className="bg-gray-50 p-1.5 rounded">
              <strong className="block text-gray-700">ChatGPT桌面客户端开发</strong>
              <p className="text-gray-500">在GPT尚未国内普及、无官方客户端阶段，基于Tauri + Rust独立开发ChatGPT桌面客户端工具。率先验证AI协作模式，推动团队使用AI解决实际研发问题，包括代码生成、问题排查、技术方案设计等，形成AI辅助开发规范。</p>
            </div>
            <div className="bg-gray-50 p-1.5 rounded">
              <strong className="block text-gray-700">Claude推广</strong>
              <p className="text-gray-500">紧跟前沿大模型生态，在Claude编程友好版推出后，快速引入并推广。通过提示工程优化、上下文管理、任务拆解等实践，大幅提升团队代码编写、问题排查与方案设计效率。搭建企业内部AI服务中台，统一管理AI能力调用。</p>
            </div>
            <div className="bg-gray-50 p-1.5 rounded">
              <strong className="block text-gray-700">AI商业化创业探索</strong>
              <p className="text-gray-500">基于对AI领域的深度理解与实践，进一步开展GPT、Claude相关商业化创业探索。从技术研究到产品落地形成完整闭环，验证了AI技术商业化路径，积累了丰富的AI应用开发与运营经验。</p>
            </div>
          </div>
        </div>

        {/* 四、技术影响力与团队价值 */}
        <div className="bg-gray-50 p-2 rounded text-[9px] text-gray-600">
          <strong>技术影响力：</strong>通过全链路技术推动与攻坚，团队整体研发水平实现质的飞跃。项目交付更可靠、技术亮点更突出，代码优雅度、系统性能与协作效率均达到行业先进水平。形成可复用、可扩展的技术体系与工程规范，为公司后续项目提供标准化技术支撑。
        </div>

        {/* 技术指标 */}
        <div className="grid grid-cols-4 gap-1 text-center text-[9px]">
          <div className="bg-gray-100 p-1 rounded">
            <div className="text-sm font-medium text-gray-800">60%↑</div>
            <div className="text-gray-500">研发效率</div>
          </div>
          <div className="bg-gray-100 p-1 rounded">
            <div className="text-sm font-medium text-gray-800">35%↓</div>
            <div className="text-gray-500">运维成本</div>
          </div>
          <div className="bg-gray-100 p-1 rounded">
            <div className="text-sm font-medium text-gray-800">85%</div>
            <div className="text-gray-500">代码复用率</div>
          </div>
          <div className="bg-gray-100 p-1 rounded">
            <div className="text-sm font-medium text-gray-800">60%↑</div>
            <div className="text-gray-500">部署效率</div>
          </div>
        </div>
      </div>
    </div>

    {/* 底部 */}
    <div className="mt-1 pt-1 border-t border-gray-100 flex justify-between text-[8px] text-gray-400">
      <span>团队技术贡献</span>
      <span>第 {pageNum} 页</span>
    </div>
  </div>
);

export default TeamTechPage;
