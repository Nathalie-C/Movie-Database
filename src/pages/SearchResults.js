import React, { useEffect, useState } from "react";
import { getMovieBySearch } from "../utilities/api";
import { useLocation } from "react-router-dom";
import MoviesContainer from "../components/MoviesContainer";

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    getMovieBySearch(query)
      .then((data) => {
        setSearchedMovies(data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [query]);

  if (searchedMovies.length > 0) {
    return (
      <main>
        {console.log("inside the return", searchedMovies)}
        <h1>Search Results</h1>
        <MoviesContainer title="Searched Movies" moviesData={searchedMovies} />
      </main>
    );
  } else {
    return (
      <main>
        <h2>
          Dang you should find better movies, your search also sucks get out of
          site.
        </h2>
      </main>
    );
  }
}

export default SearchResults;
