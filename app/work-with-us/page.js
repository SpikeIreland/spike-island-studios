import EnquiryForm from '@/components/EnquiryForm';

export const metadata = {
  title: 'Work With Us — Spike Island Studios',
  description:
    'Partner with Spike Island Studios. We work with investment firms as a trusted AI vetting partner, on a retained or project basis, bringing practitioner-level insight to every evaluation.',
};

export default function WorkWithUs() {
  return (
    <>
      <section className="section">
        <div className="wrap">
          <p className="kicker">Work With Us</p>
          <h1>Partner with us.</h1>
          <p className="lede">
            We bring practitioner-level insight to the question every investor
            in AI faces: which of these opportunities is real?
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Investment firms</h2>
          <div className="prose">
            <p>
              If you are an investment group looking for a trusted AI vetting
              partner, we would welcome a conversation. We work on a retained
              or project basis — identifying, evaluating and contextualising AI
              opportunities before they reach your investment committee.
            </p>
            <p>
              Because we build non-deterministic, hybrid AI systems ourselves,
              our assessments are grounded in how these platforms are actually
              made — architecture, production discipline and commercial
              substance, not surface demos.
            </p>
          </div>
          <EnquiryForm venture="Investment partnership" showRole />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>AI companies</h2>
          <div className="prose">
            <p>
              If you are building an AI business and are seeking investment, we
              are building a pathway. Register your interest at{' '}
              <a
                href="mailto:hello@spikeisland.co?subject=AI%20company%20—%20register%20interest"
                style={{ color: 'var(--accent)' }}
              >
                hello@spikeisland.co
              </a>{' '}
              and we will be in touch when the time is right.
            </p>
            <p className="small" style={{ marginTop: 10 }}>
              This pathway opens once our first investment partnership is in
              place.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
