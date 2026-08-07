// Investor / partner enquiry route.
// Sends via Resend when RESEND_API_KEY + CONTACT_TO_EMAIL are configured;
// otherwise fails honestly (no silent receipt).
export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const { name, email, org, role, message, venture } = body || {};
  if (!name || !email || !message) {
    return Response.json({ ok: false, error: 'Please complete name, email and message.' }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || 'Spike Island Studios <onboarding@resend.dev>';

  if (!key || !to) {
    return Response.json(
      { ok: false, error: 'Enquiries are not yet configured — please email us directly.' },
      { status: 503 }
    );
  }

  const subject = venture
    ? `Enquiry — ${venture}`
    : 'Website enquiry — Spike Island Studios';

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    org ? `Organisation / fund: ${org}` : null,
    role ? `Role: ${role}` : null,
    venture ? `Regarding: ${venture}` : null,
    '',
    message,
  ]
    .filter(Boolean)
    .join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'content-type': 'application/json' },
    body: JSON.stringify({ from, to: [to], reply_to: email, subject, text }),
  });

  if (!res.ok) {
    return Response.json(
      { ok: false, error: 'Could not send just now — please email us directly.' },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
