import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import ToastAlert from "../components/ToastAlert";

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    try {
      const res = await api.get(`/books/${id}`);
      setBook(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Debes iniciar sesión para comprar");
      return;
    }

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(book);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Libro agregado al carrito ✔");
  };

  if (!book) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-warning"></div>
      </div>
    );
  }

  return (
    <div className="container mt-5">

      <div className="card shadow-lg border-0">

        <div className="row g-0">

          {/* IMAGEN */}
          <div className="col-md-5 bg-light d-flex align-items-center justify-content-center p-3">

            <img
              src={book.image || "https://via.placeholder.com/400x600"}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "500px" }}
              alt={book.title}
            />

          </div>

          {/* INFO */}
          <div className="col-md-7">

            <div className="card-body p-4">

              <h2 className="fw-bold mb-2">
                {book.title}
              </h2>

              <h5 className="text-muted mb-3">
                ✍ {book.author}
              </h5>

              <span className="badge bg-dark mb-3">
                {book.genre}
              </span>

              <h3 className="text-success fw-bold">
                ${book.price}
              </h3>

              <hr />

              <p className="text-secondary">
                {book.description || "Sin descripción disponible."}
              </p>

              {/* BOTÓN */}
              <button
                className="btn btn-warning btn-lg w-100 mt-3"
                onClick={addToCart}
              >
                🛒 Agregar al carrito
              </button>

              <button
                className="btn btn-outline-secondary w-100 mt-2"
                onClick={() => window.history.back()}
              >
                Volver
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default BookDetail;