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
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState("popular");

  useEffect(() => {
    getPopularMovie()
      .then((data) => {
        setPopularMovies(data.results);
        setLoading(false);
        // console.log("data", data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    getTopRated()
      .then((data) => {
        setTopRatedMovies(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    getUpcoming()
      .then((data) => {
        setUpcomingMovies(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
    getNowPlaying()
      .then((data) => {
        setNowPlayingMovies(data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <main id="home">
      {loading === false ? (
        <>
          {popularMovies.length > 0 && (
            <CarouselBanner moviesData={popularMovies} />
          )}
          <CategoryMenu
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          {selectedCategory === "popular" && (
            <MoviesContainer title="Popular" moviesData={popularMovies} />
          )}
          {selectedCategory === "top-rated" && (
            <MoviesContainer title="Top Rated" moviesData={topRatedMovies} />
          )}
          {selectedCategory === "upcoming" && (
            <MoviesContainer title="Upcoming" moviesData={upcomingMovies} />
          )}
          {selectedCategory === "now-playing" && (
            <MoviesContainer
              title="Now Playing"
              moviesData={nowPlayingMovies}
            />
          )}
        </>
      ) : (
        <div className="spinner"></div>
      )}
    </main>
  );
}

export default PageHome;
