import { useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import MovieCard from "../components/MovieCard";

function PageFavourites() {
  const { favorites } = useContext(GlobalContext);
  console.log(favorites);

  if (favorites.length > 0) {
    return (
      <main id="favorites">
        <h1 className="fav-movie-title">Favorite Movie</h1>
        <div className="fav-movie-container">
          {favorites.map((favorite, index) => (
            <MovieCard key={favorite.id} movieData={favorite} />
          ))}
        </div>
      </main>
    );
  } else {
    return (
      <main id="favorites" className="fav-none">
        <h2>
          Currently you have no favourited movies, try picking some you like and
          you will see it here.
        </h2>
      </main>
    );
  }
}

export default PageFavourites;
