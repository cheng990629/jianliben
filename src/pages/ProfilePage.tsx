import React from 'react';
import { 
  personalInfo, 
  skillCategories, 
  workExperience, 
  education,
} from '../data';

interface ProfilePageProps {
  pageNum: number;
  jobTitle?: string;
  locationLabel?: string;
  locationValue?: string;
}

// ==================== 页面1：个人介绍 ====================
const ProfilePage = ({
  pageNum,
  jobTitle = personalInfo.title,
  locationLabel = '意向城市',
  locationValue = personalInfo.location,
}: ProfilePageProps) => (
  <div className="p-7 h-full flex flex-col">
    {/* 标题区域 - 左右结构 */}
    <div className="mb-2 flex items-stretch">
      <div className="flex justify-between w-full items-stretch">
        {/* 左侧：姓名 + 求职意向 + 基本信息 */}
        <div>
          <div className="flex items-baseline gap-6">
            <h1 className="font-display text-4xl text-gray-800 tracking-wide leading-none">{personalInfo.name}</h1>
            <p className="font-accent text-base text-gray-500 tracking-wider">{jobTitle}</p>
          </div>
          
          {/* 基本信息 2x2 */}
          <div className="mt-3 grid grid-cols-2 gap-x-12 gap-y-1.5 text-xs text-gray-500 w-[460px]">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">年龄</span>
              <span className="text-gray-700">{personalInfo.birthday}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">电话</span>
              <span className="text-gray-700">{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">{locationLabel}</span>
              <span className="text-gray-700">{locationValue}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">邮箱</span>
              <span className="text-gray-700">{personalInfo.email}</span>
            </div>
          </div>
        </div>
        
        {/* 左侧：二维码 */}
        <div className="flex gap-2 items-end">
          {personalInfo.qrCode && (
            <img 
              src={personalInfo.qrCode} 
              alt="QR Code" 
              className="h-20 w-auto rounded-sm border-2 border-gray-200 object-cover"
            />
          )}
          <img 
            src="/src/assets/images/profile.png" 
            alt="Profile" 
            className="h-20 w-auto rounded-sm border-2 border-gray-200 object-cover"
          />
        </div>
      </div>
      
      <div className="mt-3 h-px bg-gray-300"></div>
    </div>

    {/* 左侧信息 */}
    <div className="flex gap-6 flex-1">
      <div className="w-1/3 flex flex-col">
        {/* 工作信息 */}
        <div className="mt-1 space-y-1 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span>工作经验</span>
            <span className="text-gray-800 font-medium">{personalInfo.experience}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>期望薪资</span>
            <span className="text-gray-800 font-medium">{personalInfo.salary}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>求职状态</span>
            <span className="text-gray-800 font-medium">{personalInfo.status}</span>
          </div>
        </div>

        {/* 核心技能 */}
        <div className="mt-2.5">
          <h3 className="text-sm font-semibold text-gray-700 mb-1.5">
            核心技能 <span className="font-accent text-gray-400 font-normal">Skills</span>
          </h3>
          <div className="space-y-1.5">
            {[
              { label: 'AI全栈工程', value: 80, color: 'bg-gray-500' },
              { label: '前端研发', value: 96, color: 'bg-gray-700' },
              { label: '后端研发', value: 72, color: 'bg-gray-800' },
              { label: '全模态研发', value: 55, color: 'bg-gray-600' },
              { label: '云原生架构', value: 64, color: 'bg-gray-600' },
              { label: 'DevOps部署调优', value: 88, color: 'bg-gray-500' },
            ].map((skill, idx) => (
              <div key={idx}>
                <div className="flex justify-between items-center mb-0.5">
                  <span className="text-xs text-gray-700">{skill.label}</span>
                  <span className="text-[10px] text-gray-500"></span>
                </div>
                <div className="h-1 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
                  <div className={`h-full ${skill.color} rounded-full`} style={{ width: `${skill.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 代表项目 */}
        <section className="mt-2.5">
          <h3 className="text-sm font-semibold text-gray-700 mb-1.5">
            代表项目 <span className="font-accent text-gray-400 font-normal">Projects</span>
          </h3>
          <ul className="space-y-2">
            {personalInfo.quickProjects?.map((project, idx) => (
              <li key={idx}>
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-xs text-gray-800 shrink-0">{project.name}</span>
                  <span className="font-accent text-[10px] text-gray-400 text-right leading-snug truncate">{project.tech}</span>
                </div>
                {project.description && (
                  <p className="text-[10px] text-gray-500 leading-snug mt-0.5">
                    {project.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* 架构建设经验 */}
        <section className="mt-2.5">
          <h3 className="text-sm font-semibold text-gray-700 mb-1.5">
            架构建设 <span className="font-accent text-gray-400 font-normal">Architecture</span>
          </h3>
          <ul className="space-y-2">
            {personalInfo.architectureExperience?.map((item, idx) => (
              <li key={idx}>
                <p className="text-xs text-gray-800 leading-snug">{item.title}</p>
                {item.description && (
                  <p className="text-[10px] text-gray-500 leading-snug mt-0.5">
                    {item.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* 教育背景 */}
        <section className="mt-2.5">
          <h3 className="text-sm font-semibold text-gray-700 mb-1.5">
            教育背景 <span className="font-accent text-gray-400 font-normal">Education</span>
          </h3>
          <ul className="space-y-1.5">
            {education.map(edu => (
              <li key={edu.school} className="flex items-baseline justify-between gap-2">
                <span className="text-xs text-gray-800">{edu.school}</span>
                <span className="font-accent text-[10px] text-gray-500 shrink-0">{edu.degree} · {edu.major}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 入职资料就绪 */}
        <div className="mt-2.5">
          <h3 className="text-sm font-semibold text-gray-700 mb-1.5">
            入职资料 <span className="font-accent text-gray-400 font-normal">Onboarding</span>
          </h3>
          <div className="grid grid-cols-2 gap-x-2 gap-y-1">
            {personalInfo.onboardingDocuments?.map((doc, idx) => (
              <div key={idx} className="flex items-center justify-between gap-1">
                <span className="text-[10px] text-gray-600 truncate">{doc.name}</span>
                <span className="text-[9px] text-gray-400 shrink-0">{doc.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 右侧内容 */}
      <div className="w-2/3 space-y-5">
        {/* 个人概述 */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2.5 uppercase tracking-wide">
            关于我 <span className="font-accent normal-case tracking-normal text-gray-400 font-normal">About</span>
          </h3>
          <p className="text-sm text-gray-600 leading-snug">{personalInfo.summary}</p>
        </div>

        {/* 专长领域 + 技术栈 */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2.5 uppercase tracking-wide">
            专业特长 <span className="font-accent normal-case tracking-normal text-gray-400 font-normal">Expertise</span>
          </h3>

          {/* 技术栈 */}
          <div className="space-y-3">
            {skillCategories.map(cat => (
              <p key={cat.name} className="text-[11px] text-gray-600 leading-[1.7] text-justify">
                <span className="text-gray-800">{cat.name}</span>
                <span className="text-gray-300 mx-1.5">/</span>
                {cat.skills.map(skill => skill.name).join(' · ')}
              </p>
            ))}
          </div>

          {/* 核心专长亮点 */}
          {(() => {
            const specs = [
              ...(personalInfo.specialties || []),
              ...(personalInfo.specialtiesDatabase || []),
              ...(personalInfo.specialtiesArchitecture || []),
            ];
            if (!specs.length) return null;
            return (
              <div className="mt-4 pt-3 border-t border-gray-200">
                <div className="flex w-full items-center text-[11px] text-gray-700 tracking-wide">
                  {specs.map((spec, idx) => (
                    <React.Fragment key={idx}>
                      <span className="shrink-0 whitespace-nowrap">{spec}</span>
                      {idx < specs.length - 1 && (
                        <span className="flex-1 text-center text-gray-300 select-none" aria-hidden>
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>

        {/* 工作经历 */}
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
            代表工作经历 <span className="font-accent normal-case tracking-normal text-gray-400 font-normal">Experience</span>
          </h3>
          <div className="space-y-5">
            {workExperience.map((work, idx) => (
              <div key={idx} className="relative pl-5 border-l border-gray-200">
                <div className="absolute left-[-3px] top-0 w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                <div className="flex justify-between items-start gap-3 mb-2">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-800">{work.position}</p>
                    <p className="font-accent text-xs text-gray-400 mt-0.5 tracking-wider">
                      {work.duration}
                      {work.salary ? ` · 薪资：${work.salary}` : ''}
                    </p>
                  </div>
                  <p className="font-accent text-xs text-gray-500 shrink-0 text-right">{work.company}</p>
                </div>
                <p className="text-xs text-gray-600 leading-[1.7] mb-2.5">{work.description}</p>
                <div className="flex flex-wrap gap-1.5">
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
      <span>简历 <span className="font-accent text-gray-300">Curriculum Vitae</span></span>
      <span className="font-accent">第 {pageNum} 页</span>
    </div>
  </div>
);

export default ProfilePage;
