import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { challenges, getChallenge } from "../../challenges";
import { SiteHeader } from "../../site-header";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() { return challenges.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const challenge = getChallenge((await params).slug);
  if (!challenge) return {};
  return { title: `${challenge.category} · Hackathon IA`, description: challenge.summary, openGraph: { title: challenge.title, description: challenge.summary, images: [] }, twitter: { title: challenge.title, description: challenge.summary, images: [] } };
}

export default async function ChallengePage({ params }: Props) {
  const challenge = getChallenge((await params).slug);
  if (!challenge) notFound();
  const index = challenges.findIndex(({ slug }) => slug === challenge.slug);
  const previous = challenges[index - 1];
  const next = challenges[index + 1];

  return <><SiteHeader/><main>
    <div className="challenge-hero"><div className="page-shell">
      <Link className="back-link" href="/#defis">← Tous les défis</Link>
      <div className="challenge-identity"><span>{challenge.number}</span><p className="kicker">{challenge.category}</p></div>
      <h1>{challenge.title}</h1><p className="hero-copy">{challenge.summary}</p>
    </div></div>
    <div className="article-layout page-shell">
      <aside className="toc" aria-label="Sommaire"><p>Sur cette page</p><a href="#problematique">Problématique</a><a href="#objectif">Objectif</a><a href="#pistes">Pistes à explorer</a><a href="#prototypes">Prototypes</a><a href="#commencer">Pour commencer</a></aside>
      <article className="challenge-content">
        <section id="problematique"><p className="section-number">01</p><h2>Problématique</h2>{challenge.problem.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
        <section id="objectif"><p className="section-number">02</p><h2>Objectif du prototype</h2><div className="objective-box"><p>{challenge.objective}</p></div></section>
        <section id="pistes"><p className="section-number">03</p><h2>Pistes à explorer</h2><ul className="track-list">{challenge.tracks.map((track) => <li key={track}><span aria-hidden="true">→</span>{track}</li>)}</ul></section>
        <section id="prototypes"><p className="section-number">04</p><h2>Prototypes pour s’inspirer</h2><p className="section-intro">Les prototypes associés à ce défi seront présentés ici.</p><div className="prototype-empty"><span aria-hidden="true">＋</span><div><h3>Espace réservé aux prototypes</h3><p>Captures, démonstrations et liens vers le code pourront être ajoutés après leur sélection.</p></div></div></section>
        <section id="commencer"><p className="section-number">05</p><h2>Pour commencer</h2><ol className="start-list">{challenge.start.map((item, itemIndex) => <li key={item}><span>{String(itemIndex + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></section>
      </article>
    </div>
    <nav className="challenge-pagination page-shell" aria-label="Parcourir les défis">
      {previous ? <Link href={`/defis/${previous.slug}`}><span>Défi précédent</span>← {previous.category}</Link> : <span/>}
      {next ? <Link href={`/defis/${next.slug}`}><span>Défi suivant</span>{next.category} →</Link> : <Link href="/#defis"><span>Retour</span>Tous les défis →</Link>}
    </nav>
  </main></>;
}
