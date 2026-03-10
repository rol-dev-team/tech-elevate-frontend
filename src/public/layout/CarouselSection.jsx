import Networking from '@/assets/networking.png';
import WebDev from '@/assets/web-development.png';
import Graphics from '@/assets/graphics-design.png';
import Motion from '@/assets/motion-design.png';
import AI from '@/assets/ai.png';
import Modelling from '@/assets/3d-modelling.png';

import PartnerCarousel from './PartnerCarousel';

const CarouselSection = () => {
  const categories = [
    { title: "Networking", icon: Networking },
    { title: "Web Development", icon: WebDev },
    { title: "Graphic Design", icon: Graphics },
    { title: "Motion Design", icon: Motion },
    { title: "Artificial Intelligence", icon: AI },
    { title: "3D Modeling", icon: Modelling },
    // Add more to enable looping
  ];

  return <PartnerCarousel categories={categories} />;
};
export default CarouselSection;