// The carousel section is modified from https://github.com/leandrowd/react-responsive-carousel?tab=readme-ov-file
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselSlide from "./CarouselSlide";

export default function CarouselBanner({ moviesData }) {
  // console.log("Pop1: ", moviesData);
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
      transitionTime={2500}
      interval={8000}
    >
      <CarouselSlide movieData={moviesData[0]} />
      <CarouselSlide movieData={moviesData[1]} />
      <CarouselSlide movieData={moviesData[2]} />
      <CarouselSlide movieData={moviesData[3]} />
      <CarouselSlide movieData={moviesData[4]} />
    </Carousel>
  );
}
