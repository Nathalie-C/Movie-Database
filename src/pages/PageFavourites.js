import { useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";
import MovieCard from "../components/MovieCard";
import Footer from "../components/Footer";

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
      <Footer />
    </div>
  );
}

export default PageFavourites;
