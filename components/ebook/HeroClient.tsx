'use client';

import { type FC, useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { GetResponseForm } from './GetResponseForm';

export const HeroClient: FC = () => {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://app.getresponse.com/view_webform_v2.js?u=example&webforms_id=e067d61d-727f-4690-bb2d-507b24ed6184';
    script.async = true;

    if (formContainerRef.current) {
      const formElement = document.createElement('getresponse-form');
      formElement.setAttribute(
        'form-id',
        'e067d61d-727f-4690-bb2d-507b24ed6184'
      );
      formElement.setAttribute('e', '1');
      formContainerRef.current.appendChild(formElement);
    }

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (formContainerRef.current?.firstChild) {
        formContainerRef.current.removeChild(
          formContainerRef.current.firstChild
        );
      }
    };
  }, []);

  return (
    <section className='relative px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          {/* Attention */}
          <h2 className='text-xl md:text-2xl text-blue-600 font-semibold mb-6'>
            Are you tired of seeing other financial advisors dominate digital
            channels while your practice struggles to gain traction online?
          </h2>

          {/* Interest */}
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-8'>
            Discover The Digital Marketing Blueprint That Gets Financial
            Advisors 2-4 New Clients Every Month
          </h1>

          <p className='text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12'>
            The digital marketing landscape for financial advisors has changed
            dramatically. In 2025, those who master these channels will acquire
            high-value clients predictably and systematically. This
            comprehensive implementation guide reveals exactly how they&apos;re
            doing it.
          </p>

          {/* Desire & Action */}
          <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            <div className='bg-white rounded-xl p-8 shadow-lg'>
              <h3 className='text-xl font-bold text-gray-900 mb-6'>
                Inside, you&apos;ll discover:
              </h3>
              <ul className='text-left text-gray-600 space-y-4'>
                <li className='flex items-start'>
                  <span className='text-blue-600 mr-2'>•</span>
                  The exact ROI timelines for each channel (some producing
                  results in just 2-3 weeks)
                </li>
                <li className='flex items-start'>
                  <span className='text-blue-600 mr-2'>•</span>
                  Which channel delivers the highest conversion rates (30-40%)
                  for financial advisors
                </li>
                <li className='flex items-start'>
                  <span className='text-blue-600 mr-2'>•</span>
                  Step-by-step 30-day launch plans for predictable client
                  acquisition
                </li>
                <li className='flex items-start'>
                  <span className='text-blue-600 mr-2'>•</span>
                  How to optimize your campaigns for the lowest cost per lead
                  ($30-50)
                </li>
                <li className='flex items-start'>
                  <span className='text-blue-600 mr-2'>•</span>
                  Real performance metrics from successful advisor campaigns
                </li>
              </ul>
            </div>

            <div className='bg-white rounded-xl p-8 shadow-lg'>
              <h3 className='text-xl font-bold text-gray-900 mb-6'>
                Get Your Free Digital Marketing Blueprint
              </h3>
              <GetResponseForm formId='e067d61d-727f-4690-bb2d-507b24ed6184' />

              <p className='text-sm text-gray-500 mt-6'>
                Download now and book your free strategy call. In just 30
                minutes, you&apos;ll map out your complete digital marketing
                plan for 2025.
              </p>
            </div>
          </div>

          <div className='flex justify-center mt-12'>
            <ArrowDown className='h-8 w-8 text-blue-600 animate-bounce' />
          </div>
          <GetResponseForm formId='e067d61d-727f-4690-bb2d-507b24ed6184' />
        </div>
      </div>
    </section>
  );
};
