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
      <h1 className="mb-4">Catálogo</h1>

      <div className="row">
        {books.map((book) => (
          <div className="col-md-4 mb-4" key={book.id}>
            <div className="card shadow h-100">
              <div className="card-body">
                <h5>{book.title}</h5>

                <p>
                  <strong>Autor:</strong> {book.author}
                </p>

                <p>{book.genre}</p>

                <h4 className="mb-3">${book.price}</h4>

                <button
                   className="btn btn-warning w-100"
                   onClick={() => addToCart(book)}
>
                   Agregar al carrito
                 </button>
                 <div className="d-grid gap-2 mt-2">
                 <Link
                    to={`/book/${book.id}`}
                   className="btn btn-outline-primary"
  >
                    Ver detalle
                  </Link>
</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;