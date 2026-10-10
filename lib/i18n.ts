export type Lang = 'zh' | 'en';
export const langOfPath = (p: string): Lang => (p === '/en' || p.startsWith('/en/') ? 'en' : 'zh');
export const lp = (lang: Lang, path: string) => (lang === 'en' ? (path === '/' ? '/en' : `/en${path}`) : path);
export const switchPath = (lang: Lang, path: string) => (lang === 'zh' ? path.replace(/^\/en/, '') || '/' : lp('en', path.replace(/^\/en/, '') || '/'));
export const ui = {
  zh: {
    langLabel: 'EN',
    nav: [['/', '首页'], ['/products', '产品介绍'], ['/solutions', '解决方案'], ['/ecology', '红象生态'], ['/cases', '客户案例'], ['/about', '关于我们'], ['/contact', '联系我们']] as [string, string][],
    footerLinks: [['/products', '产品介绍'], ['/solutions', '解决方案'], ['/ecology', '红象生态'], ['/download', '产品试用'], ['/cases', '客户案例'], ['/contact', '联系我们']] as [string, string][],
    navCta: '开启合作',
    menuLabel: '展开导航',
    footerTagline: '以技术连接可能，以数据驱动未来。',
    copyright: (y: number) => `© ${y} 红象云腾 · 版权所有`,
    footerEn: 'DATA DRIVES THE FUTURE.',
    cta: { eyebrow: 'LET’S BUILD WHAT’S NEXT', title: '下一种可能，从这里开始。', text: '与我们一起，探索适合您的 Redoop 大数据平台方案。', button: '与我们聊聊' },
    form: {
      title: '告诉我们您的想法', sub: '留下需求，让合作从一次对话开始。提交后会打开你的邮件客户端。',
      name: '您的姓名', namePh: '如何称呼您', company: '公司名称', companyPh: '您所在的公司',
      email: '电子邮箱', emailPh: 'name@company.com', phone: '联系电话', phonePh: '您的联系电话（选填）',
      interest: '感兴趣的方向', message: '您的需求', messagePh: '简单介绍您的业务场景与需求…',
      consent: '我同意将上述信息用于本次咨询联系。', submit: '提交咨询', sending: '正在提交…',
      ok: '已为你打开邮件客户端，请确认发送。也可直接写信至 tongxiaojun@redoop.com。', fail: '暂时无法提交，请稍后重试。'
    }
  },
  en: {
    langLabel: '中文',
    nav: [['/', 'Home'], ['/products', 'Products'], ['/solutions', 'Solutions'], ['/ecology', 'Ecosystem'], ['/cases', 'Customer Stories'], ['/about', 'About Us'], ['/contact', 'Contact']] as [string, string][],
    footerLinks: [['/products', 'Products'], ['/solutions', 'Solutions'], ['/ecology', 'Ecosystem'], ['/download', 'Try Redoop'], ['/cases', 'Customer Stories'], ['/contact', 'Contact']] as [string, string][],
    navCta: 'Start a conversation',
    menuLabel: 'Toggle navigation',
    footerTagline: 'Connecting technology with what is possible.',
    copyright: (y: number) => `© ${y} Redoop. All rights reserved.`,
    footerEn: 'DATA DRIVES THE FUTURE.',
    cta: { eyebrow: 'LET’S BUILD WHAT’S NEXT', title: 'The next possibility starts here.', text: 'Talk to us about the Redoop big data platform that fits your business.', button: 'Talk to us' },
    form: {
      title: 'Tell us what you have in mind', sub: 'Share your requirements and let the conversation begin. Submitting opens your email client.',
      name: 'Your name', namePh: 'How should we address you?', company: 'Company', companyPh: 'Where do you work?',
      email: 'Email', emailPh: 'name@company.com', phone: 'Phone', phonePh: 'Your phone number (optional)',
      interest: 'Area of interest', message: 'Your requirements', messagePh: 'Briefly describe your business scenario and requirements…',
      consent: 'I agree that the information above may be used to contact me about this enquiry.', submit: 'Send enquiry', sending: 'Sending…',
      ok: 'Your email client has been opened — please send the message. You can also write to tongxiaojun@redoop.com directly.', fail: 'Unable to submit right now. Please try again later.'
    }
  }
} as const;
