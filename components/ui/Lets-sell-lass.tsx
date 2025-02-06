import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import LaasDownload from './DownloadLass';

function LetsSellLaas() {
  return (
    <section
      className='
     my-5 md:py-20  md:mx-auto
     rounded-[45px] p-[50px] md:p-[60px] relative bg-sky-500/50'
    >
      <div className='md:pr-[22rem] '>
        <div className='absolute right-8 hidden md:block'>
          <Image
            src='/images/laas2.jpg'
            alt='financial advisor leads'
            width={300}
            height={300}
          />
        </div>
        <h3 className='text-3xl font-extrabold dark:text-white'>
          Download Our Linkedin As A Service Guide to Uncover:
        </h3>
        <ul className='max-w-md space-y-2 text-black-500 list-disc  dark:text-black-400'>
          <li>
            Step by step tactics to book more calls with your ideal clients
          </li>
          <li>
            Proven outreach scripts that build trust and spark meaningful
            conversations
          </li>
          <li>
            Actionable strategies to position yourself as the go-to financial
            advisor in your niche
          </li>
        </ul>
        <br />
        <p>
          This guide is tailored specifically for financial advisors looking
          book calls with high net worth individuals. Dont miss this opportunity
          to learn the secrets that top-performing advisors are using today!
        </p>

        <p className='my-10 text-xl'>
          Click the button below to download your free guide and start
          generating leads with confidence!
        </p>

        <LaasDownload />
      </div>
    </section>
  );
}

export default LetsSellLaas;
