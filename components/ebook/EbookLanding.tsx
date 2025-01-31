// components/ebook/EbookLanding.tsx
import { type FC } from 'react';
import { Header } from './Header';
import type { EbookLandingProps } from './types';
import { HeroClient } from './HeroClient';
import { Benefits } from './Benefits';
import { Footer } from './Footer';

export const EbookLanding: FC<EbookLandingProps> = ({
  title,
  description,
  benefits,
}) => {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white'>
      <Header />
      <HeroClient />
      <Benefits benefits={benefits} />
      <Footer />
    </div>
  );
};
