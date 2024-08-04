import { Theme } from "@radix-ui/themes";

import Navigation from "@/components/common/navBar";
import MultiCarousal from "@/components/multiCarousal";

import '@radix-ui/themes/styles.css';
import '../styles/Home.module.css';

export default function Home() {
  const carousel: CarouselItem[] = [
    { src: "/images/carousal_item_1.png", alt: "Image 1" },
    { src: "/images/carousal_item_2.png", alt: "Image 2" },
    { src: "/images/carousal_item_3.png", alt: "Image 3" },
    { src: "/images/carousal_item_4.png", alt: "Image 4" }
  ]
  return (
    <>
      <Theme>
        <Navigation></Navigation>
        <MultiCarousal data={carousel}></MultiCarousal>
      </Theme>
    </>
  );
}
