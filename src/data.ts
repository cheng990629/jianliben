// ==================== 个人信息 ====================
export const personalInfo = {
  name: '高成',
  title: '全栈 (AI) 架构师',
  status: '离职 - 随时到岗',
  experience: '8年',
  salary: '12k ~ 17k',
  location: '沈阳-沈河区',
  age: '',
  education: '沈阳工业大学 · 计算机科学与技术 (2023.06~2026.07)',
  email: 'cheng990629@163.com',
  phone: '189-4195-9525',
  // 入职资料
  onboardingDocuments: [
    { name: '离职证明', status: '✓ 已准备' },
    { name: '薪资证明', status: '✓ 已准备' },
    { name: '户口本', status: '✓ 已准备' },
    { name: '毕业证', status: '✓ 已准备' },
    { name: '寸照', status: '✓ 已准备' },
    { name: '征信报告', status: '✓ 已准备' },
    { name: '无犯罪证明', status: '✓ 已准备' },
    { name: '体检报告', status: '✓ 已准备' },
    { name: '社保卡', status: '✓ 已准备' },
  ],
  summary: `技术驱动型架构师，具备架构思维和强学习能力。致力于推动传统系统与 AI 的深度融合与改造。精通 All-in-One 架构、K8s、云原生、分布式系统、微服务、集群化部署。擅长创新AI原型与交互设计，整合设计构建工程，技术攻坚，大数据交互，租户分库分表设计，具备跨境网络研发与设计能力。`,
  specialties: [
    '后端架构：Java, Node.js, Python, PHP',
    '前端架构：Vue.js, TypeScript, React.js',
    '云原生 & DevOps：Kubernetes, Nginx, Lua，Harbor，Cept,Minio，Serverless',
    '数据库：PostgreSQL，Redis, Elasticsearch, 达梦,TiDB, Oceanbase',
    'AGI：Strapi CMS AI 解决方案,',
    '物联网: 海康监控/审计设备，审讯设备',
    '跨境All in one建设',
    '超融合集群建设',
    'Kubernetes k3s自建集群',
    'All-in-One 架构',
  ],
  // Database 专业特长
  specialtiesDatabase: [,
    '达梦 国产数据库适配',
    'TiDB 分布式数据库',
    'Oceanbase 高可用架构',
  ],
  // Architecture 专业特长
  specialtiesArchitecture: [
    '微服务架构设计与拆分',
    '私域电商系统架构',
    'AI 原型系统设计',
    '高并发系统架构',
    '云原生架构实践',
  ],
  // 架构建设经验
  architectureExperience: [
    {
      title: '跨境路由设备建设',
      description: '设计并部署跨境网络解决方案，实现国内外服务的高效互联互通',
      icon: '🌐',
    },
    {
      title: '超融合集群建设',
      description: '构建计算、存储、网络一体化超融合架构，提升资源利用率',
      icon: '⚡',
    },
    
    {
      title: 'Kubernetes 集群',
      description: '基于 K8s 的容器编排与自动化运维，实现弹性伸缩与灰度发布',
      icon: '☸️',
    },
    {
      title: 'All-in-One 架构',
      description: '一体化架构设计，简化系统复杂度，提升开发与运维效率',
      icon: '🔧',
    },
  ],
  // 简易项目展示
  quickProjects: [
    {
      name: '财税达',
      tech: 'Kubernate/微服务/RPA/SASS',
      scale: '',
    },
    {
      name: '中源谈话工作平台',
      tech: 'Java/Vue3/Ffmpeg',
      scale: '',
    },
    {
      name: '国资委AI服务平台',
      tech: 'Dify/Python/Vue3',
      scale: '',
    },
    {
      name: 'StrapiAi研发解决方案',
      tech: 'Node.js/Next.js',
      scale: '',
    },
    {
      name: '私域电商多商户',
      tech: 'Java/uniapp/Vue3',
      scale: '',
    },
  ],
};

// ==================== 技能分类 ====================
export const skillCategories = [
  {
    name: 'Backend',
    skills: [
      { name: 'Spring Cloud', level: 90 },
      { name: 'Node.js', level: 92 },
      { name: 'Python', level: 88 },
      { name: 'PHP', level: 80 },
    ]
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'Vue.js', level: 92 },
      { name: 'TypeScript', level: 88 },
      { name: 'React.js', level: 85 },
      { name: '微信小程序', level: 82 },
      { name: 'Nuxt.js', level: 88 },      
      { name: 'Next.js', level: 88 },
      { name: 'Ant-design-X', level: 88 },
      
    ]
  },
  {
    name: 'DevOps',
    skills: [
      { name: 'Kubernetes', level: 90 },
      { name: 'Docker', level: 92 },
      { name: 'Nginx', level: 90 },
      { name: 'Linux', level: 92 },
    ]
  },
  {
    name: 'Database',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'Redis', level: 85 },
      { name: 'Elasticsearch', level: 72 },
    ]
  },
  {
    name: 'AI & 大模型',
    skills: [
      { name: 'Cursor', level: 85 },
      { name: 'Claude API', level: 85 },
      { name: 'Coze', level: 85 },
      { name: 'Dify', level: 82 },
    ]
  },
  {
    name: 'Architecture',
    skills: [
      { name: 'SASS微服务', level: 90 },
      { name: '私域电商', level: 88 },
      { name: '重新定义AI原型', level: 82 },
    ]
  },
];

// ==================== 工作经历 ====================
export const workExperience = [
  {
    company: '辽宁易为控股有限公司',
    position: '核心全栈 (AI) 架构师',
    duration: '2025.9 - 至今',
    description: '负责小程序裂变活动研发、创新AI 研发（Strapi CMS AI 解决方案）、物联网研发（海康监控/审讯设备）以及智慧农业架构设计。推动 AI 技术与传统业务深度融合，构建智能化解决方案。',
    technologies: [,'uniapp电商多商户', '国资委科创AI助手','Strapi CMS（AI研发解决方案）',  '海康与固定审讯'],
  },
  {
    company: '礁岛（辽阳）软件技术有限公司',
    position: '一人公司 & AI 研发',
    duration: '2024.11 - 2025.8',
    description: '研发 CLAUDE、GPT 镜像站与大语言模型接口，处理跨境网络解决方案。探索 AI 前沿技术，构建高效的模型调用体系。',
    technologies: ['Lua镜像站研发','跨境网络', '跨境渠道','店铺复制与运营','Vue3','React', 'LLM','Claude API', 'GPT API'],
  },
  {
    company: '湖北万亚软件技术有限公司',
    position: '软件架构师',
    duration: '2018.12 - 2025.1.31',
    description: '带组财税达项目（电子税务局RPA 自动化机器人、大规模集中记账）、薪酬与报销系统开发，服务于国家安全中心、农科院等单位。负责整体技术架构设计、团队技术指导及核心代码编写。',
    technologies: ['超融合自建机房','Kubernate','Spring Cloud', 'RPA', '大数据与复杂表格UI', '租户'],
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

  { name: '租户分库分表', color: '#9C27B0' },
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
  {
    name: '租户分库分表',
    color: '#9C27B0',
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
    period: '2025.9 - 至今',
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
export type PageType = 'profile' | 'tech' | 'architecture' | 'projects' | 'prototype';

// 页面配置
export const pages: { id: PageType; name: string; en: string }[] = [
  { id: 'profile', name: '个人介绍', en: 'Profile' },
  { id: 'tech', name: '技术栈', en: 'Tech Stack' },
  { id: 'architecture', name: '技术架构', en: 'Architecture' },
  { id: 'projects', name: '项目经历', en: 'Projects' },
  { id: 'prototype', name: '原型展示', en: 'Prototypes' },
];
