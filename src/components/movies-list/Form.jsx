export default function Form({
  handleAddMovie,
  newTitle,
  setNewTitle,
  newGenre,
  setNewGenre,
}) {
  return (
    <form
      onSubmit={handleAddMovie}
      className="container mt-4 p-4 border rounded bg-light"
    >
      <h4 className="mb-3 text-center text-primary">Aggiungi un Film</h4>

      <div className="mb-3">
        <label className="form-label fw-semibold">Titolo</label>
        <input
          id="title"
          type="text"
          className="form-control"
          placeholder="Inserisci il titolo"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Genere</label>
        <input
          id="genre"
          type="text"
          className="form-control"
          placeholder="Inserisci il genere"
          value={newGenre}
          onChange={(e) => setNewGenre(e.target.value)}
        />
      </div>

      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">
          Aggiungi
        </button>
      </div>
    </form>
  );
}
