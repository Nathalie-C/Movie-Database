import { useState } from "react";
import {
  getPopularMovie,
  getTopRated,
  getUpcoming,
  getNowPlaying,
} from "../utilities/api";
import { useEffect } from "react";
import MoviesContainer from "../components/MoviesContainer";
import CarouselBanner from "../components/CarouselBanner";
import CategoryMenu from "../components/CategoryMenu";

function PageHome() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("popular");

  useEffect(() => {
    getPopularMovie()
      .then((data) => {
        setPopularMovies(data.results);
        // console.log("data: ", data);
      })
      .catch((error) => {
        console.log(error);
      });
    getTopRated()
      .then((data) => {
        setTopRatedMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
    getUpcoming()
      .then((data) => {
        setUpcomingMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
    getNowPlaying()
      .then((data) => {
        setNowPlayingMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   getTopRated()
  //     .then((data) => {
  //       setTopRated(data.results);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  return (
    <main id="home">
      {popularMovies.length > 0 && (
        <CarouselBanner moviesData={popularMovies} />
      )}

      <CategoryMenu
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {selectedCategory === "popular" && (
        <MoviesContainer title="Popular Movies" moviesData={popularMovies} />
      )}
      {selectedCategory === "top-rated" && (
        <MoviesContainer title="Top Rated Movies" moviesData={topRatedMovies} />
      )}
      {selectedCategory === "upcoming" && (
        <MoviesContainer title="Upcoming Movies" moviesData={upcomingMovies} />
      )}
      {selectedCategory === "now-playing" && (
        <MoviesContainer
          title="Now Playing Movies"
          moviesData={nowPlayingMovies}
        />
      )}
    </main>
  );
}

export default PageHome;
