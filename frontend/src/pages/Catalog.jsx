import { useEffect, useState } from "react";
import api from "../services/api";

function Catalog() {
  const [books, setBooks] = useState([]);

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

                <h4>${book.price}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;