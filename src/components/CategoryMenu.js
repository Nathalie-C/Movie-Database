import { useState } from "react";

function CategoryMenu({ selectedCategory = "popular", setSelectedCategory }) {
  // const [popularToggle, setPopularToggle] = useState(true);
  // const [topRatedToggle, setTopRatedToggle] = useState(false);
  // const [upcomingToggle, setUpcomingToggle] = useState(false);
  // const [nowPlayingToggle, setNowPlayingToggle] = useState(false);

  const [dropdownToggle, setDropdownToggle] = useState(false);

  const [categoryName, setCategoryName] = useState("Popular");

  return (
    <div className={dropdownToggle ? "categoryMenu toggled" : "categoryMenu"}>
      <button
        className="currentCategory"
        onClick={() => {
          dropdownToggle ? setDropdownToggle(false) : setDropdownToggle(true);
        }}
      >
        <h1>{categoryName}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
        >
          <title>Dropdown arrow icon</title>
          <path d="M2 9L12 15L22 9"></path>
        </svg>
      </button>
      <div className="dropdownContainer">
        <button
          onClick={() => {
            setSelectedCategory("popular");
            setCategoryName("Popular");
            setDropdownToggle(false);
          }}
          className={selectedCategory === "popular" ? "" : "outline"}
        >
          Popular
        </button>
        <button
          onClick={() => {
            setSelectedCategory("top-rated");
            setCategoryName("Top Rated");
            setDropdownToggle(false);
          }}
          className={selectedCategory === "top-rated" ? "" : "outline"}
        >
          Top Rated
        </button>
        <button
          onClick={() => {
            setSelectedCategory("upcoming");
            setCategoryName("Upcoming");
            setDropdownToggle(false);
          }}
          className={selectedCategory === "upcoming" ? "" : "outline"}
        >
          Upcoming
        </button>
        <button
          onClick={() => {
            setSelectedCategory("now-playing");
            setCategoryName("Now Playing");
            setDropdownToggle(false);
          }}
          className={selectedCategory === "now-playing" ? "" : "outline"}
        >
          Now Playing
        </button>
      </div>
    </div>
  );
}

export default CategoryMenu;
