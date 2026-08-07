import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="section" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div className="wrap">
          <h1 className="fade">
            We help investment firms find the AI opportunities worth backing.
          </h1>
          <p className="lede fade d1">
            Spike Island Studios is a London-based AI venture studio and vetting
            intermediary. We build AI platforms ourselves, which means we
            understand the landscape from the inside.
          </p>
          <div className="prose fade d1" style={{ marginTop: 22 }}>
            <p>
              We work with investment firms as a trusted partner — identifying,
              evaluating and contextualising AI opportunities before they reach
              the investment committee. Our team builds non-deterministic,
              hybrid AI systems and has done so across the legal, publishing
              and film &amp; television sectors. We know what is real and what
              is hype, because we have built both sides of that line.
            </p>
          </div>
          <div className="cta-row fade d2">
            <Link href="/portfolio" className="btn primary">
              Our Portfolio
            </Link>
            <Link href="/work-with-us" className="btn">
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="wrap">
          <div className="cards" style={{ marginTop: 0 }}>
            <Link href="/portfolio/clarence-legal" className="card">
              <span className="badge live">Live</span>
              <h3>Clarence Legal</h3>
              <p>AI-powered contract mediation for businesses and individuals.</p>
              <span className="go">View venture →</span>
            </Link>
            <Link href="/portfolio/authors-lab" className="card">
              <span className="badge beta">In Beta</span>
              <h3>Authors Lab</h3>
              <p>AI manuscript editing platform for writers and publishers.</p>
              <span className="go">View venture →</span>
            </Link>
            <Link href="/portfolio/spike-island-productions" className="card">
              <span className="badge dev">In Development</span>
              <h3>Spike Island Productions</h3>
              <p>AI-assisted film and television production.</p>
              <span className="go">View venture →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
