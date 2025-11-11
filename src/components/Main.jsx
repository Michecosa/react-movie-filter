import Movies from "./movies-list/Movies";

export default function Main({ movies }) {
  return (
    <>
      <Movies moviesList={movies} />
    </>
  );
}
