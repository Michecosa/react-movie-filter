import { useState, useEffect } from "react";

export default function Movies({ moviesList }) {
  const [movies, setMovies] = useState(moviesList);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [filteredMovies, setFilteredMovies] = useState(moviesList);
  const [newTitle, setNewTitle] = useState("");
  const [newGenre, setNewGenre] = useState("");

  useEffect(() => {
    if (selectedGenre === "") {
      setFilteredMovies(movies);
    } else {
      setFilteredMovies(
        movies.filter((movie) => movie.genre === selectedGenre)
      );
    }
  }, [selectedGenre, movies]);

  const genres = [...new Set(movies.map((movie) => movie.genre))];

  function handleAddMovie(e) {
    e.preventDefault();
    if (!newTitle || !newGenre) return;
    const newMovie = { title: newTitle, genre: newGenre };
    setMovies([...movies, newMovie]);
    setNewTitle("");
    setNewGenre("");
  }

  return (
    <>
      <form onSubmit={handleAddMovie}>
        <input
          type="text"
          placeholder="Titolo"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genere"
          value={newGenre}
          onChange={(e) => setNewGenre(e.target.value)}
        />
        <button type="submit">Aggiungi</button>
      </form>

      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">Tutti i generi</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>
            {genre}
          </option>
        ))}
      </select>

      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index}>
            {movie.title} - {movie.genre}
          </li>
        ))}
      </ul>
    </>
  );
}
