function CategoryMenu({ setSelectedCategory }) {
  return (
    <div className="droDownContainer">
      <button
        onClick={() => {
          setSelectedCategory("popular");
        }}
        className="popular"
      >
        Popular
      </button>
      <button
        onClick={() => {
          setSelectedCategory("top-rated");
        }}
        className="top-rated"
      >
        Top Rated
      </button>
      <button
        onClick={() => {
          setSelectedCategory("upcoming");
        }}
        className="upcoming"
      >
        Upcoming
      </button>
      <button
        onClick={() => {
          setSelectedCategory("now-playing");
        }}
        className="now-playing"
      >
        Now Playing
      </button>
    </div>
  );
}

export default CategoryMenu;
