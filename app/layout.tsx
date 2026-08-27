import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://hmg.khaitringuyen.com'),
  title: 'HMG | Brewing Ingredients & Technical Partnership',
  description: 'HMG connects brewers in Vietnam with trusted hop, malt and yeast partners — supported by local technical expertise.',
  openGraph: {
    title: 'HMG | Ingredients for brewing confidence',
    description: 'Hop, malt and yeast solutions with local technical support in Vietnam.',
    url: 'https://hmg.khaitringuyen.com',
    siteName: 'HMG',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'HMG — Ingredients for brewing confidence' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HMG | Ingredients for brewing confidence',
    description: 'Hop, malt and yeast solutions with local technical support in Vietnam.',
    images: ['/og.png'],
  },
  icons: { icon: '/assets/hmg-logo-blue.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
