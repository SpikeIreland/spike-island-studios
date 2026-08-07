import Link from 'next/link';

export const metadata = {
  title: 'Portfolio — Spike Island Studios',
  description:
    'The companies Spike Island Studios has built and backed: Clarence Legal (LegalTech), Authors Lab (PublishingTech) and Spike Island Productions (Film & TV).',
};

export default function Portfolio() {
  return (
    <section className="section hero-lit">
      <div className="wrap">
        <p className="kicker">Portfolio</p>
        <h1 style={{ maxWidth: '20ch' }}>Built and backed.</h1>
        <p className="lede">
          These are the companies we have built and backed. Each one began as
          an idea; each is now a functioning platform. We apply the same rigour
          to evaluating external opportunities.
        </p>

        <div className="cards">
          <Link href="/portfolio/clarence-legal" className="card">
            <div className="card-meta">
              <span className="badge live">Live</span>
              <span className="sector">LegalTech</span>
            </div>
            <h3>Clarence Legal</h3>
            <p>
              AI-powered contract mediation for businesses and individuals.
              Built in partnership with legal expert John Hayward.
            </p>
            <span className="go">View venture →</span>
          </Link>

          <Link href="/portfolio/authors-lab" className="card">
            <div className="card-meta">
              <span className="badge beta">In Beta</span>
              <span className="sector">PublishingTech</span>
            </div>
            <h3>Authors Lab</h3>
            <p>
              AI manuscript editing platform for writers and publishers — from
              first idea to published, marketed book.
            </p>
            <span className="go">View venture →</span>
          </Link>

          <Link href="/portfolio/spike-island-productions" className="card">
            <div className="card-meta">
              <span className="badge dev">In Development</span>
              <span className="sector">Film &amp; TV</span>
            </div>
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
