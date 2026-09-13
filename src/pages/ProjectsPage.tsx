import React from 'react';
import { projects } from '../data';

interface ProjectsPageProps {
  pageNum: number;
}

// ==================== 页面4：项目经历 ====================
const ProjectsPage = ({ pageNum }: ProjectsPageProps) => (
  <div className="p-6 h-full flex flex-col">
    {/* 标题区域 */}
    <div className="mb-2">
      <h1 className="text-3xl font-light text-gray-800 tracking-widest uppercase">Project Experience</h1>
      <p className="text-sm text-gray-500 mt-1">项目经历总览 · 2016 — 2027</p>
      <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <span className="px-2 py-0.5 bg-gray-100 rounded">{projects.length} Major Projects</span>
        <span className="px-2 py-0.5 bg-gray-100 rounded">2016 — 2027</span>
      </div>
      <div className="mt-2 h-px bg-gray-300"></div>
    </div>

    <div className="flex-1 flex flex-col gap-2.5 overflow-hidden">
      <div className="flex-1 space-y-2">
        <h3 className="text-sm font-medium text-gray-700 uppercase tracking-wide">项目列表</h3>
        {projects.map((project, idx) => (
          <div key={idx}>
            <div className="flex items-baseline justify-between mb-0.5 gap-2">
              <h4 className="text-xs font-medium text-gray-800">{project.name}</h4>
              <span className="text-[10px] text-gray-400 shrink-0">
                {project.period} · {project.role}
              </span>
            </div>
            <div className="border-l-2 border-gray-300 pl-3 text-xs text-gray-600 leading-relaxed space-y-1">
              <p>{project.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[10px] rounded">
                    {tech}
                  </span>
                ))}
              </div>
              {project.highlights?.length > 0 && (
                <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-[10px] text-gray-500">
                  {project.highlights.map((highlight, hIdx) => (
                    <span key={hIdx}>· {highlight}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="mt-2 pt-2 border-t border-gray-100 flex justify-between text-xs text-gray-400">
      <span>项目经历 · Project Experience</span>
      <span>第 {pageNum} 页</span>
    </div>
  </div>
);

export default ProjectsPage;
