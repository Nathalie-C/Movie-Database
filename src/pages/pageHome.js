import { useState } from "react";
import { getPopularMovie } from "../utilities/api";
import { useEffect } from "react";
import MoviesContainer from "../components/MoviesContainer";
import CarouselBanner from "../components/CarouselBanner";
import Footer from "../components/Footer";

function PageHome() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    getPopularMovie()
      .then((data) => {
        setPopularMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(popularMovies);

  return (
    <main id="home">
      <CarouselBanner moviesData={popularMovies} />
      <MoviesContainer title="Popular Movies" moviesData={popularMovies} />
      <Footer />
    </main>
  );
}

export default PageHome;
