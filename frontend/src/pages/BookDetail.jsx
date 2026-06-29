import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
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
      <div className="container mt-5">
        <h3>Cargando libro...</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">

      <div className="row">

        <div className="col-md-5">

          <img
            src={book.image || "https://via.placeholder.com/400x600"}
            alt={book.title}
            className="img-fluid rounded shadow"
          />

        </div>

        <div className="col-md-7">

          <h1>{book.title}</h1>

          <hr />

          <h4>Autor</h4>

          <p>{book.author}</p>

          <h4>Género</h4>

          <p>{book.genre}</p>

          <h4>Precio</h4>

          <h2 className="text-success">
            ${book.price}
          </h2>

          <h5>
            Stock disponible: {book.stock}
          </h5>

          <hr />

          <h4>Descripción</h4>

          <p>{book.description}</p>

          <button
            className="btn btn-warning btn-lg"
            onClick={() => addToCart(book)}
          >
            Agregar al carrito
          </button>

        </div>

      </div>

    </div>
  );
}

export default BookDetail;