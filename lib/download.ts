// 产品试用 / 下载 —— 从旧站根目录 download.html 迁移而来。
//
// 旧页除了下载入口, 其余全是导航与页脚样板。旧页的「安装文档」指向
// community.redoop.com/docs/intro, 该子域当前没有任何 DNS 解析 (已实测), 因此收录时
// 只保留可用的企业站入口, 不再把一个死链搬进来。
import type {Lang} from './i18n';

/** 企业站 (实测可访问) */
export const DOWNLOAD_URL = 'https://enterprise.redoop.com/';

export const downloadCopy = {
  zh: {
    eyebrow: '产品试用',
    h1: ['红象云腾', '企业大数据基础软件'],
    subtitle:
      '红象云腾企业大数据基础软件兼容多种芯片系统，构建开放大数据软件服务生态，赋能企业信息化大数据升级！',
    sectionEyebrow: '云端一键安装',
    sectionH2: '红象云腾大数据平台',
    points: [
      {title: '社区版下载', text: '面向社区用户开放下载，可直接获取安装介质。'},
      {title: '社区版免费使用', text: '社区版免费使用，适合学习、评估与验证。'},
      {title: '极速便捷安装', text: '云端一键安装，缩短从下载到可用环境的时间。'},
      {title: '全面加强的组件特性', text: '在开源组件基础上做了企业级增强与稳定性加固。'},
      {title: '安装测试', text: '提供安装后的自检流程，确认集群各组件状态正常。'},
      {title: '企业最佳实践', text: '沉淀金融、政务、能源等行业的大数据落地实践。'},
    ],
    cta: '前往企业站获取',
  },
  en: {
    eyebrow: 'Try Redoop',
    h1: ['Redoop Enterprise', 'big data infrastructure software'],
    subtitle:
      'Redoop Enterprise big data infrastructure software supports a wide range of chips and operating systems — an open big data software ecosystem for enterprise digital upgrades.',
    sectionEyebrow: 'One-click cloud install',
    sectionH2: 'The Redoop big data platform',
    points: [
      {title: 'Community edition download', text: 'Open download for community users, with install media available directly.'},
      {title: 'Free to use', text: 'The community edition is free — suited to learning, evaluation and proof of concept.'},
      {title: 'Fast, convenient install', text: 'One-click cloud installation shortens the path from download to a working cluster.'},
      {title: 'Strengthened components', text: 'Enterprise-grade hardening and stability work on top of the open source components.'},
      {title: 'Install verification', text: 'A post-install self-check confirms every component in the cluster is healthy.'},
      {title: 'Enterprise best practice', text: 'Field-tested big data practice from finance, government and energy.'},
    ],
    cta: 'Get it on the enterprise site',
  },
};
