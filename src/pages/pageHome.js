import { useState } from "react";
import {
  getPopularMovie,
  getTopRated,
  getUpcoming,
  getNowPlaying,
  getListOfGenre,
  getMovieByGenre,
} from "../utilities/api";
import { useEffect } from "react";
import MoviesContainer from "../components/MoviesContainer";
import CarouselBanner from "../components/CarouselBanner";
import CategoryMenu from "../components/CategoryMenu";

function PageHome() {
  const [moviesData, setMoviesData] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [listOfGenres, setListOfGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedData, setSelectedData] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState("popular");
  let categoryTitle = "popular";

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

    getListOfGenre()
      .then((data) => {
        setListOfGenres(data.genres);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

    getMovieByGenre(12)
      .then((data) => {
        setMoviesData(data.genres);
        console.log("moviesDataGenre", data.genres);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  function handleDataFromMenu(data) {
    setSelectedData(data);
    console.log("homeData:", data);
  }

  console.log("selectedDataID:", selectedData["id"]);
  // getMovieByGenre(12)
  //   .then((data) => {
  //     setMoviesData(data.genres);
  //     console.log("moviesDataGenre", data.genres);
  //     setLoading(false);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     setLoading(false);
  //   });
  if (selectedData.length === 2) {
  } else {
    if (selectedData === "Popular") {
      setMoviesData(popularMovies);
    } else if (selectedData === "Top Rated") {
      setMoviesData(topRatedMovies);
    } else if (selectedData === "Upcoming") {
      setMoviesData(upcomingMovies);
    } else if (selectedData === "Now Playing") {
      setMoviesData(nowPlayingMovies);
    }
  }

  return (
    <main id="home">
      {loading === false ? (
        <>
          {popularMovies.length > 0 && (
            <CarouselBanner moviesData={popularMovies} />
          )}
          <CategoryMenu
            // selectedCategory={selectedCategory}
            // setSelectedCategory={setSelectedCategory}
            listOfGenres={listOfGenres}
            sendDataToParent={handleDataFromMenu}
          />
          <MoviesContainer
            title={categoryTitle}
            moviesData={selectedData.length === 0 ? popularMovies : moviesData}
          />
          {/* {selectedCategory === "top-rated" && (
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
          )} */}
        </>
      ) : (
        <div className="spinner"></div>
      )}
    </main>
  );
}

export default PageHome;
