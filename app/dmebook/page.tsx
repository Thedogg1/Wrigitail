// app/ebook/page.tsx
import { EbookLanding } from '@/components/ebook/EbookLanding';
import { Metadata } from 'next';
import Script from 'next/script';

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

  return (
    <>
      {/* GetResponse Analytics Script */}
      <Script
        id='getresponse-analytics'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            (function(m, o, n, t, e, r, _){
                m['__GetResponseAnalyticsObject'] = e;
                m[e] = m[e] || function() {(m[e].q = m[e].q || []).push(arguments)};
                r = o.createElement(n);
                _ = o.getElementsByTagName(n)[0];
                r.async = 1;
                r.src = t;
                r.setAttribute('crossorigin', 'use-credentials');
                _.parentNode.insertBefore(r, _);
            })(window, document, 'script', 'https://an.gr-wcon.com/script/30c4b5c8-da70-48a7-9a95-ae7396272f26/ga.js', 'GrTracking');
          `,
        }}
      />

      <EbookLanding {...ebookData} />
    </>
  );
}
