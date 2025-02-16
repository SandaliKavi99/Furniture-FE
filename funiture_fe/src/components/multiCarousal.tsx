import Image from 'next/image'
import React from 'react';

import Carousel from "react-multi-carousel";

import "react-multi-carousel/lib/styles.css";

interface CarouselProps{
  data: CarouselItem[];
}

const MultiCarousal: React.FC<CarouselProps> = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Carousel
      responsive={responsive}
      autoPlay={true}
      infinite={true}
      showDots={true}
      autoPlaySpeed={5000}
    >
      {data.map((item, index) => (
        <div key={index}>
          <Image
            src={item.src}
            alt={item.alt}
            height={650}
            width={550}
          />
        </div>
      ))}
    </Carousel>
  );
};
export default MultiCarousal;