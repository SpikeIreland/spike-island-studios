import EnquiryForm from '@/components/EnquiryForm';

export const metadata = {
  title: 'Work With Us — Spike Island Studios',
  description:
    'Partner with Spike Island Studios: commission the studio, partner with a venture, or talk to us about investment.',
};

export default function WorkWithUs() {
  return (
    <>
      <section className="section hero-lit">
        <div className="wrap">
          <p className="kicker">Work With Us</p>
          <h1>Partner with us.</h1>
          <p className="lede">
            We build industrial-grade AI platforms — and we work with the
            publishers, firms and partners who want that discipline applied to
            their world.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Partners and clients</h2>
          <div className="prose">
            <p>
              Our ventures are built with the industries they serve — a legal
              platform with a qualified legal partner behind it, an editorial
              platform shaped with working publishers. If your organisation
              wants to work with one of our platforms, or wants the
              studio&rsquo;s engineering discipline applied to a problem in
              your domain, we would welcome the conversation.
            </p>
          </div>
          <EnquiryForm venture="Partnership" showRole />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Investors</h2>
          <div className="prose">
            <p>
              We build our ventures bootstrapped and sweat-equity first, and we
              engage selectively with investors who understand what
              industrial-grade AI is worth. Because we build these systems
              ourselves, we also bring practitioner-level insight to evaluating
              AI opportunities — a conversation we are happy to have on a
              retained or project basis.
            </p>
            <p className="small" style={{ marginTop: 10 }}>
              Enquiries: use the form above, or{' '}
              <a
                href="mailto:hello@spikeisland.co?subject=Investor%20enquiry"
                style={{ color: 'var(--accent)' }}
              >
                hello@spikeisland.co
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
