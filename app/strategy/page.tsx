'use client';

import Calendly from './calendly';
import ShowcaseNavbar from '@/components/showcase-navbar';
import { PiCheckCircle } from 'react-icons/pi';
import { motion } from 'framer-motion';

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Meeting = () => {
  return (
    <div className='flex flex-col w-full overflow-clip inset-0 -z-10 bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'>
      <ShowcaseNavbar />
      <div className='md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto'>
        <div className='md:w-2/5'>
          <h1 className='text-4xl font-semibold pt-10'>
            Your Digital Marketing Implementation Guide Bonus Offer
          </h1>
          <p className='text-lg text-gray-500 py-4'>
            Thank you for downloading our Financial Advisor&apos;s Digital
            Marketing Guide. You now have access to proven strategies that have
            helped hundreds of advisors transform their digital presence. Before
            you dive in, I wanted to extend a special invitation.
          </p>
          <p className='text-gray-500 mb-6'>
            Since you&apos;re investing time in devising your marketing plan,
            I&apos;d like to offer you a complimentary 30-minute strategy
            session where we can map out a customized action plan for your
            practice.
          </p>

          {[
            {
              title: 'Expert Strategy Review',
              description:
                'Get personalized feedback on your marketing strategies and identify key improvement areas.',
            },
            {
              title: 'Customized Action Plan',
              description:
                'Develop a focused plan aligned with your goals, client demographics, and budget.',
            },
            {
              title: 'Practical Implementation',
              description:
                'Transform insights into actionable steps tailored specifically to your practice.',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={checkItemVariants}
              initial='hidden'
              animate='visible'
              transition={{ delay: index * 1.8 }}
              className='flex gap-x-4 py-4'
            >
              <PiCheckCircle className='rounded-md text-[#3d80d7] text-2xl flex-shrink-0' />
              <ul>
                <h3 className='text-lg font-bold text-gray-700'>
                  {item.title}
                </h3>
                <div className='text-gray-400'>{item.description}</div>
              </ul>
            </motion.div>
          ))}

          <p className='text-gray-500 mt-4'>
            I recommend booking the call about a week out, giving you time to
            review the guide and identify which strategies most interest you.
            But the timing is entirely up to you—I&apos;m here to help whenever
            works best for your schedule.
          </p>
          <p className='text-gray-500 mt-4'>
            Ready to turn these insights into action? Book a call now to
            schedule your free strategy session. During our call, we&apos;ll cut
            through the noise and create a focused plan that aligns with your
            specific goals—no sales pressure, just practical guidance tailored
            to your practice.
          </p>
        </div>

        <div className='md:w-1/2'>
          <Calendly />
        </div>
      </div>
    </div>
  );
};

export default Meeting;
