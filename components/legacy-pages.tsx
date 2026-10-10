// 旧站根目录内容的迁移页 (解决方案 / 红象生态 / 产品试用)。
//
// 这些页面的正文来自 www.redoop.com 旧仓库 main 分支根目录的 HTML, 但**没有**沿用旧站
// 的 HTML/CSS: 全部按新站的设计语言重写 (page-hero / values / solution-links /
// partner-list / case-grid 等既有样式类), 并且不再指向旧站任何地址。
import Link from 'next/link';
import {asset} from '@/lib/asset';
import {findCase} from '@/lib/cases';
import {lp, type Lang} from '@/lib/i18n';
import {
  architectureAdvantages,
  findSolution,
  solutionSubtitle,
  solutionTitle,
  solutions,
  solutionsCopy,
} from '@/lib/solutions';
import {certifications, ecologyCopy, ecologyDirections} from '@/lib/ecology';
import {DOWNLOAD_URL, downloadCopy} from '@/lib/download';
import {Arrow, CTA, Layout} from './site';

/** 特定案例卡片 (只渲染给定 slug, 且只保留站内真实存在的案例) */
function CaseRow({lang, slugs}: {lang: Lang; slugs: string[]}) {
  const items = slugs.map(slug => findCase(lang, slug)).filter(Boolean);
  if (!items.length) return null;
  return (
    <div className="case-grid">
      {items.map(c => (
        <Link className="case-card" href={lp(lang, `/cases/${c!.slug}`)} key={c!.slug}>
          <img src={asset(`/images/${c!.image}`)} alt={c!.tag} loading="lazy" />
          <div>
            <span className="eyebrow">{c!.tag}</span>
            <h3>{c!.title}</h3>
            <p>{c!.description}</p>
            <span className="case-read">
              {lang === 'zh' ? '查看案例' : 'Read the story'} <Arrow />
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

/** /solutions/ —— 13 个行业方案的总览 */
export function SolutionsIndexPage({lang}: {lang: Lang}) {
  const c = solutionsCopy[lang];
  return (
    <Layout lang={lang}>
      <section className="page-hero container">
        <span className="eyebrow">{c.eyebrow}</span>
        <h1>
          {c.h1[0]}
          <br />
          <span className="muted">{c.h1[1]}</span>
        </h1>
        <p>{c.intro}</p>
      </section>
      <section className="container solution-section">
        <div className="solution-links">
          {solutions.map(s => (
            <Link key={s.slug} href={lp(lang, `/solutions/${s.slug}`)}>
              {s.label[lang]} <Arrow />
            </Link>
          ))}
        </div>
      </section>
      <CTA lang={lang} />
    </Layout>
  );
}

/** /solutions/[slug]/ —— 单个行业方案 */
export function SolutionDetailPage({lang, slug}: {lang: Lang; slug: string}) {
  const c = solutionsCopy[lang];
  const s = findSolution(slug);
  if (!s) {
    return (
      <Layout lang={lang}>
        <section className="page-hero container">
          <h1>{lang === 'zh' ? '未找到该行业方案' : 'Solution not found'}</h1>
          <Link className="text-button" href={lp(lang, '/solutions')}>
            {lang === 'zh' ? '返回解决方案' : 'Back to solutions'} <Arrow />
          </Link>
        </section>
      </Layout>
    );
  }
  return (
    <Layout lang={lang}>
      <section className="page-hero container">
        <span className="eyebrow">
          {c.eyebrow} / {s.label[lang]}
        </span>
        <h1>{solutionTitle(lang, s)}</h1>
        <p>{solutionSubtitle[lang]}</p>
        <div className="product-tabs">
          {solutions.map(x => (
            <Link
              key={x.slug}
              href={lp(lang, `/solutions/${x.slug}`)}
              className={x.slug === s.slug ? 'active' : ''}
            >
              {x.label[lang]}
            </Link>
          ))}
        </div>
      </section>

      <section className="section container">
        <span className="eyebrow">{c.advantagesEyebrow}</span>
        <h2>{c.advantagesH2}</h2>
        <div className="values">
          {architectureAdvantages.map((a, i) => (
            <div key={a.title.en}>
              <span>0{i + 1} /</span>
              <h3>{a.title[lang]}</h3>
              <p>{a.text[lang]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container case-section">
        <span className="eyebrow">{c.casesEyebrow}</span>
        <h2>{c.casesH2}</h2>
        {s.cases.length ? (
          <CaseRow lang={lang} slugs={s.cases} />
        ) : (
          <p className="content-note">{c.casesEmpty}</p>
        )}
        <Link className="text-button" href={lp(lang, '/cases')}>
          {c.moreCases} <Arrow />
        </Link>
      </section>

      <CTA lang={lang} />
    </Layout>
  );
}

/** /ecology/ —— 旧站 4 个 ecology-*.html 合并 (内容原本完全一致) */
export function EcologyPage({lang}: {lang: Lang}) {
  const e = ecologyCopy[lang];
  return (
    <Layout lang={lang}>
      <section className="page-hero container">
        <span className="eyebrow">{e.eyebrow}</span>
        <h1>
          {e.h1[0]}
          <br />
          <span className="muted">{e.h1[1]}</span>
        </h1>
        <p>{e.subtitle}</p>
      </section>

      <section className="container ecosystem-section">
        <span className="eyebrow">{e.directionsEyebrow}</span>
        <h2>{e.directionsH2}</h2>
        <div className="partner-list">
          {ecologyDirections.map(d => (
            <span key={d.slug}>{d.label[lang]}</span>
          ))}
        </div>
      </section>

      <section className="container ecosystem-section">
        <span className="eyebrow">{e.certEyebrow}</span>
        <h2>{e.certH2}</h2>
        <p>{e.certIntro}</p>
        <div className="partner-list">
          {certifications[lang].map((p, i) => (
            <span key={`${p}-${i}`}>{p}</span>
          ))}
        </div>
      </section>

      <CTA lang={lang} />
    </Layout>
  );
}

/** /download/ —— 产品试用 */
export function DownloadPage({lang}: {lang: Lang}) {
  const d = downloadCopy[lang];
  return (
    <Layout lang={lang}>
      <section className="page-hero container">
        <span className="eyebrow">{d.eyebrow}</span>
        <h1>
          {d.h1[0]}
          <br />
          <span className="muted">{d.h1[1]}</span>
        </h1>
        <p>{d.subtitle}</p>
        <div className="hero-buttons">
          <a className="button red" href={DOWNLOAD_URL} target="_blank" rel="noopener noreferrer">
            {d.cta} <Arrow />
          </a>
        </div>
      </section>

      <section className="section container">
        <span className="eyebrow">{d.sectionEyebrow}</span>
        <h2>{d.sectionH2}</h2>
        <div className="values">
          {d.points.map((p, i) => (
            <div key={p.title}>
              <span>0{i + 1} /</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CTA lang={lang} />
    </Layout>
  );
}
