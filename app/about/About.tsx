import Image from 'next/image';
import salmonArmWharf from '@/public/Salmon-Arm-Wharf.jpg';

const About = () => {
  return (
    <div className="relative w-full min-h-screen">
      <Image
        src={salmonArmWharf}
        alt="View of the salmon arm wharf looking out towards the lake"
        className="absolute inset-0 object-cover"
        fill
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-10 mx-4 sm:mx-8 md:mx-10 pt-36 pb-80 lg:pt-32 lg:pb-0">
        <h2 className="text-2xl font-bold mb-4 text-shadow-lg text-center lg:text-right text-white">About Jed</h2>
        <div className="space-y-4 lg:space-y-6">
          <p className="text-base text-white sm:text-lg text-shadow-md text-left lg:text-right">
            Jed is a lifelong resident of the Shuswap, where he co-owns / operates an organic elderberry farm and small-scale processing business. He holds a bachelor&apos;s degree in Sociology and Social Anthropology from the University of Dalhousie. As a university student, he spent his summers in the silviculture industry, gaining first-hand knowledge of humans&apos; destructive effects on the planet. This sparked his resolve to develop strong environmental principles to live by.
          </p>
          <p className="text-base text-white sm:text-lg text-shadow-md text-left lg:text-right">
            His first endeavour in this regard was to build a business that inspired ecological sustainability by proving the economic feasibility of making truly eco-friendly and ethical guitars. 
          </p>
          <p className="text-base text-white sm:text-lg text-shadow-md text-left lg:text-right">
            Since then, Jed has devoted the last 8 years to sustainable and just farming practices. In their small business, Jed and his partner Louise measure their success by how well they can exemplify the principles of uncompromised sustainability. 
          </p>
          <p className="text-base text-white sm:text-lg text-shadow-md text-left lg:text-right lg:w-5/6 lg:ml-auto">
            Jed is dedicated to campaigning for environmental justice as an active member of Neighbours United&apos;s deep canvassing campaign to raise support for the proposed biodiversity and ecosystem health law. 
          </p>
          <p className="text-base text-white sm:text-lg text-shadow-md text-left lg:text-right lg:w-3/4 lg:ml-auto">
            Jed sees that issues in our society, ranging from poverty, racism, and climate change, are all connected. He is committed to bringing a holistic and intersectional approach to the forefront of our political discourse in BC. He is certain that together we will create a future that is not only sustainable but also just and inclusive for all. Jed is eager to work with the BC Greens and be a part of making this vision a reality. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;