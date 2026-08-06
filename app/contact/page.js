import EnquiryForm from '@/components/EnquiryForm';

export const metadata = {
  title: 'Contact — Spike Island Studios',
  description: 'Get in touch with Spike Island Studios. We are always open to conversations with investors, partners and collaborators.',
};

export default function Contact() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@spikeislandstudios.com';
  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">Contact</p>
        <h1>Start a conversation.</h1>
        <p className="lede">
          We&rsquo;re always open to conversations with investors, partners and
          collaborators. Use the form below or reach us directly at{' '}
          <a href={`mailto:${email}`} style={{ color: 'var(--accent)' }}>
            {email}
          </a>
          .
        </p>
        <p className="small" style={{ marginTop: 8 }}>
          London, United Kingdom
        </p>
        <EnquiryForm venture="" />
      </div>
    </section>
  );
}
