export default function CarouselBanner({ popularMovies }) {
  // The carousel section is modified from https://github.com/dangvanthanh/carousel.sass?tab=readme-ov-file
  // console.log(popularMovies);
  //every 3 secs, force a click on input "carousel-dot"

  // const radioInputs = document.querySelectorAll(".carousel-dot");
  // const labels = document.querySelectorAll(".carousel__nav label");

  // const CAROUSEL_DELAY = 5000;

  // let activeCarouselIndex = 0;
  // let timeoutID;
  // setTimeout(autoShowSlides, CAROUSEL_DELAY);

  // function autoShowSlides() {
  //   activeCarouselIndex++;
  //   // console.log(activeCarouselIndex);
  //   radioInputs[activeCarouselIndex].click();

  //   if (activeCarouselIndex === radioInputs.length - 1) {
  //     activeCarouselIndex = -1;
  //   }

  //   // Change image every 3 seconds
  //   timeoutID = setTimeout(autoShowSlides, CAROUSEL_DELAY);
  // }

  // for (let i = 0; i < labels.length; i++) {
  //   labels[i].addEventListener("click", function () {
  //     clearTimeout(timeoutID);
  //     activeCarouselIndex = i;
  //     if (activeCarouselIndex === radioInputs.length - 1) {
  //       activeCarouselIndex = -1;
  //     }

  //     timeoutID = setTimeout(autoShowSlides, CAROUSEL_DELAY);
  //   });
  // }

  return (
    <div class="carousel">
      <input
        type="radio"
        id="carousel-1"
        class="carousel-dot"
        name="carousel[]"
        checked
      />
      <input
        type="radio"
        id="carousel-2"
        class="carousel-dot"
        name="carousel[]"
      />
      <input
        type="radio"
        id="carousel-3"
        class="carousel-dot"
        name="carousel[]"
      />

      <ul class="carousel__items">
        <li class="carousel__item">
          <img src="" alt="" />
        </li>
        {/* <li class="carousel__item">
           <img src="images/header-slider-img-02.jpg" alt="Carousel background image of a technician working" />
         </li>
         <li class="carousel__item">
           <img src="images/header-slider-img-03.jpg" alt="Carousel background image of two technicians working" />
         </li> */}
      </ul>

      <div class="carousel__prev">
        <label for="carousel-1"></label>
        <label for="carousel-2"></label>
        <label for="carousel-3"></label>
      </div>

      <div class="carousel__next">
        <label for="carousel-1"></label>
        <label for="carousel-2"></label>
        <label for="carousel-3"></label>
      </div>

      <div class="carousel__nav">
        <label for="carousel-1"></label>
        <label class="carousel-label" for="carousel-2"></label>
        <label for="carousel-3"></label>
      </div>
    </div>
  );
}
