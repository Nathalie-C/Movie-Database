import { IMAGE_URL_BASE } from "../utilities/api";
import { formatReleaseDate } from "../utilities/toolbelt";
import { Link, useNavigate } from "react-router-dom";
import FavouriteButton from "./FavoriteButton";
import ErrorImg from "../images/poster-error-img.webp";
import star from "../images/star_icon.svg";

const defaultData = {
  adult: false,
  backdrop_path: "/f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg",
  genre_ids: [36, 10752, 18],
  id: 753342,
  original_language: "en",
  original_title: "Napoleon",
  overview:
    "An epic that details the checkered rise and fall of French Emperor Napoleon Bonaparte and his relentless journey to power through the prism of his addictive, volatile relationship with his wife, Josephine.",
  popularity: 1811.36,
  poster_path: "/jE5o7y9K6pZtWNNMEw3IdpHuncR.jpg",
  release_date: "2023-11-22",
  title: "Napoleon",
  video: false,
  vote_average: 6.529,
  vote_count: 1268,
};

function MovieCard({ movieData = defaultData }) {
  const imagePath = `${IMAGE_URL_BASE}/w185${movieData.poster_path}`;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/movie/${movieData.id}`);
      }}
      className="movie-card"
    >
      <img
        src={imagePath}
        alt={movieData.title}
        onError={(e) => {
          let currentTarget = e.currentTarget;
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = ErrorImg;
        }}
      />
      {/* overlay */}
      <div className="movie-info">
        <div className="title-and-release">
          <h3 className="title">{movieData.title}</h3>
          {movieData.release_date && (
            <p className="release-date">
              {formatReleaseDate(movieData.release_date)}
            </p>
          )}
        </div>
        {movieData.overview ? (
          <p>
            {movieData.overview.trim().substring(0, 80)}... <Link>More</Link>
          </p>
        ) : (
          <p>
            No Description Available <Link>More</Link>
          </p>
        )}
        <div className="card-icons">
          <div className="rating-bar">
            {movieData.vote_average ? (
              <p>{movieData.vote_average.toFixed(1)}</p>
            ) : (
              <p>N/A</p>
            )}
          </div>
          <FavouriteButton movieData={movieData} />
        </div>
      </div>
      {/* info */}
      <div className="movie-card-info">
        <h3 className="title">{movieData.title}</h3>
        <div className="movie-card-rating">
          <img
            src={star}
            alt="a start rating icon"
            className="movie-card-rating-icon"
          />
          {movieData.vote_average ? (
            <p className="movie-card-rating-text">
              {movieData.vote_average.toFixed(1)}
            </p>
          ) : (
            <p className="movie-card-rating-text">N/A</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
