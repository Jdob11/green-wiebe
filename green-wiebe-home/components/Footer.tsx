'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

import footerImage1 from '@/public/jed-wiebe-footer-image-1.png';
import footerImage2 from '@/public/jed-wiebe-footer-image-2.png';
import footerImage3 from '@/public/jed-wiebe-footer-image-3.png';

const Footer: React.FC = () => {
  const pathname = usePathname();

  const isReversed = pathname === '/about' || pathname === '/contact';

  const getFooterImage = () => {
    switch (pathname) {
      case '/about':
        return footerImage2;
      case '/priorities':
        return footerImage1;
      case '/contact':
        return footerImage3;
      default:
        return footerImage1;
    }
  };

  return (
    <footer className='fixed bottom-0 w-full z-50'>
      <div className="relative w-full">
        {pathname !== '/' && (
          <div className={`absolute bottom-0 ${isReversed ? 'left-0' : 'right-0'} z-10 lg:z-50 w-[410px] h-[384px]`}>
            <Image
              src={getFooterImage()}
              alt="Jedidiah Wiebe banner"
              fill
              sizes="(max-width: 768px) 100vw, 410px"
              style={{ objectFit: 'contain' }}
              priority={true}
            />
          </div>
        )}
        <div className='footer-banner fixed bottom-0 w-full h-12 bg-footer z-20 flex items-center'>
          <h3 className={`m-5 text-white ${isReversed ? 'ml-auto' : ''}`}>Jed Wiebe, Green Party Candidate | Salmon Arm - Shuswap</h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer;