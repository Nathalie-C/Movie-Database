import { IMAGE_URL_BASE } from "../utilities/api";
import castErrorImg from "../images/cast-error-img.webp";

export default function CastList({ movieData }) {
  // output cast photo
  let imgAlt = "";
  const casts = movieData.credits.cast.slice(0, 11);

  let castCards = casts.map((cast, i) => {
    if (cast.profile_path === null) {
      imgAlt = "Photo not available";
    } else {
      imgAlt = cast.name;
    }

    return (
      <div key={`${i}-${casts.name}`}>
        <div className="cast-card">
          <img
            src={`${IMAGE_URL_BASE}/w185${cast.profile_path}`}
            alt={imgAlt}
            onError={(e) => {
              let currentTarget = e.currentTarget;
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = castErrorImg;
            }}
          />
          <div className="cast-text">
            <h3>{cast.name}</h3>
            <p>{cast.character}</p>
          </div>
        </div>
      </div>
    );
  });

  if (castCards.length > 0) {
    return castCards;
  } else {
    return <p>No cast available.</p>;
  }
}
