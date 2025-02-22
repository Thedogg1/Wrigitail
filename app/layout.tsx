import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { m } from 'framer-motion';

const font = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wrigitail | Marketing For Financial Advisors',
  description:
    'Digital marketing and lead generation services for financial advisors',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
