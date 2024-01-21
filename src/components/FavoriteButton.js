import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

function FavouriteButton({ movieData }) {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(GlobalContext);

  const isFavorited = favorites.find((fav) => {
    return fav.id === movieData.id;
  });

  function handleFavorite(event) {
    event.stopPropagation();
    if (isFavorited) {
      removeFromFavorites(movieData);
    } else {
      addToFavorites(movieData);
    }
  }

  return (
    <button
      onClick={handleFavorite}
      className={`favorite ${isFavorited ? "favorited" : ""}`}
    >
      yes
    </button>
  );
}

export default FavouriteButton;
