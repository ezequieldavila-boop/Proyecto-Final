import { useEffect, useState } from "react";
import api from "../services/api";

function Admin() {
  const [books, setBooks] = useState([]);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");

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

  const createBook = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await api.post(
        "/books",
        {
          title,
          author,
          genre,
          price,
          stock,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      setAuthor("");
      setGenre("");
      setPrice("");
      setStock("");
      setDescription("");

      loadBooks();

      alert("Libro agregado correctamente");
    } catch (error) {
      console.log(error);
      alert("Error al agregar libro");
    }
  };

  const deleteBook = async (id) => {
    if (!window.confirm("¿Eliminar este libro?")) return;

    try {
      const token = localStorage.getItem("token");

      await api.delete(`/books/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      loadBooks();
    } catch (error) {
      console.log(error);
      alert("No se pudo eliminar el libro");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Panel de Administración</h1>

      <div className="card shadow mb-4">
        <div className="card-body">
          <h3 className="mb-3">Agregar Libro</h3>

          <form onSubmit={createBook}>
            <input
              className="form-control mb-2"
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              className="form-control mb-2"
              placeholder="Autor"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />

            <input
              className="form-control mb-2"
              placeholder="Género"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            />

            <input
              type="number"
              className="form-control mb-2"
              placeholder="Precio"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <input
              type="number"
              className="form-control mb-2"
              placeholder="Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />

            <textarea
              className="form-control mb-3"
              placeholder="Descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <button className="btn btn-success">
              Agregar Libro
            </button>
          </form>
        </div>
      </div>

      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Autor</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>${book.price}</td>
              <td>{book.stock}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteBook(book.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;