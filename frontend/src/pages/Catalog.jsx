import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import api from "../services/api";

function Catalog() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("Todos");
  const [order, setOrder] = useState("");

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

  let filteredBooks = books.filter((book) => {
    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchGenre =
      genre === "Todos" || book.genre === genre;

    return matchSearch && matchGenre;
  });

  if (order === "az") {
    filteredBooks.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  if (order === "priceAsc") {
    filteredBooks.sort((a, b) => a.price - b.price);
  }

  if (order === "priceDesc") {
    filteredBooks.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="container mt-5">

      <h1 className="text-center mb-5">
        📚 Catálogo de Libros
      </h1>

      <div className="row mb-4">

        <div className="col-md-5">

          <input
            type="text"
            className="form-control"
            placeholder="🔍 Buscar libro o autor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="col-md-3">

          <select
            className="form-select"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Todos</option>
            <option>Fantasía</option>
            <option>Ciencia Ficción</option>
            <option>Aventura</option>
            <option>Terror</option>
            <option>Romance</option>
            <option>Distopía</option>
            <option>Suspenso</option>
            <option>Ficción</option>
          </select>

        </div>

        <div className="col-md-4">

          <select
            className="form-select"
            value={order}
            onChange={(e) => setOrder(e.target.value)}
          >
            <option value="">Ordenar por...</option>
            <option value="az">Nombre A-Z</option>
            <option value="priceAsc">
              Precio menor
            </option>
            <option value="priceDesc">
              Precio mayor
            </option>
          </select>

        </div>

      </div>

      <div className="row">

        {filteredBooks.map((book) => (

          <div
            className="col-md-4 mb-4"
            key={book.id}
          >

            <div
              className="card h-100 shadow"
              style={{
                transition: ".3s",
                borderRadius: "15px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "scale(1.03)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "scale(1)";
              }}
            >

              <img
                src={
                  book.image ||
                  "https://via.placeholder.com/300x450"
                }
                className="card-img-top"
                alt={book.title}
                style={{
                  height: "350px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body d-flex flex-column">

                <h5 className="fw-bold">
                  {book.title}
                </h5>

                <p className="text-muted">
                  {book.author}
                </p>

                <span className="badge bg-secondary mb-2">
                  {book.genre}
                </span>

                <h3 className="text-success">
                  ${book.price}
                </h3>

                <div className="mt-auto">

                  <button
                    className="btn btn-warning w-100 mb-2"
                    onClick={() => addToCart(book)}
                  >
                    🛒 Agregar al carrito
                  </button>

                  <Link
                    to={`/book/${book.id}`}
                    className="btn btn-primary w-100"
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