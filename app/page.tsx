import Link from "next/link";
import { challenges } from "./challenges";
import { SiteHeader } from "./site-header";

export default function Home() {
  return <>
    <SiteHeader />
    <main>
      <section className="hero"><div className="hero-inner">
        <p className="kicker">Hackathon interne · data.gouv.fr</p>
        <h1>Imaginer de nouvelles façons de découvrir et réutiliser les données</h1>
        <p className="hero-copy">Quatre défis pour explorer, en équipe, ce que l’intelligence artificielle peut apporter au service public de la donnée.</p>
        <a className="primary-button" href="#defis">Découvrir les défis</a>
      </div></section>
      <section className="section" id="defis">
        <div className="section-heading"><div><p className="kicker">4 terrains d’exploration</p><h2>Choisissez votre défi</h2></div><p>Chaque équipe part d’un problème concret et construit un prototype utile, testable et partageable.</p></div>
        <div className="challenge-grid">{challenges.map((challenge) => <article className="challenge-card" key={challenge.slug}>
          <div className="card-meta"><span>{challenge.number}</span><span>{challenge.category}</span></div>
          <h3>{challenge.shortTitle}</h3><p>{challenge.summary}</p>
          <Link href={`/defis/${challenge.slug}`}>Voir le défi <span aria-hidden="true">→</span></Link>
        </article>)}</div>
      </section>
      <section className="info-strip" id="informations"><div><p className="kicker">Informations pratiques</p><h2>Prêts à prototyper ?</h2></div><p>Les informations de date, de lieu et d’organisation seront ajoutées prochainement.</p></section>
    </main>
  </>;
}
