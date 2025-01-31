// app/ebook/page.tsx
import { EbookLanding } from '@/components/ebook/EbookLanding';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free eBook for Financial Advisors | Digital Growth Strategies',
  description:
    'Download our comprehensive guide to growing your financial advisory practice in the digital age.',
  openGraph: {
    title: 'Free eBook for Financial Advisors | Digital Growth Strategies',
    description:
      'Download our comprehensive guide to growing your financial advisory practice in the digital age.',
    type: 'website',
  },
  keywords: [
    'financial advisor',
    'ebook',
    'digital marketing',
    'practice growth',
    'client acquisition',
  ],
};

export default function EbookPage() {
  const ebookData = {
    title: "The Modern Financial Advisor's Guide to Digital Growth",
    description:
      'Learn proven strategies to transform your practice and attract high-value clients',
    benefits: [
      {
        title: 'Client Acquisition Mastery',
        description:
          'Discover cutting-edge digital channels to consistently attract high-net-worth clients',
      },
      {
        title: 'Practice Optimization',
        description:
          'Implement scalable systems that enhance efficiency and client experience',
      },
      {
        title: 'Compliance and Innovation',
        description:
          'Navigate digital marketing while maintaining regulatory compliance and professional integrity',
      },
    ],
  };

  return <EbookLanding {...ebookData} />;
}
