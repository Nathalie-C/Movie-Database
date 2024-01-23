import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchResult, setSearchResult] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const result = e.target[0].value;
    setSearchResult(result);
    navigate(`/searchResults?query=${result}`);
  }

  return (
    <div>
      <form action="/search" method="get" onSubmit={handleSubmit}>
        <label htmlFor="search-text">Search for Movie</label>
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SearchBar;
