import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import api from "../services/api";

function Catalog() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

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

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-5 mt-5">

      <div className="text-center mb-5">

        <h1 className="fw-bold display-5">
          📚 Catálogo
        </h1>

        <p className="text-secondary">
          Descubrí tu próxima lectura favorita.
        </p>

      </div>

      <div className="row justify-content-center mb-5">

        <div className="col-md-6">

          <input
            className="form-control form-control-lg shadow-sm"
            placeholder="🔍 Buscar libros..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

      </div>

      <div className="row">

        {filteredBooks.map((book) => (

          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={book.id}>

            <div className="card h-100 catalog-card">

              <img
                src={book.image}
                className="card-img-top"
                alt={book.title}
                style={{
                  height: "360px",
                  objectFit: "cover"
                }}
              />

              <div className="card-body d-flex flex-column">

                <span className="badge bg-warning text-dark mb-2 align-self-start">
                  {book.genre}
                </span>

                <h5 className="fw-bold">
                  {book.title}
                </h5>

                <small className="text-muted">
                  {book.author}
                </small>

                <div className="my-2">

                  ⭐⭐⭐⭐⭐

                </div>

                <h3 className="text-success fw-bold mt-2">
                  ${book.price}
                </h3>

                <small className="text-secondary mb-3">
                  Stock disponible: {book.stock}
                </small>

                <button
                  className="btn btn-warning w-100 mb-2"
                  onClick={() => addToCart(book)}
                >
                  🛒 Agregar al carrito
                </button>

                <Link
                  to={`/book/${book.id}`}
                  className="btn btn-outline-dark w-100"
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