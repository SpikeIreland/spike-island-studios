export const metadata = {
  title: 'About — Spike Island Studios',
  description:
    'The founders and method of Spike Island Studios: industrial automation pedigree, hardware-embedded AI, and a venture studio run on factory discipline.',
};

export default function About() {
  return (
    <>
      <section className="section hero-lit">
        <div className="wrap">
          <p className="kicker">About</p>
          <h1 style={{ maxWidth: '24ch' }}>
            Built by people from plants that had to run.
          </h1>
          <p className="lede">
            Spike Island Studios builds AI platforms the way heavy industry
            builds production lines — because that is where we come from.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Founders</h2>
          <div className="founders">
            <div className="founder">
              <h3>Paul Lyons</h3>
              <p className="role">Co-founder · Engineering</p>
              <p className="prose">
                Paul started at seventeen as an automation technician at Ford,
                and spent the 1990s as the contracted troubleshooter brought in
                to fix what in-house maintenance teams could not — factory
                robotics and production machinery for Formula&nbsp;1 teams
                including Williams and McLaren, for British Airways, and for
                the UK Ministry of Defence. He commissioned airport-cargo
                control systems at Gatwick, and he is the named inventor on
                granted US and European patents behind Numen, an AI-assisted
                system for monitoring industrial equipment, in commercial use
                today. A serial company-builder across engineering and energy,
                he has carried inventions the whole distance from patent to
                printed-circuit manufacture, firmware and market.
              </p>
            </div>
            <div className="founder">
              <h3>Carl Lyons</h3>
              <p className="role">Co-founder · Narrative &amp; Product</p>
              <p className="prose">
                A published author and scriptwriter — he writes as
                C&nbsp;G&nbsp;Lyons — and a company-builder across media and
                publishing. Carl brings the judgement about voice, audience and
                story that decides whether a platform is merely functional or
                genuinely wanted, and he keeps every venture honest about the
                people it serves. AuthorsLab is designed from inside the
                author&rsquo;s chair because its co-founder sits in one.
              </p>
            </div>
          </div>

          <blockquote className="pull">
            We are not building systems that are never wrong. We are building
            systems that are never wrong silently.
            <span className="who">— Spike Island Studios</span>
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>How we build</h2>
          <div className="prose">
            <p>
              A non-deterministic intelligence does the work that matters,
              inside industrial machinery that cannot lie. Language models are
              probabilistic — that is what lets them handle nuance, and what
              makes them untrustworthy naked. Our answer is the one a plant
              engineer gives: surround the intelligence with instruments,
              gates and records that do not take its word for anything. Every
              claim has a named instrument behind it. No check is believed
              until it has been shown failing against a deliberately broken
              fixture. Generative work is never its own judge — a second,
              deterministic layer decides what is reliable enough to show.
              Records are append-only, and a process that cannot write its
              record refuses to run.
            </p>
            <p>
              We treat every venture — including our own — as a portfolio
              company: bootstrapped, sweat-equity first, earning its way from
              idea to functioning platform. Each one is an independent brand
              with its own market and momentum, built on the studio&rsquo;s
              shared production method, and each can show you its production
              line, not just its product.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
