'use client';

import { useState } from 'react';

export default function EnquiryForm({ venture }) {
  const [status, setStatus] = useState(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setBusy(true);
    setStatus(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.ok) {
        setStatus({ kind: 'ok', msg: 'Thank you — your enquiry has been sent. We read everything and reply personally.' });
        form.reset();
      } else {
        setStatus({ kind: 'err', msg: json.error || 'Something went wrong. Please email us directly.' });
      }
    } catch {
      setStatus({ kind: 'err', msg: 'Something went wrong. Please email us directly.' });
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="enquiry" onSubmit={onSubmit}>
      <input type="hidden" name="venture" value={venture} />
      <div>
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" required autoComplete="name" />
      </div>
      <div>
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" required autoComplete="email" />
      </div>
      <div>
        <label htmlFor="org">Organisation / fund (optional)</label>
        <input id="org" name="org" autoComplete="organization" />
      </div>
      <div>
        <label htmlFor="message">Message / nature of interest</label>
        <textarea id="message" name="message" required />
      </div>
      <div className="cta-row" style={{ marginTop: 4 }}>
        <button className="btn primary" type="submit" disabled={busy}>
          {busy ? 'Sending…' : 'Send enquiry'}
        </button>
      </div>
      {status && <p className={`form-status ${status.kind}`}>{status.msg}</p>}
    </form>
  );
}
