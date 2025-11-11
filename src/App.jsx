import movies from "./data/movies.js";
import Movies from "./components/Movies.jsx";

function App() {
  return (
    <>
      <Movies moviesList={movies} />
    </>
  );
}

export default App;
