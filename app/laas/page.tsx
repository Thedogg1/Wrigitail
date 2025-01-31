import Footer from '@/components/footer';
import WordFadeIn from '@/components/magicui/word-fade-in';

import LetsSellLass from '@/components/ui/Lets-sell-lass';

const Laas = () => {
  return (
    <div
      className='
        overflow-clip 
 inset-0 
 -z-10 h-full w-full bg-[#fafafa]
  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
   bg-[size:14px_24px]'
    >
      <section className='md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto'>
        <div className='flex items-center justify-center relative'>
          <WordFadeIn
            className='text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center   z-20  '
            words='Financial Advisors: How To Speak To An Additional 3-5 High Net Worth Prospects Every Week With $0 In Paid Ads'
          />
        </div>
        <p className='md:text-center text-xl md:text-2xl my-6   md:w-4/5 mx-auto text-gray-500'>
          Discover how to generate 3-5 high-quality calls per week with warm
          leads – all without paid ads or complicated strategies.
        </p>

        <LetsSellLass />
      </section>

      <Footer />
    </div>
  );
};
export default Laas;
