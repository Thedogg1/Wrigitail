'use client';
import { type FC } from 'react';
import { ArrowDown } from 'lucide-react';
import { GetResponseForm } from './GetResponseForm';

export const HeroClient: FC = () => {
  return (
    <section className='relative px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-16'>
          {/* Previous content remains the same until the form section */}

          <div className='grid md:grid-cols-2 gap-8 max-w-4xl mx-auto'>
            <div className='bg-white rounded-xl p-8 shadow-lg'>
              {/* Left column content remains the same */}
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
        </div>
      </div>
    </section>
  );
};
