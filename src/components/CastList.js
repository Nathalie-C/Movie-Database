import { IMAGE_URL_BASE } from "../utilities/api";

export default function CastList({ movieData }) {
  // output cast photo
  let imgAlt = "";
  let castCards = [];
  const casts = movieData.credits.cast.slice(0, 7);
  for (let i = 0; i < casts.length; i++) {
    if (casts[i].profile_path === null) {
      imgAlt = "Photo not available";
    } else {
      imgAlt = casts[i].name;
    }

    castCards.push(
      <div key={i}>
        <div className="cast-card">
          <img
            src={`${IMAGE_URL_BASE}/w185${casts[i].profile_path}`}
            alt={imgAlt}
          />
          <div className="cast-text">
            <h3>{casts[i].name}</h3>
            <p>{casts[i].character}</p>
          </div>
        </div>
      </div>
    );
  }

  return castCards;
}
