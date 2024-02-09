import MovieCard from "./MovieCard";

function MoviesContainer({ title, moviesData }) {
  return (
    <div className="movies-category">
      <h1 class="screen-reader-text">{title}</h1>
      <div className="movies-container">
        {moviesData.length > 0 &&
          moviesData.map((movieData) => {
            return <MovieCard key={movieData.id} movieData={movieData} />;
          })}
      </div>
    </div>
  );
}

export default MoviesContainer;
