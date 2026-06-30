import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import api from "../services/api";

function BookDetail() {
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  const [book, setBook] = useState(null);

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    try {
      const response = await api.get(`/books/${id}`);
      setBook(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!book) {
    return (
      <div className="container mt-5 text-center">
        <h2>Cargando libro...</h2>
      </div>
    );
  }

  return (
    <div className="container py-5 mt-5">

      <div className="row">

        {/* Imagen */}

        <div className="col-lg-5">

          <div className="detail-image shadow">

            <img
              src={book.image}
              className="img-fluid"
              alt={book.title}
            />

          </div>

        </div>

        {/* Información */}

        <div className="col-lg-7">

          <span className="badge bg-warning text-dark mb-3">
            {book.genre}
          </span>

          <h1 className="fw-bold">
            {book.title}
          </h1>

          <h5 className="text-secondary">
            {book.author}
          </h5>

          <div className="my-3">

            ⭐⭐⭐⭐⭐

            <span className="ms-2 text-secondary">
              (128 opiniones)
            </span>

          </div>

          <h2 className="text-success fw-bold mb-4">
            ${book.price}
          </h2>

          <p className="lead">
            {book.description}
          </p>

          <div className="alert alert-success mt-4">

            📦 Stock disponible:
            <strong> {book.stock}</strong>

          </div>

          <button
            className="btn btn-warning btn-lg mt-3 px-5"
            onClick={() => addToCart(book)}
          >
            🛒 Agregar al carrito
          </button>

        </div>

      </div>

    </div>
  );
}

export default BookDetail;