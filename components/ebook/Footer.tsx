// components/ebook/Footer.tsx
import { type FC } from 'react';
import { LinkedinIcon, TwitterIcon, FacebookIcon } from 'lucide-react';

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-gray-300 py-12'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Main Footer Content */}
        <div className='grid md:grid-cols-3 gap-8 mb-8'>
          {/* Company Info Column */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-4'>
              Financial Insights
            </h3>
            <p className='text-sm text-gray-400 mb-4'>
              Empowering financial advisors with cutting-edge strategies and
              insights.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-4'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li>
                <a
                  href='/privacy'
                  className='text-sm text-gray-400 hover:text-white transition-colors'
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href='/terms'
                  className='text-sm text-gray-400 hover:text-white transition-colors'
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href='/contact'
                  className='text-sm text-gray-400 hover:text-white transition-colors'
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Disclaimer Column */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-4'>
              Legal Disclaimer
            </h3>
            <p className='text-sm text-gray-400'>
              This eBook is for informational purposes only and does not
              constitute financial advice. Always consult with qualified
              professionals regarding your specific situation.
            </p>
          </div>
        </div>

        {/* Social and Copyright */}
        <div className='border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center'>
          {/* Copyright */}
          <div className='text-sm text-gray-500 mb-4 md:mb-0'>
            © {currentYear} Financial Insights. All Rights Reserved.
          </div>

          {/* Social Icons */}
          <div className='flex space-x-4'>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-white transition-colors'
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-white transition-colors'
            >
              <TwitterIcon size={20} />
            </a>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-gray-400 hover:text-white transition-colors'
            >
              <FacebookIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
