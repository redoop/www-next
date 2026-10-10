// 行业解决方案 —— 从旧站根目录 solution-*.html (13 个页面) 迁移而来。
//
// 旧站这 13 个页面共用同一套模板, 每页只有「行业名 / 标题 / 关联客户案例」不同;
// 正文里的方案架构、架构优势文案完全一致, 因此这里抽成共享数据, 页面按新站设计渲染。
// 案例不再复制文案, 而是指向站内已有的 /cases/<slug>/ (双语齐全、同样是新设计)。
import type {Lang} from './i18n';

export type Solution = {
  slug: string;
  /** 行业短名, 用于标签与切换器 */
  label: Record<Lang, string>;
  /** 关联的站内客户案例 slug (来自 lib/cases.ts); 没有匹配案例的行业留空 */
  cases: string[];
};

/** 所有行业方案共用的副标题 (旧站每页重复出现的同一句) */
export const solutionSubtitle: Record<Lang, string> = {
  zh: 'REDOOP CLOUD 全面支持云、芯片、操作系统，上下游软硬件生态。构建开放大数据软件服务生态，赋能企业信息化大数据升级！',
  en: 'REDOOP CLOUD spans cloud, chips and operating systems across the upstream and downstream hardware and software ecosystem — building an open big data software service ecosystem for enterprise digital upgrades.',
};

/** 旧站「架构优势」板块的 5 条, 13 个方案页完全相同 */
export const architectureAdvantages: {title: Record<Lang, string>; text: Record<Lang, string>}[] = [
  {
    title: {zh: '敏捷上线', en: 'Agile rollout'},
    text: {zh: '快速部署，敏捷实施', en: 'Fast deployment and agile implementation'},
  },
  {
    title: {zh: '横向扩容', en: 'Horizontal scaling'},
    text: {zh: '支持并行计算和并行存储', en: 'Parallel compute and parallel storage'},
  },
  {
    title: {zh: '海量存储', en: 'Massive storage'},
    text: {zh: '存储和管理 PB 规模数据', en: 'Store and manage PB-scale data'},
  },
  {
    title: {zh: '数据多样', en: 'Data variety'},
    text: {
      zh: '支持结构化、半结构化、非结构数据',
      en: 'Structured, semi-structured and unstructured data',
    },
  },
  {
    title: {zh: '场景丰富', en: 'Rich scenarios'},
    text: {zh: '支持在线、近线、离线等', en: 'Online, nearline and offline workloads'},
  },
];

/** 顺序沿用旧站 tab 的排列 */
export const solutions: Solution[] = [
  {slug: 'car', label: {zh: '汽车', en: 'Automotive'}, cases: ['industry', 'automotive']},
  {slug: 'insurance', label: {zh: '保险', en: 'Insurance'}, cases: ['insurance']},
  {slug: 'bank', label: {zh: '银行金融', en: 'Banking & finance'}, cases: ['bank', 'consulting']},
  {slug: 'space', label: {zh: '航空航天', en: 'Aerospace'}, cases: ['space']},
  {slug: 'smartcity', label: {zh: '智慧城市', en: 'Smart city'}, cases: ['smartcity']},
  {slug: 'bridge', label: {zh: '桥梁交通', en: 'Bridge & transport'}, cases: ['bridge', 'railway']},
  {slug: 'electricity', label: {zh: '电力', en: 'Power & utilities'}, cases: []},
  {slug: 'retail', label: {zh: '零售', en: 'Retail'}, cases: []},
  {slug: 'communication', label: {zh: '通信', en: 'Telecom'}, cases: []},
  {slug: 'net', label: {zh: '互联网', en: 'Internet'}, cases: []},
  {slug: 'medicine', label: {zh: '公共健康', en: 'Public health'}, cases: []},
  {slug: 'oil', label: {zh: '石油/天然气/煤炭', en: 'Oil, gas & coal'}, cases: []},
  {slug: 'government', label: {zh: '政府', en: 'Government'}, cases: ['security']},
];

export const findSolution = (slug: string): Solution | undefined =>
  solutions.find(s => s.slug === slug);

/** 页面标题: 旧站是「红象云腾行业大数据XX解决方案」 */
export const solutionTitle = (lang: Lang, s: Solution): string =>
  lang === 'zh'
    ? `红象云腾行业大数据${s.label.zh}解决方案`
    : `Redoop big data solutions for ${s.label.en}`;

export const solutionsCopy = {
  zh: {
    eyebrow: '行业解决方案',
    h1: ['行业大数据', '解决方案'],
    intro: '围绕具体行业场景，把 Redoop 大数据平台落到采集、存储、计算与展现的完整链路中。',
    advantagesEyebrow: '方案架构',
    advantagesH2: '架构优势',
    casesEyebrow: '客户案例',
    casesH2: '相关案例',
    casesEmpty: '该行业的客户案例正在整理中，欢迎直接联系我们了解落地细节。',
    switchLabel: '其他行业方案',
    moreCases: '查看全部客户案例',
    ask: '与我们聊聊',
  },
  en: {
    eyebrow: 'Industry solutions',
    h1: ['Big data', 'by industry'],
    intro:
      'Redoop’s big data platform applied to concrete industry scenarios — from ingestion and storage through computation and presentation.',
    advantagesEyebrow: 'Architecture',
    advantagesH2: 'Architecture advantages',
    casesEyebrow: 'Customer stories',
    casesH2: 'Related stories',
    casesEmpty:
      'Customer stories for this industry are being prepared — talk to us for the implementation details.',
    switchLabel: 'Other industries',
    moreCases: 'See all customer stories',
    ask: 'Talk to us',
  },
};
