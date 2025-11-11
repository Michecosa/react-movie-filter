export default function Search({
  selectedGenre,
  setSelectedGenre,
  genres,
  searchTitle,
  setSearchTitle,
}) {
  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Cerca per titolo..."
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />

      <select
        className="form-select"
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
  );
}
