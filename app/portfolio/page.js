import Link from 'next/link';

export const metadata = {
  title: 'Portfolio — Spike Island Studios',
  description:
    'The current Spike Island Studios portfolio: Clarence Legal, Authors Lab, and Spike Island Productions.',
};

export default function Portfolio() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Portfolio</p>
        <h1 style={{ maxWidth: '20ch' }}>Three ventures. One discipline.</h1>
        <p className="lede">
          Each venture is an independent brand with its own market, leadership
          and momentum — built on the studio&rsquo;s shared production method.
        </p>

        <div className="cards">
          <Link href="/portfolio/clarence-legal" className="card">
            <span className="badge live">Live</span>
            <h3>Clarence Legal</h3>
            <p>
              AI-powered contract mediation for businesses and individuals.
              Built with legal partner John Hayward.
            </p>
            <span className="go">View venture →</span>
          </Link>

          <Link href="/portfolio/authors-lab" className="card">
            <span className="badge beta">In Beta</span>
            <h3>Authors Lab</h3>
            <p>
              AI manuscript editing platform for writers and publishers — from
              first idea to published, marketed book.
            </p>
            <span className="go">View venture →</span>
          </Link>

          <Link href="/portfolio/spike-island-productions" className="card">
            <span className="badge dev">In Development</span>
            <h3>Spike Island Productions</h3>
            <p>
              AI-assisted film and television production, drawing on two
              decades in the screen industries.
            </p>
            <span className="go">View venture →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
