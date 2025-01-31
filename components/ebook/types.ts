// components/ebook/types.ts

// Interface for individual benefit items
export interface Benefit {
  title: string;
  description: string;
}

// Props interface for the main EbookLanding component
export interface EbookLandingProps {
  title: string;
  description: string;
  benefits: Benefit[];
}

// Props interface for the Hero section
export interface HeroProps {
  title: string;
  description: string;
}

// Props interface for the Benefits section
export interface BenefitsSectionProps {
  benefits: Benefit[];
}
