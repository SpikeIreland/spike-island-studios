export const metadata = {
  title: 'About — Spike Island Studios',
  description:
    'The founders and working philosophy of Spike Island Studios, a London-based venture studio building AI-powered businesses.',
};

export default function About() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <p className="kicker">About</p>
          <h1 style={{ maxWidth: '22ch' }}>Experienced hands, long views.</h1>
          <p className="lede">
            Spike Island Studios exists because building good companies with AI
            takes more than good prompts. It takes judgement about what is worth
            making, discipline in how it is made, and patience about how value
            compounds.
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
                Twenty-plus years across film, television and music, with an
                earlier career in heavy industry — control systems, production
                lines, plants that had to run every day. Paul brings deep
                industry relationships, production expertise, and an
                engineer&rsquo;s conviction that quality is designed in, not
                inspected in afterwards. He owns the studio&rsquo;s build
                discipline and its ventures&rsquo; production systems.
              </p>
            </div>
            <div className="founder">
              <h3>Carl</h3>
              <p className="role">Co-founder</p>
              <p className="prose">
                Published author and scriptwriter. Carl brings narrative
                intelligence and creative rigour to every platform the studio
                builds — the judgement about voice, audience and story that
                determines whether a product is merely functional or genuinely
                wanted. He keeps the ventures honest about the people they
                serve.
              </p>
            </div>
          </div>

          <blockquote className="pull">
            We started Spike Island Studios to prove a simple idea: AI rewards
            the disciplines that built the modern world — not the shortcuts
            that promise to replace them.
            <span className="who">— Paul &amp; Carl</span>
          </blockquote>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>How we work</h2>
          <div className="prose">
            <p>
              We identify a market opportunity, build an AI platform to serve
              it, find the best person in that industry to lead it, and back
              them. We take a long view.
            </p>
            <p>
              Our ventures are engineered on the studio&rsquo;s own
              stochastic-industrial production method: AI does the prolific
              work, while instrumentation, quality gates and measured evidence —
              the disciplines of manufacturing — decide what ships. Every
              platform we build can show you its production line, not just its
              product.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
