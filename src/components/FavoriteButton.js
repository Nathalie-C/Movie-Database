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
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24">
        <title>Favourite icon</title>
        <path d="m12 5.72c-2.624-4.517-10-3.198-10 2.461 0 3.725 4.345 7.727 9.303 12.54.194.189.446.283.697.283s.503-.094.697-.283c4.977-4.831 9.303-8.814 9.303-12.54 0-5.678-7.396-6.944-10-2.461z"></path>
      </svg>
    </button>
  );
}

export default FavouriteButton;
