import { useState, useEffect } from "react";
import Form from "./Form";
import MoviesList from "./MoviesList";

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

  const genres = [];
  movies.forEach((movie) => {
    if (!genres.includes(movie.genre)) {
      genres.push(movie.genre);
    }
  });

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
      <Form
        handleAddMovie={handleAddMovie}
        newTitle={newTitle}
        setNewTitle={setNewTitle}
        newGenre={newGenre}
        setNewGenre={setNewGenre}
      />

      <div className="container mt-4">
        <select
          className="form-select mb-3"
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
      </div>

      <MoviesList filteredMovies={filteredMovies} />
    </>
  );
}
