import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">

        <div className="card-body">

          <h5 className="card-title">
            {book.title}
          </h5>

          <p className="card-text">
            Autor: {book.author}
          </p>

          <p className="card-text">
            Género: {book.genre}
          </p>

          <h4 className="text-primary">
            ${book.price}
          </h4>

        </div>

        <div className="card-footer d-flex gap-2">

          <Link
            to={`/book/${book.id}`}
            className="btn btn-outline-primary flex-fill"
          >
            Ver detalle
          </Link>

          <button className="btn btn-warning flex-fill">
            Agregar
          </button>

        </div>

      </div>
    </div>
  );
}

export default BookCard;