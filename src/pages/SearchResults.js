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
      <main id="search-results-page">
        <h1>Search Results</h1>
        <MoviesContainer title="Searched Movies" moviesData={searchedMovies} />
      </main>
    );
  } else {
    return (
      <main id="search-results-page" className="search-error">
        <h2>We cannot find a movie of your search. Please try again.</h2>
      </main>
    );
  }
}

export default SearchResults;
