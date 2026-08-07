import VenturePage from '@/components/VenturePage';

export const metadata = {
  title: 'Spike Island Productions — Spike Island Studios',
  description: 'AI-assisted film and television production. A Spike Island Studios venture.',
};

export default function Productions() {
  return (
    <VenturePage
      name="Spike Island Productions"
      status="In Development"
      statusClass="dev"
      oneLine="AI-assisted film and television production."
      facts={[
        { k: 'Status', v: 'In Development' },
        { k: 'Sector', v: 'Film & TV' },
        { k: 'Structure', v: 'Ltd company owned by Spike Island Studios' },
        { k: 'Website', v: 'spikeisland.tv' },
      ]}
      blocks={[
        {
          h: 'What it does',
          p: 'Spike Island Productions develops and produces film and television with AI woven through the craft — from development and script work to production planning and post — led by two decades of experience in the screen industries.',
        },
        {
          h: 'The vision',
          p: 'AI as a creative and production tool, not a replacement for creative judgement: faster development cycles, richer pre-visualisation, leaner production — with writers, directors and producers firmly in charge of the work.',
        },
        {
          h: 'Current projects',
          p: 'Active development slate and testing work applying the studio’s AI production methods to real projects. Full production company detail lives at spikeisland.tv.',
        },
      ]}
      externalLink={{ href: 'https://spikeisland.tv', label: 'Visit spikeisland.tv →' }}
    />
  );
}
