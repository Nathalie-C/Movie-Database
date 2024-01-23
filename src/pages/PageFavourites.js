import { useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import MovieCard from "../components/MovieCard";

function PageFavourites() {
  const { favorites } = useContext(GlobalContext);
  console.log(favorites);

  return (
    <div>
      <main id="home">
        {favorites.map((favorite, index) => (
          <MovieCard key={favorite.id} movieData={favorite} />
        ))}
      </main>
    </div>
  );
}

export default PageFavourites;
