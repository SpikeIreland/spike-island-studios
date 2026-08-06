import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="section" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div className="wrap">
          <h1 className="fade">We build the AI businesses of tomorrow.</h1>
          <p className="lede fade d1">
            Spike Island Studios is a London-based venture studio. We create
            AI-powered platforms, partner with world-class experts, and build
            businesses designed to last. Quietly. Deliberately.
          </p>
          <div className="cta-row fade d2">
            <Link href="/portfolio" className="btn primary">
              Our Portfolio
            </Link>
            <Link href="/contact" className="btn">
              Get in Touch
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
