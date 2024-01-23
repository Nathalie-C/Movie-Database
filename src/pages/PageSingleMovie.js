import { useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../utilities/api";
import { useEffect } from "react";
import { filterVideos, formatReleaseDate } from "../utilities/toolbelt";
import FavouriteButton from "../components/FavoriteButton";
import Banner from "../components/Banner";
import { IMAGE_URL_BASE } from "../utilities/api";
import { formatRuntime } from "../utilities/toolbelt";

function PageSingleMovie() {
  const params = useParams();
  const id = params.id;
  const [movieData, setMovieData] = useState();
  const [movieVideos, setMovieVideos] = useState([]);

  useEffect(() => {
    getMovieById(id)
      .then((data) => {
        console.log("Data", data);

        console.log("safs", data.videos.results);
        const youtubeTrailerVideos = filterVideos(data.videos.results);
        setMovieData(data);
        setMovieVideos(youtubeTrailerVideos);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div className="movie-page">
      {console.log("Movie Data: ", movieData)}
      {movieData && (
        <>
          <Banner
            src={`${IMAGE_URL_BASE}/w1280${movieData.backdrop_path}`}
            alt={movieData.title}
          />

          <main className="movie-page-main">
            <h1>{movieData.title}</h1>
            <div className="release-date-and-duration">
              <p>
                {formatReleaseDate(movieData.release_date)} -{" "}
                {formatRuntime(movieData.runtime)}
              </p>
            </div>

            <div className="rating-and-favourite">
              <div className="rating-bar">
                <p>{movieData.vote_average.toFixed(1).replace(".", "")}%</p>
              </div>
              <FavouriteButton movieData={movieData} />
            </div>

            <div className="genre-list">
              {movieData.genres.map((data, index) => (
                <p>{data.name}</p>
              ))}
            </div>

            <p>{movieData.overview}</p>

            <h2>Trailer</h2>

            <div className="movie-videos">
              <iframe
                src={`https://www.youtube.com/embed/${movieVideos[0].key}`}
                width="600"
                height="600"
                title={movieData.name}
              ></iframe>
            </div>
            <h2>Cast List</h2>
            <div className="cast-list" style={{ overflowX: "auto" }}>
              {movieData.credits.cast.slice(0, 7).map((cast, index) => (
                <div className="cast-card">
                  <img
                    src={`${IMAGE_URL_BASE}/w185${cast.profile_path}`}
                    alt={cast.name}
                  />
                  <div className="cast-text">
                    <h3>{cast.name}</h3>
                    <p>{cast.character}</p>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default PageSingleMovie;
