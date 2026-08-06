import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Spike Island Studios — London venture studio building AI businesses',
  description:
    'Spike Island Studios is a London-based venture studio and AI incubator. We create AI-powered platforms, partner with world-class experts, and build businesses designed to last.',
  metadataBase: new URL('https://spikeislandstudios.com'),
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
              <Link href="/portfolio/clarence-legal">Clarence Legal</Link>
              <Link href="/portfolio/authors-lab">Authors Lab</Link>
              <Link href="/portfolio/spike-island-productions">Productions</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
