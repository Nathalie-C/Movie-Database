// import carouselImg01 from "../images/header-slider-img-01.jpg";
// import carouselImg02 from "../images/header-slider-img-02.jpg";
// import carouselImg03 from "../images/header-slider-img-03.jpg";
// import { IMAGE_URL_BASE } from "../utilities/api";
// import { formatReleaseDate } from "../utilities/toolbelt";
// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import CreateExcerpt from "./CreateExcerpt";

// export default function CarouselBanner({ moviesData }) {
//   // The carousel section is modified from https://github.com/leandrowd/react-responsive-carousel?tab=readme-ov-file
//   const imagePath = `${IMAGE_URL_BASE}/w1920`;
//   // imagePath + moviesData[0].poster_path
//   console.log("Pop: ", moviesData[0]);

//   return (
//     <Carousel
//       showThumbs={false}
//       showStatus={false}
//       autoPlay={true}
//       infiniteLoop={true}
//       transitionTime={2500}
//       interval={5000}
//     >
//       {/* <div className="carousel-slide">
//         <img src={carouselImg01} alt={moviesData[0].title} />
//         <div className="carousel-text">
//           <h1>{moviesData[0].title}</h1>
//           <p> {formatReleaseDate(moviesData[0].release_date)}</p>
//           <CreateExcerpt
//             content={moviesData[0].overview}
//             maxNumberOfWords={50}
//           />
//           <button>More Info</button>
//         </div>
//       </div> */}

//       <div className="carousel-slide">
//         <img src={carouselImg02} alt="" />
//         <div className="carousel-text">
//           <h1>Movie title</h1>
//           <p>2023-05-24</p>
//           <p>dddddd</p>
//           <CreateExcerpt content="Carol Danvers i , ojdof kok." />
//         </div>
//       </div>

//       <div className="carousel-slide">
//         <img src={carouselImg03} alt="" />
//         <div className="carousel-text">
//           <h1>Movie title</h1>
//           <p>2023-05-24</p>
//           <p>dddddd</p>
//           <button>more</button>
//         </div>
//       </div>

//       <div className="carousel-slide">
//         <img src={carouselImg03} alt="" />
//         <div className="carousel-text">
//           <h1>Movie title</h1>
//           <p>2023-05-24</p>
//           <p>dddddd</p>
//           <button>more</button>
//         </div>
//       </div>
//     </Carousel>
//   );
// }
