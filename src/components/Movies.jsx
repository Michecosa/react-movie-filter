import { useState } from "react";

export default function Movies({ moviesList }) {
  const [movies, setMovies] = useState(moviesList);
  const [searchGenre, setSearchGenre] = useState("");
  const [filteredGenre, setFilteredGenre] = useState([]);

  return (
    <>
      <input
        type="text"
        placeholder="Ricerca per genere..."
        value={searchGenre}
        onChange={(e) => setSearchGenre(e.target.value)}
      />
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            {movie.title} - {movie.genre}
          </li>
        ))}
      </ul>
    </>
  );
}
