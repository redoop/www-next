// 红象生态 —— 从旧站根目录 ecology-*.html 迁移而来。
//
// 旧站的 ecology-software / hardware / education / solution 四个页面, 除高亮 tab 外
// 内容完全一致(同一句标题、同一句副标题、同一份 17 项联合认证清单), 因此合并为一个
// 页面呈现, 内容零丢失; 旧站的四个 URL 都指向这里。
import type {Lang} from './i18n';

/** 四个生态方向 (旧站的四个 tab) */
export const ecologyDirections: {slug: string; label: Record<Lang, string>}[] = [
  {slug: 'software', label: {zh: '软件', en: 'Software'}},
  {slug: 'hardware', label: {zh: '硬件', en: 'Hardware'}},
  {slug: 'education', label: {zh: '教育', en: 'Education'}},
  {slug: 'solution', label: {zh: '解决方案', en: 'Solutions'}},
];

/** 旧站「红象联合认证」清单 (四个页面完全相同, 含原始重复项) */
export const certifications: Record<Lang, string[]> = {
  zh: [
    '红象云腾 & 神州云科',
    '红象云腾 & 中国电子',
    '红象云腾 & 中标软件',
    '红象云腾 & 龙芯中科',
    '红象云腾 & 红旗软件',
    '红象云腾 & 红旗软件',
    '红象云腾 & 红旗软件',
    '红象云腾 & 红旗软件',
    '红象云腾 & 普华基础软件',
    '红象云腾 & 中太服务器',
    '红象云腾 & 万里红',
    '红象云腾 & 银河麒麟高级版',
    '红象云腾 & 银河麒麟标准版',
    '红象云腾 & 银河麒麟飞腾版',
    '红象云腾 & 银河麒麟云平台',
    '红象云腾 & 英特力',
    '红象云腾 & 零知云',
  ],
  en: [
    'Redoop & SinoCloud',
    'Redoop & China Electronics',
    'Redoop & China Standard Software',
    'Redoop & Loongson Technology',
    'Redoop & Red Flag Software',
    'Redoop & Red Flag Software',
    'Redoop & Red Flag Software',
    'Redoop & Red Flag Software',
    'Redoop & i-Soft Linux',
    'Redoop & Zhongtai Server',
    'Redoop & Wanlihong',
    'Redoop & Kylin Advanced',
    'Redoop & Kylin Standard',
    'Redoop & Kylin Phytium',
    'Redoop & Kylin Cloud Platform',
    'Redoop & Yingteli',
    'Redoop & Lingzhi Cloud',
  ],
};

export const ecologyCopy = {
  zh: {
    eyebrow: '红象生态',
    h1: ['共筑大数据', '开放云端生态'],
    title: '共筑大数据开放云端生态',
    subtitle:
      'REDOOP CLOUD 全面支持云、芯片、操作系统，上下游软硬件生态。构建开放大数据软件服务生态，赋能企业信息化大数据升级！',
    directionsEyebrow: '生态方向',
    directionsH2: '软件 · 硬件 · 教育 · 解决方案',
    certEyebrow: '红象联合认证',
    certH2: '已完成的产品兼容认证',
    certIntro: '红象云腾与国内主流基础软硬件厂商完成联合认证，覆盖芯片、操作系统、服务器与云平台。',
  },
  en: {
    eyebrow: 'Ecosystem',
    h1: ['An open big data', 'cloud ecosystem'],
    title: 'Building an open big data cloud ecosystem',
    subtitle:
      'REDOOP CLOUD spans cloud, chips and operating systems across the upstream and downstream hardware and software ecosystem — building an open big data software service ecosystem for enterprise digital upgrades.',
    directionsEyebrow: 'Directions',
    directionsH2: 'Software · Hardware · Education · Solutions',
    certEyebrow: 'Joint certification',
    certH2: 'Completed product compatibility certifications',
    certIntro:
      'Redoop has completed joint certification with leading domestic infrastructure vendors across chips, operating systems, servers and cloud platforms.',
  },
};
