import { useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../utilities/api";
import { useEffect } from "react";
import { filterVideos, formatReleaseDate } from "../utilities/toolbelt";
import FavouriteButton from "../components/FavoriteButton";
import Banner from "../components/Banner";
import { IMAGE_URL_BASE } from "../utilities/api";
import { formatRuntime } from "../utilities/toolbelt";
import CastList from "../components/CastList";

function PageSingleMovie() {
  const params = useParams();
  const id = params.id;
  const [movieData, setMovieData] = useState();
  const [movieVideos, setMovieVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMovieById(id)
      .then((data) => {
        const youtubeTrailerVideos = filterVideos(data.videos.results);
        setMovieData(data);
        setMovieVideos(youtubeTrailerVideos);
        setLoading(false);
      })
      .catch((error) => {
        alert(error);
        setLoading(false);
      });
  }, []);

  let genreArr = [];
  if (movieData) {
    movieData.genres.map((data, index) => genreArr.push(data.name));
    // console.log("1movieData", movieData);
  }
  function outputTrailer() {
    if (movieVideos.length > 0) {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${movieVideos[0].key}`}
          title={movieData.name}
          frameborder="0"
          allow="fullscreen; picture-in-picture"
          allowfullscreen
        >
          Your browser does not support embedded frames (iframes)
        </iframe>
      );
    } else {
      return <p>Sorry, this movie does not have a trailer available.</p>;
    }
  }

  function hasPosterImg() {
    if (movieData.poster_path) {
      return true;
    } else {
      return false;
    }
  }
  if (loading === true) {
    return <div className="spinner"></div>;
  } else {
    return (
      <div className="movie-page">
        {movieData && (
          <>
            {movieData.backdrop_path && (
              <Banner
                src={`${IMAGE_URL_BASE}/w1280${movieData.backdrop_path}`}
                alt={`Banner of ${movieData.title}`}
              />
            )}
            <main className="movie-page-main">
              <div className="single-movie-info">
                {movieData.poster_path && (
                  <div className="poster-container">
                    <div className="poster-carrier">
                      <div className="poster-gradient" />
                      <img
                        className="single-page-poster"
                        src={`${IMAGE_URL_BASE}/w1280${movieData.poster_path}`}
                        alt={`Poster of ${movieData.title}`}
                      />
                    </div>
                  </div>
                )}

                <div
                  className={
                    hasPosterImg()
                      ? "single-movie-text"
                      : "single-movie-text no-poster"
                  }
                >
                  <div className="movie-title-container">
                    <h1 className="movie-title">{movieData.title}</h1>
                    <div className="rating-and-favourite">
                      <div className="rating-bar">
                        {movieData.vote_average ? (
                          <p>{movieData.vote_average.toFixed(1)}</p>
                        ) : (
                          <p>NR</p>
                        )}
                      </div>
                      <FavouriteButton
                        className="fav-btn"
                        movieData={movieData}
                      />
                    </div>
                  </div>

                  <div className="movie-text-container">
                    <div className="release-date-and-duration">
                      {movieData.release_date || movieData.runtime ? (
                        <p>
                          {formatReleaseDate(movieData.release_date)} -{" "}
                          {formatRuntime(movieData.runtime)}
                        </p>
                      ) : (
                        <p>No movie data available </p>
                      )}
                    </div>
                    <div className="genre-list">
                      <p>Genre: {genreArr.join(", ")}</p>
                    </div>

                    <h2>Overview</h2>
                    {!movieData.overview ? (
                      <p className="error-message-data">
                        Overview not available
                      </p>
                    ) : (
                      <p className="overview">{movieData.overview}</p>
                    )}
                  </div>
                </div>
              </div>

              <h2 className="trailer">Trailer</h2>
              <div className="movie-videos">{outputTrailer()}</div>
              <div className="cast-container">
                <h2>Cast List</h2>
                <p className="cast-container-instruction">
                  Please scroll left to view more cast members.
                </p>
                <div className="cast-overlay-container">
                  <div className="cast-gradient" />
                  <div className="cast-list" style={{ overflowX: "auto" }}>
                    <CastList movieData={movieData} />
                  </div>
                </div>
              </div>
            </main>
          </>
        )}
      </div>
    );
  }
}

export default PageSingleMovie;
