import React from 'react';
import Image from 'next/image';
import jedMainBg from '@/public/jed-main-bg.jpg';

const ProfilePage: React.FC = () => {
  return (
    <div className="relative">
      <main className="relative w-screen min-h-screen pt-96 sm:pt-32 md:pt-[700px] lg:pt-96 bg-teal-700 text-white text-center">
        <div className="absolute inset-0">
          <Image
            src={jedMainBg}
            alt="Jed holding elderberries at Elderberry Grove"
            className="object-cover object-[81%] sm:object-right md:object-[85%] lg:object-center"
            fill
            priority
            sizes="100vw"
          />
        </div>
        
        <div className="relative text-left mx-4 sm:mx-8 md:mx-12 lg:mx-20 z-10">
          <h2 className="text-xl text-white sm:text-2xl font-bold mb-4 text-shadow-lg">Champion for a Greener tomorrow</h2>
          <p className="text-lg text-white sm:text-xl mb-6 text-shadow-md">Building a sustainable future, together.</p>
          <p className="text-base text-white sm:text-lg text-shadow-md w-full sm:w-3/4 md:w-full lg:w-1/2">
            I am excited to announce my candidacy as the BC Greens candidate for Salmon Arm-Shuswap. I&apos;m stepping up because I believe we can create a sustainable future. Having witnessed the devastating effects of climate change, I am committed to advocating for our community&apos;s needs in the provincial legislature. By addressing interconnected issues like poverty, climate change, and the housing crisis, I aim to foster compassionate communities that protect the rights and needs of future generations. 
          </p>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;