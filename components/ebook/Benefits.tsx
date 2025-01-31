// components/ebook/Benefits.tsx
import { type FC } from 'react';
import { Trophy, BookOpen, Shield } from 'lucide-react';
import type { BenefitsSectionProps } from './types';

const BENEFIT_ICONS = {
  0: Trophy,
  1: BookOpen,
  2: Shield,
} as const;

export const Benefits: FC<BenefitsSectionProps> = ({ benefits }) => {
  return (
    <section id='benefits-section' className='py-16 md:py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16'>
          What Youll Learn
        </h2>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
          {benefits.map((benefit, index) => {
            const Icon =
              BENEFIT_ICONS[index as keyof typeof BENEFIT_ICONS] || Trophy;

            return (
              <div
                key={benefit.title}
                className='flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 hover:shadow-lg transition duration-200'
              >
                <Icon className='h-12 w-12 text-blue-600 mb-4' />
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>
                  {benefit.title}
                </h3>
                <p className='text-gray-600'>{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
