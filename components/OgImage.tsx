import Image from 'next/image';
import jedOgImage from '@/public/jed-og-image.jpg';

const OgImage = () => (
  <Image
    src={jedOgImage}
    alt="Jed Wiebe - BC Greens Candidate for Salmon Arm - Shuswap"
    width={1200}
    height={630}
    priority
  />
);

export default OgImage;