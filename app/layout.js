import './globals.css';
import '@fontsource-variable/playfair-display';
import '@fontsource-variable/playfair-display/wght-italic.css';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Spike Island Studios — AI vetting partner for investment firms',
  description:
    'Spike Island Studios is a London-based AI venture studio and vetting intermediary. We help investment firms identify, evaluate and de-risk AI opportunities — because we build AI platforms ourselves.',
  metadataBase: new URL('https://spikeisland.co'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon-180.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Spike Island Studios — AI vetting partner for investment firms',
    description:
      'We help investment firms identify, evaluate and de-risk AI opportunities — because we build AI platforms ourselves.',
    url: 'https://spikeisland.co',
    siteName: 'Spike Island Studios',
    type: 'website',
    images: [{ url: '/og-card.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-card.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="grain-overlay" aria-hidden="true" />
        <header className="site-header">
          <div className="wrap">
            <Link href="/" className="wordmark">
              Spike Island <span>Studios</span>
            </Link>
            <nav className="main" aria-label="Main">
              <Link href="/about">About</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/work-with-us">Work With Us</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="wrap">
            <div>
              <div className="wordmark">
                Spike Island <span>Studios</span>
              </div>
              <p className="small" style={{ marginTop: 6 }}>
                London, United Kingdom
              </p>
            </div>
            <nav aria-label="Footer">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/work-with-us">Work With Us</Link>
              <Link href="/portfolio/clarence-legal">Clarence Legal</Link>
              <Link href="/portfolio/authors-lab">Authors Lab</Link>
              <Link href="/portfolio/spike-island-productions">Productions</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
