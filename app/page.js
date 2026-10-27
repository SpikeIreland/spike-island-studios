import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="section hero-lit" style={{ paddingTop: 120, paddingBottom: 120 }}>
        <div className="wrap">
          <h1 className="fade">
            Enterprise&#8209;grade is a promise. Industrial&#8209;grade is a discipline.
          </h1>
          <p className="lede fade d1">
            Spike Island Studios is a London venture studio building AI
            platforms with the methods of heavy industry — instruments, gates
            and records that do not take the model&rsquo;s word for anything.
          </p>
          <div className="prose fade d1" style={{ marginTop: 22 }}>
            <p>
              The intelligence at the core of our platforms is probabilistic —
              that is what lets it handle nuance, and what makes it
              untrustworthy naked. Our answer is the one a plant engineer
              gives: every claim backed by a named instrument, every output
              through a quality gate, every record append-only. We are not
              building systems that are never wrong. We are building systems
              that are never wrong <em>silently</em>.
            </p>
          </div>
          <div className="cta-row fade d2">
            <Link href="/portfolio" className="btn primary">
              Our Ventures
            </Link>
            <Link href="/about" className="btn">
              How We Build
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
              <h3>AuthorsLab</h3>
              <p>The AI editorial platform for authors and publishers.</p>
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
