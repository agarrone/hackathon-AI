import Link from "next/link";
import { challenges } from "./challenges";

export function SiteHeader() {
  return <header className="site-header"><div className="header-inner">
    <Link className="brand" href="/" aria-label="Hackathon IA — accueil"><span className="brand-mark">data.gouv.fr</span><span className="brand-label">Hackathon IA</span></Link>
    <nav aria-label="Navigation principale">
      <Link href="/#defis">Les défis</Link>
      <details className="challenge-menu"><summary>Choisir un défi</summary><div className="challenge-menu-panel">
        {challenges.map((challenge) => <Link href={`/defis/${challenge.slug}`} key={challenge.slug}><span>{challenge.number}</span>{challenge.category}</Link>)}
      </div></details>
      <Link href="/#informations">Informations pratiques</Link>
    </nav>
  </div></header>;
}
