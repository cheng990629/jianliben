import React from 'react';
import { 
  personalInfo, 
  skillCategories, 
  workExperience, 
  education,
} from '../data';

interface ProfilePageProps {
  pageNum: number;
}

// ==================== 页面1：个人介绍 ====================
const ProfilePage = ({ pageNum }: ProfilePageProps) => (
  <div className="p-8 h-full flex flex-col">
    {/* 封面图片 */}

    
    {/* 标题区域 - 左右结构 */}
    <div className="mb-3 min-h-[100px] flex items-stretch">
      <div className="flex justify-between w-full items-stretch">
        {/* 左侧：姓名 + 求职意向 + 基本信息 */}
        <div className="h-16">
          <div className="flex items-baseline gap-6">
            <h1 className="text-4xl font-light text-gray-800 tracking-widest uppercase">{personalInfo.name}</h1>
            <p className="text-lg text-gray-500 font-light">{personalInfo.title}</p>
          </div>
          
          {/* 基本信息 2x2 */}
          <div className="mt-4 grid grid-cols-2 gap-x-12 gap-y-2 text-xs text-gray-500 w-[460px]">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">生日</span>
              <span className="text-gray-700">{personalInfo.birthday}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">电话</span>
              <span className="text-gray-700">{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400">现居</span>
              <span className="text-gray-700">{personalInfo.location}</span>
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
      <div className="w-1/3">
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

        {/* 代表项目 */}
        <div className="mt-2">
          <h3 className="text-sm font-medium text-gray-700 mb-2">代表项目</h3>
          <div className="space-y-1">
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
        <div className="mt-2">
          <h3 className="text-sm font-medium text-gray-700 mb-2">技术栈</h3>
          {skillCategories.map(cat => (
            <div key={cat.name} className="mb-2">
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
        <div className="mt-3">
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
         <div className="mt-2">
          <h3 className="text-sm font-medium text-gray-700 mb-2">教育背景</h3>
          {education.map(edu => (
            <div key={edu.school} className="mb-2">
              <p className="text-sm text-gray-800">{edu.school}</p>
              <p className="text-xs text-gray-500">{edu.degree} · {edu.major}</p>
              <p className="text-xs text-gray-400">{edu.year} 自考</p>
            </div>
          ))}
        </div>

        {/* 入职资料 */}
        {personalInfo.onboardingDocuments && (
          <div className="mt-3">
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
      <div className="w-2/3 space-y-4">
        {/* 个人概述 */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">关于我</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{personalInfo.summary}</p>
        </div>

        {/* 专长领域 */}
        <div className="mt-1">
          <h3 className="text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide">专业特长</h3>
          {/* 技术架构专长 */}
          <div className="mb-1">
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
          <div className="mb-1">
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
              { label: '后端研发', value: 92, color: 'bg-gray-800' },
              { label: '前端研发', value: 97, color: 'bg-gray-700' },
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
          <h3 className="text-sm font-medium text-gray-700 mb-3 uppercase tracking-wide">代表工作经历</h3>
          <div className="space-y-4">
            {workExperience.map((work, idx) => (
              <div key={idx} className="relative pl-5 border-l border-gray-200">
                <div className="absolute left-[-3px] top-0 w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-sm font-medium text-gray-800">{work.position}</p>
                  <p className="text-xs text-gray-500">{work.company}</p>
                </div>
                <div className="text-right space-y-1">
                  <span className="block text-xs text-gray-400">{work.duration}</span>
                  {/* 新增：薪资 */}
                  {work.salary && (
                    <span className="block text-xs " style={{color: 'gray'}}>
                      薪资：{work.salary}
                    </span>
                  )}
                </div>
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
      <span>简历</span>
      <span>第 {pageNum} 页</span>
    </div>
  </div>
);

export default ProfilePage;
