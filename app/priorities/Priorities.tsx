import Image from 'next/image';
import enderbyCliffs from '@/public/Enderby-Cliffs.jpeg';

const Priorities = () => {
  return (
    <div className="relative w-full pt-36 pb-96 lg:pb-0 px-6 md:px-12 lg:px-24 min-h-screen">
      <Image
        src={enderbyCliffs}
        alt="View of Enderby from the cliffs"
        className="absolute inset-0 object-cover"
        fill
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative text-white text-shadow-lg z-10">
        <h2 className="text-3xl font-bold mb-6">Jeds Priorities</h2>
        <ul className="list-disc list-inside space-y-4 text-lg">
        <li>
          <strong>Take bold action on climate change</strong> by ending oil and gas subsidies, protecting old-growth forests, and investing in clean energy projects that create green jobs and safeguard our environment for future generations.
        </li>
        <li>
          <strong>Build a sustainable economy </strong>by creating affordable housing options and supporting local businesses, ensuring that families, seniors, and young people can thrive while addressing the rising costs of living.
        </li>
        <li>
          <strong>Protect our forests, watersheds, and wildlife</strong> through community-led conservation efforts and by championing the proposed Biodiversity and Ecosystem Health Law.
        </li>
        <li className="lg:w-5/6">
          <strong>Strengthen our democracy</strong> by implementing proportional representation, ending strategic voting, and ensuring people can vote for the candidates and ideas they truly believe in.
        </li>
        <li className="lg:w-4/5">
          <strong>Increase healthcare access</strong> by establishing Community Health Centres and Team-Based care, so everyone in our community can get the care they need, close to home.
        </li>
        <li className="lg:w-4/5">
          <strong>Create a simple, progressive, and fair tax system</strong> that ensures the wealthy pay their fair share while reducing the tax burden on working families and small businesses.
        </li>
        </ul>
      </div>
    </div>
  );
};

export default Priorities;
