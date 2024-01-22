import { useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import MovieCard from "../components/MovieCard";

function PageFavourites() {
  const { favorites } = useContext(GlobalContext);
  console.log(favorites);

  return (
    <main id="home">
      {favorites.map((favorite, index) => (
        <MovieCard key={favorite.id} movieData={favorite} />
      ))}
    </main>
  );
}

export default PageFavourites;
