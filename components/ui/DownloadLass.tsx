'use client';

import { useRouter } from 'next/navigation';

const DownloadLaas = () => {
  const router = useRouter();

  const handleDownload = async () => {
    const link = document.createElement('a');
    link.href = '/downloads/laas.pdf'; // Update with your actual file path
    link.download = 'laas.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Wait for a short delay before redirecting
    setTimeout(() => {
      router.push('/thankyou');
    }, 2000);
  };

  const handlethankyou = async () => {
    const link = document.createElement('a');
    link.href = '/thankyou'; // Update with your actual file path

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='flex'>
      <button
        className='py-3 
  px-6
  mr-5
  text-lg 
  hover:bg-[#abcbff]
  rounded-[6px]
  border-2
  border-black
  text-white
  bg-[#121212]
  transition
  duration-200
     hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]
      dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] '
      >
        Download Your Free Guide
      </button>
      <button
        onClick={handlethankyou}
        className='py-3 
  px-6
  text-lg 
  hover:bg-[#abcbff]
  rounded-[6px]
  border-2
  border-black
  text-white
  bg-[#121212]
  transition
  duration-200
     hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]
      dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] '
      >
        No thanks
      </button>
    </div>
  );
};

export default DownloadLaas;
