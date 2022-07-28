import React from 'react';
import { CarouselContainer } from './styles';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReactLogo from '../../assets/imgs/ReactLogo.png';
import Redux from '../../assets/imgs/redux.png';
import Node from '../../assets/imgs/nodejs.png';
import MySQL from '../../assets/imgs/mysql.png';
import TS from '../../assets/imgs/typescript.png';
import HTML from '../../assets/imgs/html.png';
import Mongo from '../../assets/imgs/mongodb.png';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};

const data = [ReactLogo, Redux, Node, MySQL, TS, HTML, Mongo];

export default function Carrousel() {
  return (
    <CarouselContainer className="container-desktop">
      <h1>Technologies</h1>
      <Carousel
        responsive={responsive}
        ssr
        // autoPlay
        infinite
        autoPlaySpeed={3000}
        customTransition="all 1s"
        containerClass="first-carousel-container container"
        renderButtonGroupOutside={true}
        arrows={true}
        centerMode={true}
      >
        {data.map((img) => {
          return <img src={img} alt={img} />;
        })}
      </Carousel>
    </CarouselContainer>
  );
}
