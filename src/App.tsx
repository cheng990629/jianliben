import React, { useState } from 'react';
import { 
  personalInfo, 
  skillCategories, 
  workExperience, 
  education,
  techData, 
  timeRange, 
  phases, 
  architectureData,
  projects,
  pages,
  PageType 
} from './data';

// 时间范围
const START_YEAR = 2016;
const END_YEAR = 2027;
const TOTAL_YEARS = END_YEAR - START_YEAR + 1;

// 颜色映射（更专业的配色）
const colorMap: Record<string, string> = {
  '#E34F26': '#E34F26',
  '#F7DF1E': '#C9B800',
  '#0769AD': '#0769AD',
  '#31A8FF': '#31A8FF',
  '#42B883': '#42B883',
  '#8DD6F9': '#6BB6EA',
  '#CC6699': '#CC6699',
  '#F05032': '#E5322D',
  '#61DAFB': '#4CC9E8',
  '#3178C6': '#2A6CC5',
  '#339933': '#2D8A2D',
  '#2496ED': '#1D8BD4',
  '#3776AB': '#2E6B9F',
  '#4479A1': '#3E6D95',
  '#DC382D': '#C83028',
  '#326CE5': '#2A5CC2',
  '#FF9900': '#E88A00',
  '#000000': '#000000',
  '#00ADD8': '#009BC0',
  '#DEA584': '#D49475',
};

// 判断某年的部分月份是否在时间段内
const getYearStatus = (year: number, ranges: { start: string; end: string }[]) => {
  const fullMonths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const activeMonths: number[] = [];
  
  fullMonths.forEach(month => {
    const monthStart = `${year}${String(month).padStart(2, '0')}010000`;
    const monthEnd = `${year}${String(month).padStart(2, '0')}312359`;
    
    if (ranges.some(r => r.start <= monthEnd && r.end >= monthStart)) {
      activeMonths.push(month);
    }
  });
  
  return activeMonths;
};

// ==================== 页面1：个人介绍 ====================
const ProfilePage = ({ pageNum }: { pageNum: number }) => (
  <div className="p-8 h-full flex flex-col">
    {/* 标题区域 - 重新排版 */}
    <div className="mb-6">
      <div className="flex items-baseline justify-between">
        <div>
          <h1 className="text-4xl font-light text-gray-800 tracking-widest uppercase">{personalInfo.name}</h1>
          <p className="text-lg text-gray-500 mt-1 font-light">{personalInfo.title}</p>
        </div>
        {/* 标题右侧信息 */}
        <div className="flex gap-6 text-sm text-gray-500">
          <div className="text-center">
            <p className="text-gray-800 font-medium">{personalInfo.experience}</p>
            <p className="text-xs text-gray-400">工作经验</p>
          </div>
          <div className="text-center">
            <p className="text-gray-800 font-medium">{personalInfo.salary}</p>
            <p className="text-xs text-gray-400">期望薪资</p>
          </div>
          <div className="text-center">
            <p className="text-gray-800 font-medium">{personalInfo.status}</p>
            <p className="text-xs text-gray-400">求职状态</p>
          </div>
        </div>
      </div>
      <div className="mt-4 h-px bg-gray-300"></div>
    </div>

    {/* 左侧信息 */}
    <div className="flex gap-8 flex-1">
      <div className="w-1/3">
        <div className="space-y-3 text-sm">
          <div className="flex items-baseline gap-2">
            <span className="text-gray-400 w-16 shrink-0">Email</span>
            <p className="text-gray-700 text-xs">{personalInfo.email}</p>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-gray-400 w-16 shrink-0">Phone</span>
            <p className="text-gray-700 text-xs">{personalInfo.phone}</p>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-gray-400 w-16 shrink-0">Location</span>
            <p className="text-gray-700 text-xs">{personalInfo.location}</p>
          </div>
        </div>

        {/* 代表项目 */}
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">代表项目</h3>
          <div className="space-y-1.5">
            {personalInfo.quickProjects?.map((project, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <span className="text-xs font-medium text-gray-700">{project.name}</span>
                <span className="text-[10px] text-gray-400">|</span>
                <span className="text-xs text-gray-500">{project.tech}</span>
                {project.scale && (
                  <>
                    <span className="text-[10px] text-gray-400">|</span>
                    <span className="text-xs text-gray-400">{project.scale}</span>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 技能分类 */}
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">技术栈</h3>
          {skillCategories.map(cat => (
            <div key={cat.name} className="mb-3">
              <p className="text-xs text-gray-500 mb-1">{cat.name}</p>
              <div className="flex flex-wrap gap-1">
                {cat.skills.map(skill => (
                  <span 
                    key={skill.name}
                    className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 架构建设经验 */}
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-2">架构建设</h3>
          <div className="space-y-1">
            {personalInfo.architectureExperience?.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                <span className="text-xs text-gray-600">{item.title}</span>
              </div>
            ))}
          </div>
        </div>

       
        {/* 教育背景 */}
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-2">教育背景</h3>
          {education.map(edu => (
            <div key={edu.school} className="mb-2">
              <p className="text-sm text-gray-800">{edu.school}</p>
              <p className="text-xs text-gray-500">{edu.degree} · {edu.major}</p>
              <p className="text-xs text-gray-400">{edu.year}</p>
            </div>
          ))}
        </div>

        {/* 入职资料 */}
        {personalInfo.onboardingDocuments && (
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">入职资料</h3>
            <div className="grid grid-cols-2 gap-1.5">
              {personalInfo.onboardingDocuments.map((doc, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <span className="text-xs text-green-600">✓</span>
                  <span className="text-xs text-gray-600">{doc.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 右侧内容 */}
      <div className="w-2/3 space-y-6">
        {/* 个人概述 */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">关于我</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{personalInfo.summary}</p>
        </div>

        {/* 专长领域 */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">专业特长</h3>
          {/* 技术架构专长 */}
          <div className="mb-3">
            <p className="text-xs text-gray-500 mb-1.5">💻 系统架构</p>
            <div className="flex flex-wrap gap-2">
              {personalInfo.specialties.map((spec, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                  <span className="text-xs text-gray-600">{spec}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Database 专长 */}
          <div className="mb-3">
            <p className="text-xs text-gray-500 mb-1.5">🗄️ 数据库架构</p>
            <div className="flex flex-wrap gap-2">
              {personalInfo.specialtiesDatabase?.map((spec, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                  <span className="text-xs text-gray-600">{spec}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Architecture 专长 */}
          <div>
            <p className="text-xs text-gray-500 mb-1.5">🏗️ 架构设计</p>
            <div className="flex flex-wrap gap-2">
              {personalInfo.specialtiesArchitecture?.map((spec, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                  <span className="text-xs text-gray-600">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 核心技能矩阵 - 优化为适合黑白打印 */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">核心技能</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: '后端开发', value: 92, color: 'bg-gray-800' },
              { label: '前端开发', value: 97, color: 'bg-gray-700' },
              { label: '云原生架构', value: 93, color: 'bg-gray-600' },
              { label: '重新定义AGI原型', value: 93, color: 'bg-gray-500' },
              { label: '系统架构', value: 93, color: 'bg-gray-600' },
              { label: 'DevOps', value: 93, color: 'bg-gray-500' },
            ].map((skill, idx) => (
              <div key={idx} className="bg-gray-50 p-2 rounded-sm border border-gray-200">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-800 font-medium">{skill.label}</span>
                  <span className="text-xs text-gray-600">{skill.value}%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
                  <div className={`h-full ${skill.color} rounded-full print:border print:border-gray-400`} style={{ width: `${skill.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 工作经历 */}
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">工作经历</h3>
          <div className="space-y-4">
            {workExperience.map((work, idx) => (
              <div key={idx} className="relative pl-5 border-l border-gray-200">
                <div className="absolute left-[-3px] top-0 w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{work.position}</p>
                    <p className="text-xs text-gray-500">{work.company}</p>
                  </div>
                  <span className="text-xs text-gray-400">{work.duration}</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed mb-2">{work.description}</p>
                <div className="flex flex-wrap gap-1">
                  {work.technologies.map(tech => (
                    <span key={tech} className="px-2 py-0.5 bg-gray-100 text-gray-500 text-[10px] rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 核心项目亮点 */}


      </div>
    </div>

    {/* 底部 */}
    <div className="mt-auto pt-3 border-t border-gray-100 flex justify-between text-xs text-gray-400">
      <span>Resume</span>
      <span>Page {pageNum}</span>
    </div>
  </div>
);

// ==================== 页面2：技术栈 ====================
const TechStackPage = ({ pageNum }: { pageNum: number }) => {
  const [template, setTemplate] = useState<'A' | 'B'>('A');

  // 模板A：时间轴样式
  const TemplateA = () => (
    <>
      {/* 顶部年份轴 */}
      <div className="mb-4">
        <div className="flex">
          {Array.from({ length: TOTAL_YEARS }, (_, i) => START_YEAR + i).map(year => (
            <div 
              key={year} 
              className="flex-1 text-center relative"
              style={{ minWidth: '30px' }}
            >
              <span className="text-xs text-gray-400">{year}</span>
              <div className="h-1 w-px bg-gray-200 mx-auto mt-1"></div>
            </div>
          ))}
        </div>
      </div>

      {/* 技术列表 */}
      <div className="space-y-1">
        {techData.map(tech => {
          const color = colorMap[tech.color] || tech.color;
          
          return (
            <div key={tech.name} className="flex items-center">
              {/* 技术名 */}
              <div 
                className="w-24 text-xs font-medium text-right pr-3 shrink-0"
                style={{ color: color }}
              >
                {tech.name}
              </div>
              
              {/* 时间条 */}
              <div className="flex-1 h-6 relative">
                {/* 背景网格 */}
                <div className="absolute inset-0 flex">
                  {Array.from({ length: TOTAL_YEARS }, (_, i) => START_YEAR + i).map(year => (
                    <div 
                      key={year} 
                      className="flex-1 border-r border-gray-100"
                      style={{ marginRight: year === END_YEAR ? 0 : '-1px' }}
                    ></div>
                  ))}
                </div>
                
                {/* 彩色块 */}
                <div className="absolute inset-0 flex items-center">
                  {Array.from({ length: TOTAL_YEARS }, (_, i) => START_YEAR + i).map(year => {
                    const months = getYearStatus(year, tech.ranges);
                    if (months.length === 0) return null;
                    
                    return (
                      <div 
                        key={year}
                        className="flex-1 h-4 relative"
                      >
                        {months.length === 12 ? (
                          <div 
                            className="absolute inset-y-0 rounded-sm"
                            style={{ 
                              backgroundColor: color,
                              opacity: 0.85,
                              left: 0,
                              width: '100%',
                              minWidth: '4px'
                            }}
                          ></div>
                        ) : (
                          months.map(month => {
                            const monthWidth = 100 / 12;
                            return (
                              <div
                                key={month}
                                className="absolute h-2 rounded-sm"
                                style={{
                                  backgroundColor: color,
                                  opacity: 0.75,
                                  left: `${(month - 1) * monthWidth}%`,
                                  width: `${monthWidth - 1}%`,
                                  top: '50%',
                                  transform: 'translateY(-50%)'
                                }}
                              ></div>
                            );
                          })
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* 右侧边距 */}
              <div className="w-2"></div>
            </div>
          );
        })}
      </div>
    </>
  );

  // 模板B：矩阵表格样式
  const TemplateB = () => (
    <div className="flex">
      {/* 左侧技术名 */}
      <div className="w-32 shrink-0">
        <div className="h-8 border-b border-gray-300"></div>
        {techData.map(tech => (
          <div 
            key={tech.name}
            className="h-8 flex items-center pr-3 text-xs font-medium border-b border-gray-100 whitespace-nowrap overflow-visible"
            style={{ color: colorMap[tech.color] || tech.color }}
          >
            {tech.name}
          </div>
        ))}
      </div>

      {/* 右侧矩阵 */}
      <div className="flex-1 overflow-hidden">
        {/* 年份头部 */}
        <div className="flex h-8 border-b border-gray-300">
          {Array.from({ length: TOTAL_YEARS }, (_, i) => START_YEAR + i).map(year => (
            <div 
              key={year}
              className="flex-1 text-center text-xs text-gray-400 border-l border-gray-100 flex items-end justify-center pb-1"
            >
              {year}
            </div>
          ))}
        </div>

        {/* 技术行 */}
        {techData.map(tech => {
          const color = colorMap[tech.color] || tech.color;
          
          return (
            <div key={tech.name} className="flex h-8 border-b border-gray-100">
              {Array.from({ length: TOTAL_YEARS }, (_, i) => START_YEAR + i).map(year => {
                const months = getYearStatus(year, tech.ranges);
                const isActive = months.length > 0;
                
                return (
                  <div 
                    key={year}
                    className="flex-1 border-l border-gray-50 relative"
                  >
                    {isActive && (
                      <div 
                        className="absolute inset-y-1 left-0.5 right-0.5 rounded-sm"
                        style={{ backgroundColor: color }}
                      ></div>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="p-10 h-full relative">
      {/* 标题区域 */}
      <div className="mb-6">
        <h1 className="text-3xl font-light text-gray-800 tracking-widest uppercase">Technology Timeline</h1>
        <div className="mt-3 h-px bg-gray-300"></div>
        <div className="mt-4 flex justify-between text-sm text-gray-500">
          <span>2016 — 2027</span>
          <span>{techData.length} Technologies</span>
        </div>
      </div>

      {/* 模板切换按钮（打印时隐藏） */}
      <div className="absolute top-10 right-10 flex gap-1 print:hidden">
        <button
          onClick={() => setTemplate('A')}
          className={`px-3 py-1 text-xs rounded transition-colors ${
            template === 'A'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Timeline
        </button>
        <button
          onClick={() => setTemplate('B')}
          className={`px-3 py-1 text-xs rounded transition-colors ${
            template === 'B'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Matrix
        </button>
      </div>

      {/* 模板内容 */}
      {template === 'A' ? <TemplateA /> : <TemplateB />}

      {/* 阶段图例 */}
      <div className="mt-8 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {phases.map((phase, idx) => (
            <div key={phase.year} className="flex items-center gap-2">
              <div className="flex items-center">
                <div className="w-px h-3 bg-gray-300"></div>
                <span className="ml-2 text-xs text-gray-600">{phase.year}</span>
              </div>
              <span className="text-xs text-gray-400">{phase.label}</span>
              {idx < phases.length - 1 && (
                <span className="text-gray-300 ml-2">|</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 底部 */}
      <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-400">
        <span>Technology Stack</span>
        <span>Page {pageNum}</span>
      </div>
    </div>
  );
};

// ==================== 页面3：技术架构 ====================
const ArchitecturePage = ({ pageNum }: { pageNum: number }) => (
  <div className="p-10 h-full">
    {/* 标题区域 */}
    <div className="mb-6">
      <h1 className="text-3xl font-light text-gray-800 tracking-widest uppercase">System Architecture</h1>
      <div className="mt-3 h-px bg-gray-300"></div>
      <div className="mt-4 flex justify-between text-sm text-gray-500">
        <span>Microservices Architecture</span>
        <span>Cloud Native Design</span>
      </div>
    </div>

    {/* 架构图 */}
    <div className="flex flex-col gap-3">
      {architectureData.layers.map((layer, layerIdx) => (
        <div key={layer.name} className="flex items-center">
          {/* 层名称 */}
          <div 
            className="w-24 text-xs font-medium text-right pr-3 shrink-0"
            style={{ color: layer.color }}
          >
            {layer.name}
          </div>
          
          {/* 层内容 */}
          <div className="flex-1 flex gap-2">
            {layer.components.map((comp, compIdx) => (
              <div 
                key={comp.name}
                className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-sm text-center relative"
              >
                <span className="text-sm mr-1">{comp.icon}</span>
                <span className="text-xs text-gray-700">{comp.name}</span>
                {/* 连接线 */}
                {compIdx < layer.components.length - 1 && (
                  <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-4 h-px bg-gray-300"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* 基础设施 */}
    <div className="mt-6 pt-4 border-t border-gray-200">
      <div className="flex items-center justify-center gap-8">
        {architectureData.infrastructure.map((item, idx) => (
          <React.Fragment key={item.name}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <span className="text-xs text-gray-600">{item.name}</span>
              <span className="text-[10px] text-gray-400">({item.type})</span>
            </div>
            {idx < architectureData.infrastructure.length - 1 && (
              <span className="text-gray-300">|</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>

    {/* 架构说明 */}
    <div className="mt-6 p-4 bg-gray-50 border border-gray-100 rounded-sm">
      <div className="grid grid-cols-4 gap-4 text-center">
        <div>
          <p className="text-lg font-light text-gray-800">99.99%</p>
          <p className="text-[10px] text-gray-400">Availability</p>
        </div>
        <div>
          <p className="text-lg font-light text-gray-800">30+</p>
          <p className="text-[10px] text-gray-400">Microservices</p>
        </div>
        <div>
          <p className="text-lg font-light text-gray-800">10M+</p>
          <p className="text-[10px] text-gray-400">Daily Requests</p>
        </div>
        <div>
          <p className="text-lg font-light text-gray-800">&lt;100ms</p>
          <p className="text-[10px] text-gray-400">Response Time</p>
        </div>
      </div>
    </div>

    {/* 底部 */}
    <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-400">
      <span>System Architecture</span>
      <span>Page {pageNum}</span>
    </div>
  </div>
);

// ==================== 页面4：项目经历 ====================
const ProjectsPage = ({ pageNum }: { pageNum: number }) => (
  <div className="p-10 h-full">
    {/* 标题区域 */}
    <div className="mb-6">
      <h1 className="text-3xl font-light text-gray-800 tracking-widest uppercase">Project Experience</h1>
      <div className="mt-3 h-px bg-gray-300"></div>
      <div className="mt-4 flex justify-between text-sm text-gray-500">
        <span>{projects.length} Major Projects</span>
        <span>2016 — 2027</span>
      </div>
    </div>

    {/* 项目列表 */}
    <div className="space-y-4">
      {projects.map((project, idx) => (
        <div key={idx} className="p-4 bg-gray-50 border border-gray-100 rounded-sm">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-sm font-medium text-gray-800">{project.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{project.description}</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-400 block">{project.period}</span>
              <span className="text-[10px] text-gray-500">{project.role}</span>
            </div>
          </div>
          
          {/* 技术栈 */}
          <div className="flex flex-wrap gap-1 mb-3">
            {project.techStack.map(tech => (
              <span 
                key={tech} 
                className="px-2 py-0.5 bg-white border border-gray-200 text-gray-600 text-[10px] rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* 亮点 */}
          <div className="flex flex-wrap gap-4 text-center">
            {project.highlights.map((highlight, hIdx) => (
              <div key={hIdx} className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                <span className="text-xs text-gray-600">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* 底部 */}
    <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-400">
      <span>Project Experience</span>
      <span>Page {pageNum}</span>
    </div>
  </div>
);

// ==================== 页面5：原型展示 ====================
const PrototypePage = ({ pageNum }: { pageNum: number }) => (
  <div className="p-10 h-full">
    {/* 标题区域 */}
    <div className="mb-6">
      <h1 className="text-3xl font-light text-gray-800 tracking-widest uppercase">Design Prototypes</h1>
      <div className="mt-3 h-px bg-gray-300"></div>
      <div className="mt-4 flex justify-between text-sm text-gray-500">
        <span>UI/UX Design Works</span>
        <span>Wireframes & Mockups</span>
      </div>
    </div>

    {/* 原型占位 */}
    <div className="grid grid-cols-2 gap-4">
      {[1, 2, 3, 4].map((item) => (
        <div 
          key={item}
          className="aspect-video bg-gray-50 border border-gray-200 rounded-sm flex flex-col items-center justify-center"
        >
          <div className="w-12 h-8 border-2 border-gray-300 border-dashed rounded mb-2"></div>
          <span className="text-xs text-gray-400">Prototype {item}</span>
          <span className="text-[10px] text-gray-300 mt-1">1280 × 720</span>
        </div>
      ))}
    </div>

    {/* 说明 */}
    <div className="mt-6 p-4 bg-gray-50 border border-gray-100 rounded-sm">
      <div className="flex items-center justify-center gap-8 text-center">
        <div>
          <p className="text-lg font-light text-gray-800">Figma</p>
          <p className="text-[10px] text-gray-400">Design Tool</p>
        </div>
        <div>
          <p className="text-lg font-light text-gray-800">50+</p>
          <p className="text-[10px] text-gray-400">Screens</p>
        </div>
        <div>
          <p className="text-lg font-light text-gray-800">10+</p>
          <p className="text-[10px] text-gray-400">Components</p>
        </div>
        <div>
          <p className="text-lg font-light text-gray-800">A+</p>
          <p className="text-[10px] text-gray-400">User Rating</p>
        </div>
      </div>
    </div>

    {/* 底部 */}
    <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between text-xs text-gray-400">
      <span>Design Prototypes</span>
      <span>Page {pageNum}</span>
    </div>
  </div>
);

// ==================== 主应用 ====================
export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('profile');

  const renderPage = () => {
    const pageNum = pages.findIndex(p => p.id === currentPage) + 1;
    
    switch (currentPage) {
      case 'profile':
        return <ProfilePage pageNum={pageNum} />;
      case 'tech':
        return <TechStackPage pageNum={pageNum} />;
      case 'architecture':
        return <ArchitecturePage pageNum={pageNum} />;
      case 'projects':
        return <ProjectsPage pageNum={pageNum} />;
      case 'prototype':
        return <PrototypePage pageNum={pageNum} />;
      default:
        return <ProfilePage pageNum={pageNum} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center print:p-0 print:bg-white">
      {/* 导航 */}
      <nav className="mb-4 flex gap-1 bg-white px-2 py-1 rounded shadow-sm print:hidden">
        {pages.map(page => (
          <button
            key={page.id}
            onClick={() => setCurrentPage(page.id)}
            className={`px-3 py-1.5 text-xs rounded transition-colors ${
              currentPage === page.id
                ? 'bg-gray-800 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {page.en}
          </button>
        ))}
      </nav>

      {/* A4 页面 */}
      <div className="w-[210mm] min-h-[297mm] bg-white shadow-md print:shadow-none print:w-full">
        {renderPage()}
      </div>

      {/* 技术引擎水印 */}
      <div className="mt-3 flex items-center justify-center gap-3 text-xs text-gray-400 print:hidden">
        <span>Built with</span>
        <span className="flex items-center gap-1">
          <span className="text-gray-500">⚡</span>
          <span className="text-gray-600">Cursor</span>
        </span>
        <span className="text-gray-300">|</span>
        <span className="flex items-center gap-1">
          <span className="text-blue-500">⚛</span>
          <span className="text-gray-600">React</span>
        </span>
        <span className="text-gray-300">|</span>
        <span className="flex items-center gap-1">
          <span className="text-cyan-500">💨</span>
          <span className="text-gray-600">Tailwind CSS</span>
        </span>
        <span className="text-gray-300">|</span>
        <span className="flex items-center gap-1">
          <span className="text-orange-500">▲</span>
          <span className="text-gray-600">Vite</span>
        </span>
        <span className="text-gray-300">|</span>
        <span className="text-gray-500">by 高成</span>
      </div>

      {/* 打印说明 */}
      <div className="mt-2 text-xs text-gray-400 print:hidden">
        Press Ctrl+P to print · Each page prints separately
      </div>
    </div>
  );
}
