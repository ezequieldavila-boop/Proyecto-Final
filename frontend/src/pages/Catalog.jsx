import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import api from "../services/api";

function Catalog() {
  const [books, setBooks] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const response = await api.get("/books");
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">

      <h1 className="mb-4 text-center">
        Catálogo de Libros
      </h1>

      <div className="row">

        {books.map((book) => (

          <div className="col-md-4 mb-4" key={book.id}>

            <div className="card shadow h-100">

              <img
                src={book.image || "https://via.placeholder.com/300x450?text=Libro"}
                className="card-img-top"
                alt={book.title}
                style={{
                  height: "350px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body d-flex flex-column">

                <h5>{book.title}</h5>

                <p>
                  <strong>Autor:</strong> {book.author}
                </p>

                <p>{book.genre}</p>

                <h4 className="mb-3">
                  ${book.price}
                </h4>

                <button
                  className="btn btn-warning mb-2"
                  onClick={() => addToCart(book)}
                >
                  Agregar al carrito
                </button>

                <Link
                  to={`/book/${book.id}`}
                  className="btn btn-primary"
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