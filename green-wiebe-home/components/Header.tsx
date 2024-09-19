'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import BCGreensLogo from '@/public/BCGreens_logo.png';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-cover bg-center bg-navbar bg-opacity-70 z-50">
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center p-4 md:p-6">
        <div className="flex justify-between items-center w-full md:w-auto">
          <a href="https://bcgreens2024.ca/your-candidates/jed-wiebe/" target="_blank" rel="noopener noreferrer">
            <Image
              src={BCGreensLogo}
              alt="BC Greens"
              className="w-36 md:w-48"
            />
          </a>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0 w-full md:w-auto`}>
          <Link href="/" className={`text-white text-shadow-md ${pathname === '/' ? 'border-b-2' : ''}`}>Home</Link>
          <Link href="/about" className={`text-white text-shadow-md ${pathname === '/about' ? 'border-b-2' : ''}`}>About Jedidiah</Link>
          <Link href="/priorities" className={`text-white text-shadow-md ${pathname === '/priorities' ? 'border-b-2' : ''}`}>Priorities</Link>
          <Link href="/contact" className={`text-white text-shadow-md ${pathname === '/contact' ? 'border-b-2' : ''}`}>Contact</Link>
        </nav>
        <div className="flex flex-row md:flex-col lg:flex-row md:items-end mt-4 md:mt-0 w-full md:w-auto space-x-2 md:space-x-0 lg:space-x-2 md:space-y-2 lg:space-y-0">
          <a 
            href="https://www.bcgreens.ca/volunteer"
            className="flex-1 md:flex-none md:w-40 px-2 py-2 bg-button hover:bg-blue-700 text-white text-center text-shadow-md rounded-full text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Volunteer
          </a>
          <a 
            href="https://bcgreens.donordrive.com/index.cfm?fuseaction=donate.event&eventID=561#donate"
            className="flex-1 md:flex-none md:w-40 px-2 py-2 bg-button hover:bg-blue-700 text-white text-center text-shadow-md rounded-full text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donate
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header;
