import MovieCard from "./MovieCard";

function MoviesContainer({ title, moviesData }) {
  return (
    <div className="movies-container">
      <h2>{title}</h2>
      {moviesData.length > 0 &&
        moviesData.map((movieData) => {
          return <MovieCard key={movieData.id} movieData={movieData} />;
        })}
    </div>
  );
}

export default MoviesContainer;
