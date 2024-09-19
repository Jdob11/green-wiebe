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

  return (
    <footer className='fixed bottom-0 w-full z-50'>
      <div className="relative w-full">
        {pathname !== '/' && (
          <Image
            src={
              pathname === '/about' ? footerImage2 :
              pathname === '/priorities' ? footerImage1 :
              pathname === '/contact' ? footerImage3 : footerImage1
            }
            alt="Jedidiah Wiebe banner"
            className={`absolute h-96 bottom-0 ${isReversed ? 'left-0' : 'right-0'} z-10 lg:z-50`}
            width={500}
            height={384}
          />
        )}
        <div className='footer-banner fixed bottom-0 w-full h-12 bg-footer z-20 flex items-center'>
          <h3 className={`m-5 text-white ${isReversed ? 'ml-auto' : ''}`}>Jed Wiebe, Green Party Candidate | Salmon Arm - Shuswap</h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer;