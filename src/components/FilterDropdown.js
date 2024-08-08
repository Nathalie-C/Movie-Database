import { useEffect, useState } from "react";

export default function FilterDropdown({
  tabType,
  listCategory,
  listGenre,
  sendDataToParent,
}) {
  const [data, setData] = useState([]);
  let list = [];
  // console.log("tabType:", tabType);

  useEffect(() => {}, []);

  if (tabType === "Genre") {
    list = listGenre;
  } else if (tabType === "Category") {
    list = listCategory;
  }

  // console.log("listCategory:", listCategory);
  // console.log("listOfGenre:", listGenre);

  const buttonList = list.map((item, i) => {
    function handleClick(e) {
      setData(tabType === "Genre" ? [item["id"], item["name"]] : item);
      sendDataToParent(data);
      // console.log("dropdown data:", data);
    }
    // console.log("item", item);
    return (
      <li key={i}>
        <button
          onClick={handleClick}
          className={tabType === "Genre" ? [item["id"], item["name"]] : item}
          // onClick=
          // {() => {
          //   setSelectedCategory("popular");
          //   setCategoryName("Popular");
          //   setDropdownToggle(false);
          // }}
          // className={selectedCategory === "popular" ? "" : "outline"}
        >
          {tabType === "Genre" ? item["name"] : item}
        </button>
      </li>
    );
  });
  return buttonList;
}
