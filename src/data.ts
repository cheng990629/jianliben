// ==================== 个人信息 ====================
/** 地点展示变体：导出/预览可切换 */
export type LocationMode = 'intent' | 'residence';

export const locationVariants: Record<
  LocationMode,
  { label: string; value: string; short: string }
> = {
  intent: {
    label: '意向城市',
    value: '深圳 / 杭州 / 江苏',
    short: '全栈意向城市',
  },
  residence: {
    label: '现居',
    value: '沈阳',
    short: '现居沈阳',
  },
};

/** 求职意向变体 */
export type TitleMode = 'all' | 'fullstack' | 'backend' | 'frontend';

export const titleVariants: Record<TitleMode, { title: string; short: string }> = {
  all: {
    title: '求职意向：全栈架构 (AI方向)/后端/前端',
    short: '全部',
  },
  fullstack: {
    title: '求职意向：全栈架构 (AI方向)',
    short: '全栈架构',
  },
  backend: {
    title: '求职意向：后端',
    short: '后端',
  },
  frontend: {
    title: '求职意向：前端',
    short: '前端',
  },
};

export const personalInfo = {
  name: '高成',
  title: titleVariants.all.title,
  status: '离职 - 随时到岗',
  experience: '10年',
  salary: '20 ~ 25k',
  /** @deprecated 请用 locationVariants；保留兼容默认意向城市 */
  location: locationVariants.intent.value,
  birthday: '90后',
  age: '',
  education: '沈阳工业大学 · 计算机科学与技术 (2023.06~2026.07)',
  email: 'mzayy_top@163.com',
  phone: '189-4195-9525',
  // 入职资料
  onboardingDocuments: [
    { name: '离职证明', status: '✓ 已准备' },
    { name: '薪资证明', status: '✓ 已准备' },
    { name: '户口本', status: '✓ 已准备' },
    { name: '身份证', status: '✓ 已准备' },
    { name: '毕业证', status: '✓ 已准备' },
    { name: '寸照', status: '✓ 已准备' },
    { name: '征信报告', status: '✓ 已准备' },
    { name: '无犯罪证明', status: '✓ 已准备' },
    { name: '体检报告', status: '✓ 已准备' },
    { name: '社保卡', status: '✓ 已准备' },
  ],
  // 二维码图片路径
  qrCode: '/src/assets/images/profile-photo.png',
  summary: `10 年软件研发经验。其中 8 年深耕 SaaS 微服务全栈：主导财税多租户平台从定制化演进到私有云 SaaS，覆盖 SpringCloud 微服务、RPA 办税、集群与端到端 DevOps；熟悉 Java / Python / TS，具备架构评审与团队技术指导经验。近 2 年聚焦生产级 AI Agent 与全模态落地：打通 Langflow / 自研 DAG 编排，构建 RAG、全模态 ASR/TTS/OCR 与模型部署调优能力，完成自动化办税SaaS平台， GIS 仿真 Agent、科创助手等业务融合交付。`,
  specialties: [
  ],
  // Database 专业特长
  specialtiesDatabase: [
    // '达梦 国产数据库适配',
    // 'TiDB 分布式数据库',
    // 'Oceanbase 高可用架构',
  ],
  // Architecture 专业特长
  specialtiesArchitecture: [
    '生产级筹划Agent',
    '全模态数字人实践',
    '微服务架构设计与拆分',
    '云原生架构落地',
  ],
  // 架构建设经验
  architectureExperience: [
    {
      title: 'GIS多智能体仿真',
      description: '四屏态势仿真智能体：数字人/多Agent编排/GIS仿真/全模态端到端落地',
      icon: '🌐',
    },
    {
      title: 'SaaS微服务（SpringCloud）',
      description: '多租户财税超融合，支撑 RPA 办税与高并发账套',
      icon: '🌐',
    },
    {
      title: 'All-in-One 架构',
      description: 'K8s 一体化与跨境网络，降低复杂度、提升交付效率',
      icon: '🔧',
    },
  ],
  // 简易项目展示
  quickProjects: [
    {
      name: 'GIS仿真智能体',
      tech: '意图理解/情况研判/方案优选',
      description: '全链路 Agent，Harness 约束Agent产出数据后联动 GIS 仿真与标绘',
      scale: '',
    },
    {
      name: '财税达SaaS平台',
      tech: '自动化办税/集中账套',
      description: '面向企业多租户财税云平台：RPA 办税、小微企业集中记账与报表',
      scale: '',
    },
    {
      name: '国资委AI服务平台',
      tech: '智能体编排/企业数据对接',
      description: '科创 Agent：政策解读、报告生成，对接企业数据',
      scale: '',
    },
    {
      name: '希格薪酬系统',
      tech: '批量核算/自动计税/社保申报',
      description: '多院所薪酬社保一体化：批量核算、自动计税与申报',
      scale: '',
    },
    {
      name: '康泰智慧看护',
      tech: '蓝牙设备协议/看护告警/情绪识别',
      description: '人脸情绪识别与蓝牙设备协议对接，支撑看护场景监测与告警',
      scale: '',
    },
    {
      name: '中源谈话工作平台',
      tech: '音视频采集转写/谈话流程/光盘刻录',
      description: '谈话音视频采集转写、谈话全流程管理、记录归档与光盘刻录',
      scale: '',
    },
   
  ],
};

// ==================== 技能分类 ====================
export const skillCategories = [
  {
    name: 'AI & Agent（智能体研发）',
    skills: [
      { name: 'VLLM / Langflow / 全模态ASR / TTS / OCR / Harness / Langchain&graph', level: 95 },
      { name: 'Langflow(Dag)', level: 92 },
      { name: '自研Agent(Dag)', level: 85 },
      { name: 'Ragflow', level: 82 },
      { name: 'Harness', level: 85 },
    ]
  },

  {
    name: '全栈研发',
    skills: [
      { name: '全栈：Java微服务 / Python / Node.js / PHP / Vue.js / TypeScript / React.js', level: 96 },
      { name: '云原生&DevOps：Kubernetes / Nginx / Lua / Harbor / Ceph / Minio / Serverless', level: 92 },
      { name: 'All-in-One：Proxmox VE / Kairos Kubernetes / Openwrt / OpenClash / Tailscale', level: 90 },
      { name: '数据库：PostgreSQL / Redis / Elasticsearch / 达梦 / TiDB / Oceanbase', level: 88 },
      { name: 'Electron & Tauri', level: 88 },
      { name: 'GIS仿真', level: 98 },
      { name: '模型部署调优', level: 92 },
    ]
  },

  {
    name: '方法论',
    skills: [
      { name: 'AgentCoding', level: 98 },
      { name: '软工程结构', level: 93 },
      { name: 'Harness', level: 98 },
      { name: '第一性原理', level: 98 },
      { name: '本体论', level: 98 },
    ]
  },
];

// ==================== 工作经历 ====================
export const workExperience = [
  {
    company: '润和软件（创业板 300339）',
    position: '全栈 (Agent) 研发工程师',
    duration: '2025.10 - 至今',
    salary: '',
    description: '负责内网算力平台与多模态 Agent 系统架构与研发。 Langflow 到 完全自研 DAG 编排研发，集成全模态 ASR/TTS/OCR、视频识别、LLM 能力，落地会议纪要、公文撰写、知识库问答场景；构建内网 GIS 筹划 Agent，重构团队人机协同工作流，完成模型部署、性能调优与多智能体协同方案落地。',
    technologies: ['GIS筹划Agent', '全模态全双工数字人', '重塑内网团队Agent工作形态'  ],
  },
  {
    company: '辽宁易为控股有限公司',
    position: '全栈 (AI) 架构师',
    duration: '2025.9.12 - 2026.3.16',
    salary: '',
    description: '负责 LLM 分发平台架构设计，搭建可控 Agent 应用体系；探索跨境场景 AI 解决方案，基于 Strapi 构建 CMS+AI 助手，服务多商户小程序业务；落地国资委科创 AI 助手，打通传统业务系统与大模型能力。',
    technologies: ['LLM分发平台','uniapp电商多商户', '国资委科创AI助手'],
  },

  {
    company: '湖北万亚软件技术有限公司',
    position: '软件架构师',
    duration: '2018.12 - 2025.7.29',
    salary: '',
    description: '财税 SaaS 平台架构负责人，带领团队完成 RPA 办税机器人、集中记账、薪酬报销系统研发，服务国家安全中心、农科院等政企客户。基于 SpringCloud+K8s 搭建多租户财税平台，设计 RPA 自动化流程，替代人工账务操作；负责超融合机房方案、复杂报表引擎，主导架构评审、核心编码与团队技术指导。',
    technologies: ['超融合自建机房','Kubernate','Spring Cloud', 'RPA', '多租戶设计', '复杂报表与交互'],
  },
];

// ==================== 教育背景 ====================
export const education = [
  {
    school: '沈阳工业大学',
    degree: '本科',
    major: '计算机科学与技术',
    note: '2023.06~2026.07',
    year: '2026',
  },
  {
    school: '渤海大学',
    degree: '专科',
    major: '计算机应用技术',
    note: '2021.06~2023.06',
    year: '2023',
  },
];

// ==================== 零散技术栈数组（可自由添加） ====================
// 格式: { name: '技术名', color: '颜色' }
export const techStacks = [
  // 后端开发
  { name: 'Java', color: '#ED8B00' },
  { name: 'Spring Boot', color: '#6DB33F' },
  { name: 'Spring Cloud', color: '#6DB33F' },
  { name: 'Spring Security', color: '#6DB33F' },
  { name: 'MyBatis', color: '#00008B' },
  { name: 'Hibernate', color: '#59666C' },
  { name: 'Node.js', color: '#68A063' },
  { name: 'Express', color: '#68A063' },
  { name: 'NestJS', color: '#E0234E' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Django', color: '#092E20' },
  { name: 'Flask', color: '#000000' },
  { name: 'PHP', color: '#777BB4' },
  { name: 'Laravel', color: '#FF2D20' },
  // 前端开发
  { name: 'Vue 3', color: '#42B883' },
  { name: 'Vue Router', color: '#42B883' },
  { name: 'Pinia', color: '#42B883' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'HTML5', color: '#E34F26' },
  { name: 'CSS3', color: '#1572B6' },
  { name: 'Sass/Scss', color: '#CC6699' },
  { name: 'Element Plus', color: '#409EFF' },
  { name: 'Ant Design Vue', color: '#1890FF' },
  { name: 'Axios', color: '#5A9FD4' },
  { name: 'Webpack', color: '#8DD6F9' },
  { name: 'Vite', color: '#646CFF' },
  { name: 'Uni-app', color: '#27AD60' },
  { name: '微信小程序', color: '#07C160' },
  // 数据库
  { name: 'MySQL', color: '#4479A1' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'Redis', color: '#DC382D' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Elasticsearch', color: '#005571' },
  { name: 'RabbitMQ', color: '#FF6600' },
  { name: 'Kafka', color: '#231F20' },
  // 云原生 & DevOps
  { name: 'Kubernetes', color: '#326CE5' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Nginx', color: '#009639' },
  { name: 'Linux', color: '#FCC624' },
  { name: 'CentOS', color: '#932278' },
  { name: 'Ubuntu', color: '#E95420' },
  { name: 'Jenkins', color: '#D33833' },
  { name: 'Git', color: '#F05032' },
  { name: 'GitLab', color: '#FC6D26' },
  { name: 'CI/CD', color: '#4CAF50' },
  // AI & 大模型
  { name: 'OpenAI', color: '#10A37F' },
  { name: 'Claude API', color: '#D4A574' },
  { name: 'GPT API', color: '#10A37F' },
  { name: 'LLM', color: '#6366F1' },
  { name: 'LangChain', color: '#0D47A1' },
  { name: 'RAG', color: '#7C4DFF' },
  { name: '向量数据库', color: '#FF4081' },
  // 架构 & 中间件
  { name: '微服务', color: '#00BCD4' },
  { name: '分布式', color: '#673AB7' },
  { name: '高并发', color: '#E91E63' },
  { name: '负载均衡', color: '#009688' },
  { name: '限流熔断', color: '#FF5722' },
  { name: 'OAuth2', color: '#3B5998' },
  { name: 'JWT', color: '#000000' },
  { name: 'WebSocket', color: '#010101' },
  { name: 'RESTful API', color: '#FF6B35' },
  // 其他
  { name: 'uniapp多商户电商', color: '#2196F3' },
  { name: 'RPA', color: '#7209B7' },
  { name: 'Lua', color: '#00008B' },
  { name: 'Shell', color: '#4EAA25' },
  { name: 'Strapi CMS', color: '#4945FF' },
  { name: '物联网', color: '#FF9800' },
  { name: '海康设备', color: '#2196F3' },

  { name: '数据可视化', color: '#00BCD4' },
];

// ==================== 技术使用时间段数据 ====================
// 时间段类型
export interface TimeRange {
  start: string;  // 格式: YYYYMMDDHHmm 例如 "202602061413"
  end: string;   // 格式: YYYYMMDDHHmm 例如 "202602061520"
}

// 技术数据定义（支持多个时间段）
export interface TechItem {
  name: string;
  color: string;
  ranges: TimeRange[];  // 零散时间段数组
}

// 时间戳转换为年份（用于阶段标记）
export const getYearFromTimestamp = (ts: string): number => {
  return parseInt(ts.slice(0, 4), 10);
};

// 格式化为可读时间
export const formatTimestamp = (ts: string): string => {
  const year = ts.slice(0, 4);
  const month = ts.slice(4, 6);
  const day = ts.slice(6, 8);
  const hour = ts.slice(8, 10);
  const minute = ts.slice(10, 12);
  return `${year}-${month}-${day} ${hour}:${minute}`;
};

// 获取所有时间段覆盖的总时间范围
export const getTotalTimeRange = (techs: TechItem[]) => {
  const allStarts = techs.flatMap(t => t.ranges.map(r => parseInt(r.start, 10)));
  const allEnds = techs.flatMap(t => t.ranges.map(r => parseInt(r.end, 10)));
  return {
    start: Math.min(...allStarts).toString(),
    end: Math.max(...allEnds).toString()
  };
};

// 技术使用时间段数据（每个技术多个时间段）
// 恢复所有技术，ranges 清空（不显示时间段）
export const techData: TechItem[] = [
  // 2016年
  {
    name: 'Java',
    color: '#ED8B00',
    ranges: [],
  },
  {
    name: 'PHP',
    color: '#777BB4',
    ranges: [],
  },
  {
    name: 'Linux',
    color: '#FCC624',
    ranges: [],
  },
  // 2018年
  {
    name: 'Node.js',
    color: '#68A063',
    ranges: [],
  },
  {
    name: 'MySQL',
    color: '#4479A1',
    ranges: [],
  },
  {
    name: 'Kubernetes',
    color: '#326CE5',
    ranges: [],
  },
  {
    name: 'Spring Cloud',
    color: '#6DB33F',
    ranges: [],
  },
  {
    name: 'Redis',
    color: '#DC382D',
    ranges: [],
  },
  {
    name: 'Docker',
    color: '#2496ED',
    ranges: [],
  },
  // 2019年
  {
    name: 'Vue 3',
    color: '#42B883',
    ranges: [],
  },
  {
    name: 'Nginx',
    color: '#009639',
    ranges: [],
  },
  {
    name: 'Spring Boot',
    color: '#6DB33F',
    ranges: [],
  },
  {
    name: 'RESTful API',
    color: '#FF6B35',
    ranges: [],
  },
  // 2020年
  {
    name: 'TypeScript',
    color: '#3178C6',
    ranges: [],
  },
  {
    name: 'Python',
    color: '#3776AB',
    ranges: [],
  },
  {
    name: 'PostgreSQL',
    color: '#4169E1',
    ranges: [],
  },
  {
    name: 'RPA',
    color: '#7209B7',
    ranges: [],
  },
  {
    name: 'Lua',
    color: '#00008B',
    ranges: [],
  },
  {
    name: '微服务',
    color: '#00BCD4',
    ranges: [],
  },
  {
    name: '分布式',
    color: '#673AB7',
    ranges: [],
  },
  {
    name: '高并发',
    color: '#E91E63',
    ranges: [],
  },
  {
    name: 'JWT',
    color: '#000000',
    ranges: [],
  },
  {
    name: '负载均衡',
    color: '#009688',
    ranges: [],
  },
  // 2021年
  {
    name: 'Element Plus',
    color: '#409EFF',
    ranges: [],
  },
  {
    name: 'OAuth2',
    color: '#3B5998',
    ranges: [],
  },
  {
    name: 'MongoDB',
    color: '#47A248',
    ranges: [],
  },
  {
    name: 'RabbitMQ',
    color: '#FF6600',
    ranges: [],
  },
  {
    name: 'CentOS',
    color: '#932278',
    ranges: [],
  },
  {
    name: 'Jenkins',
    color: '#D33833',
    ranges: [],
  },
  {
    name: 'Git',
    color: '#F05032',
    ranges: [],
  },
  // 2022年
  {
    name: 'Express',
    color: '#68A063',
    ranges: [],
  },
  {
    name: 'MyBatis',
    color: '#00008B',
    ranges: [],
  },
  {
    name: 'WebSocket',
    color: '#010101',
    ranges: [],
  },
  {
    name: '限流熔断',
    color: '#FF5722',
    ranges: [],
  },
  {
    name: 'CI/CD',
    color: '#4CAF50',
    ranges: [],
  },
  // 2023年
  {
    name: 'OpenAI',
    color: '#10A37F',
    ranges: [],
  },
  {
    name: 'LLM',
    color: '#6366F1',
    ranges: [],
  },
  {
    name: 'GPT API',
    color: '#10A37F',
    ranges: [],
  },
  {
    name: 'Vue Router',
    color: '#42B883',
    ranges: [],
  },
  {
    name: 'Pinia',
    color: '#42B883',
    ranges: [],
  },
  {
    name: 'Shell',
    color: '#4EAA25',
    ranges: [],
  },
  {
    name: 'GitLab',
    color: '#FC6D26',
    ranges: [],
  },
  // 2024年
  {
    name: 'Claude API',
    color: '#D4A574',
    ranges: [],
  },
  {
    name: 'LangChain',
    color: '#0D47A1',
    ranges: [],
  },
  {
    name: 'RAG',
    color: '#7C4DFF',
    ranges: [],
  },
  {
    name: '微信小程序',
    color: '#07C160',
    ranges: [],
  },
  {
    name: 'Uni-app',
    color: '#27AD60',
    ranges: [],
  },
  {
    name: 'Axios',
    color: '#5A9FD4',
    ranges: [],
  },
  {
    name: 'Vite',
    color: '#646CFF',
    ranges: [],
  },
  // 2025年
  {
    name: 'Strapi CMS',
    color: '#4945FF',
    ranges: [],
  },
  {
    name: 'AI/ML',
    color: '#FF4081',
    ranges: [],
  },
  {
    name: '向量数据库',
    color: '#FF4081',
    ranges: [],
  },

  {
    name: 'Django',
    color: '#092E20',
    ranges: [],
  },
  {
    name: 'Laravel',
    color: '#FF2D20',
    ranges: [],
  },
  {
    name: 'Elasticsearch',
    color: '#005571',
    ranges: [],
  },
  {
    name: 'Kafka',
    color: '#231F20',
    ranges: [],
  },
  {
    name: 'Ubuntu',
    color: '#E95420',
    ranges: [],
  },
  {
    name: 'Spring Security',
    color: '#6DB33F',
    ranges: [],
  },
  {
    name: 'Flask',
    color: '#000000',
    ranges: [],
  },
  {
    name: '数据可视化',
    color: '#00BCD4',
    ranges: [],
  },
];

// 时间范围（字符串格式）
export const timeRange = {
  start: '201601010000',
  end: '202712312359',
};

// 阶段定义（使用年份）
export const phases = [
  { year: 2016, label: '基础开发' },
  { year: 2018, label: '后端深化' },
  { year: 2019, label: '前端架构' },
  { year: 2020, label: '全栈' },
  { year: 2021, label: '云原生' },
  { year: 2022, label: '微服务' },
  { year: 2023, label: 'AI 启蒙' },
  { year: 2024, label: 'AI 架构' },
  { year: 2025, label: 'AGI' },
];

// ==================== 技术架构数据 ====================
export const architectureData = {
  layers: [
    {
      name: '客户端',
      color: '#42B883',
      components: [
        { name: 'Vue3 Web', icon: '🌐' },
        { name: '小程序', icon: '📱' },
        { name: 'Android', icon: '🤖' },
      ]
    },
    {
      name: '接入层',
      color: '#009639',
      components: [
        { name: 'Nginx', icon: '🚀' },
        { name: 'Gateway', icon: '🚪' },
        { name: 'Lua', icon: '🌙' },
      ]
    },
    {
      name: '服务层',
      color: '#ED8B00',
      components: [
        { name: 'Spring Cloud', icon: '☕' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'Python AI', icon: '🐍' },
      ]
    },
    {
      name: '数据层',
      color: '#4479A1',
      components: [
        { name: 'MySQL', icon: '🗄️' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'Redis', icon: '⚡' },
      ]
    },
    {
      name: '基础设施',
      color: '#326CE5',
      components: [
        { name: 'Kubernetes', icon: '☸️' },
        { name: 'Docker', icon: '📦' },
        { name: 'Linux', icon: '🐧' },
      ]
    },
  ],
  infrastructure: [
    { name: '混合云', type: 'Cloud' },
    { name: '容器化', type: 'Container' },
    { name: '集群部署', type: 'Ops' },
    { name: 'CI/CD', type: 'DevOps' },
  ]
};

// ==================== 项目数据 ====================
export const projects = [
  {
    name: '财税达',
    role: '架构师',
    period: '2018.12 - 2025.1',
    description: '带组 RPA 自动化机器人开发，财税领域的 SaaS 平台，提供企业级财务和税务解决方案。',
    techStack: ['Java', 'RPA', 'Spring Cloud', 'MySQL', '分布式系统'],
    highlights: [
      '财税达 SaaS 平台',
      'RPA 自动化机器人',
      '服务国家级事业单位',
    ],
  },
  {
    name: '中源谈话工作平台',
    role: '架构师',
    period: '2019 - 2025',
    description: '企业级谈话工作平台，提供谈话记录管理、工作流程自动化、数据分析等功能。',
    techStack: ['Java', 'Spring Boot', 'Vue3', 'MySQL', 'Redis'],
    highlights: [
      '中源谈话工作平台',
      '企业级谈话系统',
      '工作流程自动化',
    ],
  },
  {
    name: '国资委科创AI服务助手',
    role: 'AI 研发',
    period: '2025.1 - 2025.8',
    description: '为国资委打造的科创 AI 服务助手，提供科技创新咨询、政策解读、报告生成等 AI 能力。',
    techStack: ['LLM', 'Claude API', 'GPT API', 'Node.js', 'Nginx'],
    highlights: [
      '国资委科创AI服务助手',
      'AI 政策解读',
      '科创咨询服务',
    ],
  },
  {
    name: 'StrapiAi研发解决方案',
    role: '全栈 (AI) 架构师',
    period: '2025.9 - 2026.03.19',
    description: '基于 Strapi CMS 的 AI 解决方案研发，将 AI 能力与传统 CMS 深度融合。负责小程序研发、物联网设备对接。',
    techStack: ['Strapi CMS', 'Vue3', 'AI/ML', '物联网', 'uniapp多商户电商'],
    highlights: [
      'StrapiAi研发解决方案',
      'AI + CMS 融合',
      '物联网设备集成',
    ],
  },
  {
    name: '零售增效平台',
    role: '架构师',
    period: '2020 - 2025',
    description: '零售行业增效平台，提供销售分析、库存管理、客户画像等功能的综合解决方案。',
    techStack: ['PostgreSQL', 'MySQL', '数据分析', '分布式架构'],
    highlights: [
      '零售增效平台',
      '销售数据分析',
      '客户画像系统',
    ],
  },
];

// ==================== 页面类型 ====================
export type PageType = 'profile' | 'tech' | 'architecture' | 'projects' | 'prototype' | 'caishuida' | 'runhe' | 'teamtech' | 'otherprojects' | 'liaoningyiwei' | 'jiaodao';

// 页面配置
export const pages: { id: PageType; name: string; en: string }[] = [
  { id: 'profile', name: '个人介绍', en: 'Profile' },
  // { id: 'tech', name: '技术栈', en: 'Tech Stack' },
  // { id: 'architecture', name: '技术架构', en: 'Architecture' },
  // { id: 'projects', name: '项目经历', en: 'Projects' },
  // { id: 'prototype', name: '原型展示', en: 'Prototypes' },
  { id: 'runhe', name: '润和', en: 'Runhe' },
  { id: 'liaoningyiwei', name: '辽宁易为', en: 'Liaoning Yiwei' },
  { id: 'jiaodao', name: 'AI创业', en: 'AI Startup' },
  { id: 'caishuida', name: '财税达', en: 'CaiShuiDa' },
  { id: 'teamtech', name: '团队技术', en: 'Team Tech' },
  { id: 'otherprojects', name: '其他项目', en: 'Other Projects' },
];
