import VenturePage from '@/components/VenturePage';

export const metadata = {
  title: 'Clarence Legal — Spike Island Studios',
  description: 'AI-powered contract mediation for businesses and individuals. A Spike Island Studios venture.',
};

export default function ClarenceLegal() {
  return (
    <VenturePage
      name="Clarence Legal"
      status="Live"
      statusClass="live"
      oneLine="AI-powered contract mediation for businesses and individuals."
      facts={[
        { k: 'Status', v: 'Live' },
        { k: 'Sector', v: 'LegalTech' },
        { k: 'Legal partner', v: 'John Hayward' },
        { k: 'Structure', v: 'Three-way equal partnership' },
      ]}
      blocks={[
        {
          h: 'What it does',
          p: 'Clarence takes both sides of a contract negotiation through a structured, AI-mediated process — from first intake to an agreed, professionally drafted document — with a qualified legal partner behind the platform.',
        },
        {
          h: 'The problem it solves',
          p: 'Contract negotiation is slow, adversarial and expensive. Most businesses and individuals either overpay for routine agreements or sign without proper review. Clarence makes a rigorous negotiation affordable and fast.',
        },
        {
          h: 'The market opportunity',
          p: 'Legal services are among the largest and least digitised professional markets. Contract work is the highest-volume entry point, and AI-mediated negotiation is a category with no established leader.',
        },
        {
          h: 'The team',
          p: 'Paul and Carl (Spike Island Studios) with John Hayward, an experienced legal practitioner, as legal partner — a deliberate pairing of production discipline, narrative craft and professional accountability.',
        },
        {
          h: 'Current stage',
          p: 'Live platform with real negotiations completed, instrumented end-to-end with the studio’s production-control methods, and in active commercial development.',
        },
      ]}
    />
  );
}
