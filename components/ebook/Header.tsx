import Image from 'next/image';

export const Header = () => {
  return (
    <header className='w-full py-4 px-6 bg-white'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <div className='relative w-40 h-12'>
          <Image
            src='/logo/logo-t.png'
            alt='Logo'
            fill
            priority
            className='object-contain'
          />
        </div>
      </div>
    </header>
  );
};
