import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchResult, setSearchResult] = useState("");
  const [searchClass, setSearchClass] = useState("search untoggled");
  const [windowWidth, setWindowWidth] = useState(0);
  const navigate = useNavigate();

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // console.log("windowWidth: ", windowWidth);

  function handleSubmit(e) {
    e.preventDefault();
    const result = e.target[0].value;
    setSearchResult(result);
    console.log("Result:", result);
    navigate(`/searchResults?query=${result}`);
  }

  function handleToggleState(e) {
    if (windowWidth < 768) {
      if (searchClass === "search untoggled") {
        setSearchClass("search toggled");
      }
    } else {
      handleSubmit(e);
    }
  }

  return (
    <div className={searchClass}>
      <form action="/search" method="get" onSubmit={handleSubmit}>
        <label htmlFor="search-text">Search for Movie</label>
        <input type="text" placeholder="Search..." name="search" required />
        <button type="submit" onClick={handleToggleState}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>Search icon</title>
            <path d="M15.7347 15.7347C12.7142 18.7551 7.81706 18.7551 4.7966 15.7347C1.77613 12.7142 1.77613 7.81706 4.7966 4.7966C7.81706 1.77613 12.7142 1.77613 15.7347 4.7966C18.7551 7.81706 18.7551 12.7142 15.7347 15.7347ZM15.7347 15.7347L21.5156 21.5156"></path>
          </svg>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
