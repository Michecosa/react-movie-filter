export default function MoviesList({ filteredMovies }) {
  return (
    <div className="container mt-4">
      {filteredMovies.length === 0 ? (
        <p className="text-center text-muted">Nessun film trovato</p>
      ) : (
        <div className="row g-3">
          {filteredMovies.map((movie, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">
                    <span className="fw-semibold">Genere:</span> {movie.genre}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
