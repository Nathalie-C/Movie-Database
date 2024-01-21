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
  console.log("movieData", movieData);
  console.log("movieVideos", movieVideos);

  return (
    <div className="movie-page">
      {movieData && (
        <>
          <h1>{movieData.title}</h1>
          <div>
            <h2>{formatReleaseDate(movieData.release_date)}</h2>
            <FavouriteButton movieData={movieData} />

            <p>{movieData.overview}</p>

            <div className="movie-videos">
              <iframe
                src={`https://www.youtube.com/embed/${movieVideos[0].key}`}
                width="600"
                height="600"
                title={movieData.name}
              ></iframe>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PageSingleMovie;
