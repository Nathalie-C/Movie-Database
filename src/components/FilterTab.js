import { useState } from "react";

function FilterTab({ type, sendDataToParent }) {
  const [data, setData] = useState([]);

  function handleClick() {
    setData(type);
    sendDataToParent(data);
    // console.log("tab data:", data);
  }

  return (
    <div className="filter-tab-section-button">
      <h2>
        <button
          onClick={handleClick}
          // onClick={() => {
          //   dropdownToggle ? setDropdownToggle(false) : setDropdownToggle(true);
          // }}
        >
          {type}
        </button>
      </h2>
    </div>
  );
}

export default FilterTab;
