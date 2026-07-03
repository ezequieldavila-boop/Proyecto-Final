import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import ToastAlert from "../components/ToastAlert";
import { CartContext } from "../context/CartContext";

function Catalog() {
  const [books, setBooks] = useState([]);

  const { addToCart } = useContext(CartContext);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const res = await api.get("/books");
      setBooks(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddToCart = (book) => {
    const token = localStorage.getItem("token");

    if (!token) {
      setToast({
        show: true,
        message: "⚠ Debes iniciar sesión",
        type: "warning",
      });
      return;
    }

    // 🔥 IMPORTANTE: usar CONTEXT (no localStorage)
    addToCart(book);

    setToast({
      show: true,
      message: "🛒 Agregado al carrito",
      type: "success",
    });
  };

  return (
    <div className="container mt-5">

      <ToastAlert
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, show: false })}
      />

      <h2 className="mb-4 text-center">
        Catálogo
      </h2>

      <div className="row">

        {books.map((book) => (
          <div key={book.id} className="col-md-4 mb-3">

            <div className="card shadow-sm h-100">

              <img
                src={book.image}
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">

                <h5>{book.title}</h5>

                <p>{book.author}</p>

                <h6 className="text-success">
                  ${book.price}
                </h6>

                <button
                  className="btn btn-warning mt-auto"
                  onClick={() => handleAddToCart(book)}
                >
                  🛒 Agregar
                </button>

                <Link
                  to={`/book/${book.id}`}
                  className="btn btn-primary mt-2"
                >
                  Ver detalle
                </Link>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Catalog;