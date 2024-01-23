import { IMAGE_URL_BASE } from "../utilities/api";
import { formatReleaseDate } from "../utilities/toolbelt";
import CreateExcerpt from "./CreateExcerpt";
import { useNavigate } from "react-router-dom";

export default function CarouselSlide({ movieData }) {
  const imagePath = `${IMAGE_URL_BASE}/original`;
  const navigate = useNavigate();

  return (
    <div className="carousel-slide">
      <img
        className="carousel-img"
        src={imagePath + movieData.backdrop_path}
        alt={movieData.title}
      />
      <div className="carousel-text">
        <h1>{movieData.title}</h1>
        <p> {formatReleaseDate(movieData.release_date)}</p>
        <CreateExcerpt content={movieData.overview} maxNumberOfWords={40} />
        <button
          onClick={() => {
            navigate(`/movie/${movieData.id}`);
          }}
        >
          More Info
        </button>
      </div>
    </div>
  );
}
