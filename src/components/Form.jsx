export default function Form({
  handleAddMovie,
  newTitle,
  setNewTitle,
  newGenre,
  setNewGenre,
}) {
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
    </>
  );
}
