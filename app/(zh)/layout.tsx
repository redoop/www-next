import type { Metadata } from 'next';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
import '../globals.css';
export const metadata: Metadata = {
  title: {default: '红象云腾 REDOOP · 大数据基础软件平台', template: '%s | Redoop'},
  description: 'Redoop Enterprise 大数据基础软件平台，基于 Hadoop、HBase 与 Ambari，构建开放大数据软件服务生态，赋能企业信息化大数据升级。',
  openGraph: {locale: 'zh_CN', type: 'website'},
};
export default function ZhRootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="alternate" hrefLang="zh-CN" href={`${BASE}/`} />
        <link rel="alternate" hrefLang="en" href={`${BASE}/en/`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE}/`} />
      </head>
      <body>{children}</body>
    </html>
  );
}
