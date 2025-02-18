import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5005/BooksData";

export default function BooksList() {
  const [books, setBooks] = useState([]);

  const getAllBooks = () => {
    axios
      .get(`${API_URL}`)
      .then((response) => setBooks(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  return (
    <div className="page">
      <div className="books-list-page">
        <h1>Books List</h1>
        <div>
          {books.map((book) => (
            <div key={book.id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <img src={book.imageUrl} alt={book.title} />
              <Link to={`/books/${book.id}`}>Ver más</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
