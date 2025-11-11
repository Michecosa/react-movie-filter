import movies from "./data/movies.js";
import Main from "./components/Main.jsx";

function App() {
  return (
    <>
      <Main movies={movies} />
    </>
  );
}

export default App;
