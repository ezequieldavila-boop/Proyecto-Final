import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import api from "../services/api";

function Catalog() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");

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

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchesGenre =
      genre === "" || book.genre === genre;

    return matchesSearch && matchesGenre;
  });

  return (
    <div className="container py-5">

      <h1 className="text-center fw-bold mb-4">
        📚 Catálogo BookVerse
      </h1>

      <div className="row mb-4">

        <div className="col-md-8">
          <input
            className="form-control form-control-lg"
            placeholder="🔎 Buscar por título o autor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select
            className="form-select form-select-lg"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">Todos los géneros</option>
            <option>Fantasía</option>
            <option>Ciencia Ficción</option>
            <option>Terror</option>
            <option>Romance</option>
            <option>Distopía</option>
            <option>Suspenso</option>
            <option>Aventura</option>
            <option>Ficción</option>
          </select>
        </div>

      </div>

      <div className="row">

        {filteredBooks.map((book) => (

          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={book.id}>

            <div
              className="card h-100 border-0 shadow-sm"
              style={{
                transition: ".3s",
                borderRadius: "18px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 35px rgba(0,0,0,.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 .125rem .25rem rgba(0,0,0,.075)";
              }}
            >

              <img
                src={book.image}
                alt={book.title}
                className="card-img-top"
                style={{
                  height: "330px",
                  objectFit: "cover",
                  borderTopLeftRadius: "18px",
                  borderTopRightRadius: "18px",
                }}
              />

              <div className="card-body d-flex flex-column">

                <span className="badge bg-primary mb-2">
                  {book.genre}
                </span>

                <h5 className="fw-bold">
                  {book.title}
                </h5>

                <p className="text-muted mb-1">
                  {book.author}
                </p>

                <h3
                  className="text-success fw-bold mt-2"
                >
                  ${book.price}
                </h3>

                <small className="text-success mb-3">
                  Stock disponible: {book.stock}
                </small>

                <button
                  className="btn btn-warning fw-bold mb-2"
                  onClick={() => addToCart(book)}
                >
                  🛒 Agregar al carrito
                </button>

                <Link
                  to={`/book/${book.id}`}
                  className="btn btn-dark"
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