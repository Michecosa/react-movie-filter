import { useState } from "react";

export default function Movies({ moviesList }) {
  const [movies, setMovies] = useState(moviesList);

  return (
    <ul>
      {movies.map((movie, index) => (
        <li key={index}>
          {movie.title} - {movie.genre}
        </li>
      ))}
    </ul>
  );
}
