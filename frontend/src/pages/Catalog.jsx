import { useEffect, useState } from "react";
import api from "../services/api";
import BookCard from "../components/BookCard";

function Catalog() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    try {

      const response = await api.get("/books");

      setBooks(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (
    <div className="container py-5">

      <h1 className="text-center mb-5">
        Catálogo BookVerse
      </h1>

      <div className="row">

        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
          />
        ))}

      </div>

    </div>
  );
}

export default Catalog;