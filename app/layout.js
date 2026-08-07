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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
