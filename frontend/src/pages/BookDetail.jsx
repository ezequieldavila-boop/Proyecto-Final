import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import api from "../services/api";

function BookDetail() {
  const { id } = useParams();

  const [book, setBook] = useState(null);

  const { addToCart } = useContext(CartContext);

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
    return <h2 className="text-center mt-5">Cargando...</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h1>{book.title}</h1>

        <hr />

        <h5>Autor: {book.author}</h5>

        <h5>Género: {book.genre}</h5>

        <h5>Stock: {book.stock}</h5>

        <h3 className="text-success mt-3">
          ${book.price}
        </h3>

        <p className="mt-3">
          {book.description}
        </p>

        <button
          className="btn btn-warning"
          onClick={() => addToCart(book)}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default BookDetail;