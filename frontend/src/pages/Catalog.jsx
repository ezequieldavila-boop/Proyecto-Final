import { useEffect, useState, useContext } from "react";
import api from "../services/api";
import { CartContext } from "../context/CartContext";

function Catalog() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const res = await api.get("/books");
      setBooks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const filtered = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5 fade-in">

      <div className="row mb-4">
        <div className="col-md-6 mx-auto">
          <input
            className="form-control"
            placeholder="🔎 Buscar libros..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="row">

        {filtered.map((book) => (
          <div className="col-md-3 mb-4" key={book.id}>

            <div className="card h-100 shadow-sm book-card">

              <img
                src={book.image || "https://via.placeholder.com/300x400?text=Libro"}
                className="card-img-top"
                style={{ height: "240px", objectFit: "cover" }}
              />

              <div className="card-body d-flex flex-column">

                <h5>{book.title}</h5>
                <p className="text-muted">{book.author}</p>

                <h5 className="text-success">${book.price}</h5>

                <button
                  className="btn btn-warning mt-auto"
                  onClick={() => {
                    const token = localStorage.getItem("token");

                    if (!token) {
                      alert("❌ Tenés que iniciar sesión para comprar");
                      return;
                    }

                    addToCart(book);
                  }}
                >
                  🛒 Agregar al carrito
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Catalog;