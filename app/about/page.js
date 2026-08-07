export const metadata = {
  title: 'About — Spike Island Studios',
  description:
    'The founders and working philosophy of Spike Island Studios — practitioners who build AI platforms, and whose vetting judgement is grounded in that experience.',
};

export default function About() {
  return (
    <>
      <section className="section hero-lit">
        <div className="wrap">
          <p className="kicker">About</p>
          <h1 style={{ maxWidth: '24ch' }}>
            Judgement you can trace to the workshop floor.
          </h1>
          <p className="lede">
            Spike Island Studios doesn&rsquo;t just advise on AI — we build it.
            The studio has developed AI systems across legal mediation,
            manuscript editing and film production. That practitioner
            experience is what makes our vetting judgement credible.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Founders</h2>
          <div className="founders">
            <div className="founder">
              <h3>Paul</h3>
              <p className="role">Co-founder</p>
              <p className="prose">
                Twenty-plus years in film, television and music, with a deep
                understanding of creative industries and commercial
                deal-making — and an earlier career in heavy industry: control
                systems, production lines, plants that had to run every day.
                Paul owns the studio&rsquo;s build discipline and brings an
                engineer&rsquo;s conviction that quality is designed in, not
                inspected in afterwards.
              </p>
            </div>
            <div className="founder">
              <h3>Carl</h3>
              <p className="role">Co-founder</p>
              <p className="prose">
                Published author and scriptwriter. Carl brings narrative and
                editorial intelligence to AI platform development — the
                judgement about voice, audience and story that determines
                whether a product is merely functional or genuinely wanted. He
                keeps every evaluation honest about the people it serves.
              </p>
            </div>
          </div>

          <blockquote className="pull">
            We believe most AI businesses are noise. A small number are
            structurally sound, genuinely differentiated and worth backing. We
            know the difference because we&rsquo;ve built in this space
            ourselves.
            <span className="who">— Paul &amp; Carl</span>
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>The studio model</h2>
          <div className="prose">
            <p>
              We treat every venture — including our own — as a portfolio
              company. Sweat equity and bootstrapping are the entry point: each
              of our platforms was built without outside capital, earning its
              way from idea to functioning product. That discipline informs how
              we evaluate others. A business that cannot show its working
              rarely survives ours.
            </p>
            <p>
              Our ventures are engineered on the studio&rsquo;s own
              stochastic-industrial production method: AI does the prolific
              work, while instrumentation, quality gates and measured evidence —
              the disciplines of manufacturing — decide what ships. Every
              platform we build can show you its production line, not just its
              product. We look for the same evidence in every opportunity we
              assess.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
