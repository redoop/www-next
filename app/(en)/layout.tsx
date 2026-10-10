import type { Metadata } from 'next';

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
import '../globals.css';
export const metadata: Metadata = {
  title: {default: 'Redoop · Big data infrastructure software', template: '%s | Redoop'},
  description: 'Redoop Enterprise big data infrastructure software, built on Hadoop, HBase and Ambari. An open big data software ecosystem for enterprise digital upgrades.',
  openGraph: {locale: 'en_US', type: 'website'},
};
export default function EnRootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link rel="alternate" hrefLang="zh-CN" href={`${BASE}/`} />
        <link rel="alternate" hrefLang="en" href={`${BASE}/en/`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE}/`} />
      </head>
      <body>{children}</body>
    </html>
  );
}
