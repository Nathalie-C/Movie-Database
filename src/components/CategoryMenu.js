import { useState, useEffect } from "react";
import FilterDropdown from "./FilterDropdown";
import FilterTab from "./FilterTab";
import filterIcon from "../images/filter_icon.svg";

function CategoryMenu({
  // selectedCategory = "popular",
  // setSelectedCategory,
  sendDataToParent,
  listOfGenres,
}) {
  const [dropdownToggle, setDropdownToggle] = useState(false);
  const [dataFromFilterDropdown, setDataFromFilterDropdown] = useState([]);
  const [tabType, setTabType] = useState("");
  // const [categoryData, setCategoryData] = useState("");
  // const [genreData, setGenreData] = useState("");
  const [selected, setSelected] = useState("Popular");

  const listCategory = ["Popular", "Top Rated", "Upcoming", "Now Playing"];

  function handleDataFromTab(data) {
    setTabType(data);
    setDropdownToggle(true);
    // console.log("set tab data:", data);
  }

  function handleDataFromFilterDropdown(data) {
    // console.log("dataID:", data.length);
    // console.log("dataID's data:", data);

    let select = "";
    if (data.length === 2) {
      select = data[1];
    } else {
      select = data;
    }
    setSelected(select);
    setDataFromFilterDropdown(data);
    sendDataToParent(data);
    setDropdownToggle(false);

    // console.log("set dropdown data:", data);
  }

  // useEffect(() => {
  //   if (dataFromFilterDropdown.length === 2) {
  //     selected = dataFromFilterDropdown[1];
  //   } else if (dataFromFilterDropdown.length === 1) {
  //     selected = dataFromFilterDropdown[0];
  //   }
  // }, [dataFromFilterDropdown]);

  // if (dataFromFilterDropdown[0] === "category") {
  //   catValue = dataFromFilterDropdown[1];
  // } else if (dataFromFilterDropdown[0] === "genre") {
  //   genValue = dataFromFilterDropdown[1];
  //   console.log("genValue:", genValue);
  // }

  return (
    <div className={dropdownToggle ? "categoryMenu toggled" : "categoryMenu"}>
      <div className="filter-tab-section">
        <img src={filterIcon} alt="filter icon" className="filter-icon" />
        <div className="filter-tab-section-box">
          <div className="filter-tab-section-box-top">
            <FilterTab type="Category" sendDataToParent={handleDataFromTab} />
            <FilterTab type="Genre" sendDataToParent={handleDataFromTab} />
          </div>
          {/* selected filter */}
          <div>
            <p>{selected}</p>
          </div>
        </div>
      </div>
      <div className="dropdownContainer">
        <ul className="dropdownContainer-list">
          <FilterDropdown
            tabType={tabType}
            listCategory={listCategory}
            listGenre={listOfGenres}
            sendDataToParent={handleDataFromFilterDropdown}
          />
        </ul>
        {/* <button
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
        </button> */}
      </div>
    </div>
  );
}

export default CategoryMenu;
