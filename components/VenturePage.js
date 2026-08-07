import EnquiryForm from './EnquiryForm';

export default function VenturePage({
  kicker = 'Portfolio',
  name,
  status,
  statusClass,
  oneLine,
  facts = [],
  blocks = [],
  externalLink,
}) {
  return (
    <>
      <section className="section hero-lit">
        <div className="wrap">
          <p className="kicker">{kicker}</p>
          <span className={`badge ${statusClass}`}>{status}</span>
          <h1 style={{ marginTop: 10 }}>{name}</h1>
          <p className="lede">{oneLine}</p>
          {facts.length > 0 && (
            <div className="facts">
              {facts.map((f) => (
                <div className="fact" key={f.k}>
                  <div className="k">{f.k}</div>
                  <div className="v">{f.v}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          {blocks.map((b) => (
            <div className="vblock" key={b.h} style={{ marginTop: b === blocks[0] ? 0 : 34 }}>
              <h3>{b.h}</h3>
              <p>{b.p}</p>
            </div>
          ))}
          {externalLink && (
            <p style={{ marginTop: 30 }}>
              <a className="btn" href={externalLink.href} target="_blank" rel="noopener noreferrer">
                {externalLink.label}
              </a>
            </p>
          )}
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2>Investor enquiry</h2>
          <p className="form-note">
            Interested in {name}? Tell us who you are — enquiries go directly to
            the founders.
          </p>
          <EnquiryForm venture={name} />
        </div>
      </section>
    </>
  );
}
