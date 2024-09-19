import React from 'react';
import Image from 'next/image';
import jedMainBg from '@/public/jed-main-bg.jpg';

const ProfilePage: React.FC = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={jedMainBg}
          alt="Jed holding elderberries at Elderberry Grove"
          className="object-cover"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: 'cover',
            objectPosition: '83% 20%', // Adjust these percentages as needed
          }}
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 w-full h-full overflow-y-auto">
        <main className="min-h-full flex flex-col justify-end pt-80 pb-32 sm:pb-16 md:pb-20 lg:pb-24">
          <div className="p-4 sm:p-8 md:p-12 lg:p-20">
            <h2 className="text-xl text-white sm:text-2xl font-bold mb-4 text-shadow-lg">Champion for a Greener tomorrow</h2>
            <p className="text-lg text-white sm:text-xl mb-6 text-shadow-md">Building a sustainable future, together.</p>
            <p className="text-base text-white sm:text-lg text-shadow-md w-full sm:w-3/4 md:w-full lg:w-1/2">
              I am excited to announce my candidacy as the BC Greens candidate for Salmon Arm-Shuswap. I&apos;m stepping up because I believe we can create a sustainable future. Having witnessed the devastating effects of climate change, I am committed to advocating for our community&apos;s needs in the provincial legislature. By addressing interconnected issues like poverty, climate change, and the housing crisis, I aim to foster compassionate communities that protect the rights and needs of future generations. 
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;