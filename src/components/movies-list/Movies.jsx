import { useState, useEffect } from "react";
import Form from "./Form";
import MoviesList from "./MoviesList";
import Search from "./Search";

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

      <Search
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        genres={genres}
      />

      <MoviesList filteredMovies={filteredMovies} />
    </>
  );
}
