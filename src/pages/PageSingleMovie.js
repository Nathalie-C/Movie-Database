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

  useEffect(() => {
    getMovieById(id)
      .then((data) => {
        console.log("Data", data);

        // console.log("safs", data.videos.results);
        const youtubeTrailerVideos = filterVideos(data.videos.results);
        setMovieData(data);
        setMovieVideos(youtubeTrailerVideos);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  // console.log("genres: ", movieData.genres);

  let genreArr = [];
  if (movieData) {
    movieData.genres.map((data, index) => genreArr.push(data.name));
  }
  // output trailer
  function outputTrailer() {
    if (movieVideos.length > 0) {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${movieVideos[0].key}`}
          width="600"
          height="300"
          title={movieData.name}
        ></iframe>
      );
    } else {
      return <p>I am sorry, this movie does not have a trailer available.</p>;
    }
  }

  return (
    <div className="movie-page">
      {/* {console.log("Movie Data: ", movieData)} */}
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

              <div className="single-movie-text">
                <div className="movie-title-container">
                  <h1 className="movie-title">{movieData.title}</h1>
                  <div className="rating-and-favourite">
                    <div className="rating-bar">
                      {movieData.vote_average ? (
                        <p>
                          {movieData.vote_average.toFixed(1).replace(".", "")}%
                        </p>
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
                    <p>{genreArr.join(", ")}</p>
                  </div>

                  {!movieData.overview ? (
                    <p className="error-message-data">Overview not available</p>
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
              <div className="cast-list" style={{ overflowX: "auto" }}>
                <CastList movieData={movieData} />
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default PageSingleMovie;
