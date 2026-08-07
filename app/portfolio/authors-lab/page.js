import VenturePage from '@/components/VenturePage';

export const metadata = {
  title: 'Authors Lab — Spike Island Studios',
  description: 'AI manuscript editing platform for writers and publishers. A Spike Island Studios venture.',
};

export default function AuthorsLab() {
  return (
    <VenturePage
      name="Authors Lab"
      status="In Beta"
      statusClass="beta"
      oneLine="AI manuscript editing platform for writers and publishers."
      facts={[
        { k: 'Status', v: 'In Beta — live authors and manuscripts' },
        { k: 'Sector', v: 'PublishingTech' },
        { k: 'Structure', v: 'Ltd company owned by Spike Island Studios' },
      ]}
      blocks={[
        {
          h: 'What it does',
          p: 'Authors Lab takes a writer from idea or raw manuscript to a published, marketed book: AI editors for developmental, line and copy editing, a ghostwriting studio, cover and interior design, publishing preparation and marketing — with the author approving every chapter.',
        },
        {
          h: 'The problem it solves',
          p: 'Publishing is slow and expensive. Professional editing alone costs thousands per book and takes months; most writers never get expert feedback at all. Authors Lab delivers professional-grade editorial work in days, at a fraction of the cost, for every project a writer has in flight.',
        },
        {
          h: 'The market opportunity',
          p: 'Self-publishing volumes now dwarf traditional output, AI writing tools are the fastest-growing segment of the category, and no platform yet serves the full journey from manuscript to market — or the small imprints and editorial teams who manage many books at once.',
        },
        {
          h: 'Current stage',
          p: 'In beta with live authors, real manuscripts and hundreds of edited chapters. A subscription model and publisher-facing capabilities are in active development ahead of commercial launch.',
        },
      ]}
    />
  );
}
