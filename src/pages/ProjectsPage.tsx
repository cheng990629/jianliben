import React from 'react';
import { projects } from '../data';

interface ProjectsPageProps {
  pageNum: number;
}

// ==================== 页面4：项目经历 ====================
const ProjectsPage = ({ pageNum }: ProjectsPageProps) => (
  <div className="p-8 h-full">
    {/* 标题区域 */}
    <div className="mb-3">
      <h1 className="text-3xl font-light text-gray-800 tracking-widest uppercase">Project Experience</h1>
      <div className="mt-2 h-px bg-gray-300"></div>
      <div className="mt-2 flex justify-between text-xs text-gray-500">
        <span>{projects.length} Major Projects</span>
        <span>2016 — 2027</span>
      </div>
    </div>

    {/* 项目列表 */}
    <div className="space-y-3">
      {projects.map((project, idx) => (
        <div key={idx} className="p-3 bg-gray-50 border border-gray-100 rounded-sm">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-xs font-medium text-gray-800">{project.name}</h3>
              <p className="text-[10px] text-gray-500 mt-0.5">{project.description}</p>
            </div>
            <div className="text-right">
              <span className="text-[10px] text-gray-400 block">{project.period}</span>
              <span className="text-[9px] text-gray-500">{project.role}</span>
            </div>
          </div>
          
          {/* 技术栈 */}
          <div className="flex flex-wrap gap-0.5 mb-2">
            {project.techStack.map(tech => (
              <span 
                key={tech} 
                className="px-1.5 py-0.5 bg-white border border-gray-200 text-gray-600 text-[10px] rounded"
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* 亮点 */}
          <div className="flex flex-wrap gap-2 text-center">
            {project.highlights.map((highlight, hIdx) => (
              <div key={hIdx} className="flex items-center gap-1">
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                <span className="text-[10px] text-gray-600">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* 底部 */}
    <div className="mt-auto pt-2 border-t border-gray-100 flex justify-between text-[10px] text-gray-400">
      <span>Project Experience</span>
      <span>Page {pageNum}</span>
    </div>
  </div>
);

export default ProjectsPage;
