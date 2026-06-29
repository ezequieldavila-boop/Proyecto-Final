import { useEffect, useState } from "react";
import api from "../services/api";

function Admin() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const [editingId, setEditingId] = useState(null);

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

  const clearForm = () => {
    setEditingId(null);
    setTitle("");
    setAuthor("");
    setGenre("");
    setPrice("");
    setStock("");
    setDescription("");
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

      alert("Libro agregado correctamente");

      clearForm();
      loadBooks();

    } catch (error) {
      console.log(error);
      alert("Error al agregar libro");
    }
  };

  const editBook = (book) => {
    setEditingId(book.id);

    setTitle(book.title);
    setAuthor(book.author);
    setGenre(book.genre);
    setPrice(book.price);
    setStock(book.stock);
    setDescription(book.description);
  };

  const updateBook = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await api.put(
        `/books/${editingId}`,
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

      alert("Libro actualizado");

      clearForm();
      loadBooks();

    } catch (error) {
      console.log(error);
      alert("Error al actualizar");
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
      alert("No se pudo eliminar");
    }
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">

      <h1 className="mb-4 text-center">
        Panel de Administración
      </h1>

      <div className="card shadow mb-4">

        <div className="card-body">

          <h3 className="mb-3">
            {editingId ? "Editar Libro" : "Agregar Libro"}
          </h3>

          <form onSubmit={editingId ? updateBook : createBook}>

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
              className="form-control mb-2"
              type="number"
              placeholder="Precio"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <input
              className="form-control mb-2"
              type="number"
              placeholder="Stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />

            <textarea
              className="form-control mb-3"
              placeholder="Descripción"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button className="btn btn-success me-2">
              {editingId ? "Guardar cambios" : "Agregar Libro"}
            </button>

            {editingId && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={clearForm}
              >
                Cancelar
              </button>
            )}

          </form>

        </div>

      </div>

      <input
        className="form-control mb-4"
        placeholder="Buscar libro..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table table-bordered table-hover">

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

          {filteredBooks.map((book) => (

            <tr key={book.id}>

              <td>{book.id}</td>

              <td>{book.title}</td>

              <td>{book.author}</td>

              <td>${book.price}</td>

              <td>{book.stock}</td>

              <td>

                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => editBook(book)}
                >
                  Editar
                </button>

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