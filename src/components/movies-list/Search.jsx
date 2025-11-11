export default function Search({ selectedGenre, setSelectedGenre, genres }) {
  return (
    <>
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
    </>
  );
}
