import { useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../utilities/api";
import { useEffect } from "react";
import { filterVideos, formatReleaseDate } from "../utilities/toolbelt";
import FavouriteButton from "../components/FavoriteButton";

function PageSingleMovie() {
  const params = useParams();
  const id = params.id;
  const [movieData, setMovieData] = useState();
  const [movieVideos, setMovieVideos] = useState([]);

  useEffect(() => {
    getMovieById(id)
      .then((data) => {
        setMovieData(data);
        const youtubeTrailerVideos = filterVideos(data.videos.results);
        setMovieData(data);
        setMovieVideos(youtubeTrailerVideos); // Fix this line
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <div className="movie-page">
      {movieData && (
        <>
          <h1>{movieData.title}</h1>
          <div>
            <h2>{formatReleaseDate(movieData.release_date)}</h2>
            <FavouriteButton />

            <p>{movieData.overview}</p>

            <div className="movie-videos">
              <iframe width="600" height="600" title={movieData.name}></iframe>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PageSingleMovie;
