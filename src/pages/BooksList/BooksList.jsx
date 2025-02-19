import { useState, useEffect } from 'react';
import { getBooks } from '../../api/bookApi';
import BookCard from '../../components/BookCard/BookCard.jsx';
import './BooksList.css';
import AddButton from '../../components/Buttons/AddButton/AddButton.jsx';

export default function BookList({ onCreateBook, onDeleteBook }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const booksData = await getBooks();
        if (Array.isArray(booksData)) {
          setBooks(booksData);
        } else {
          setError('No se pudo obtener la lista de libros.');
        }
      } catch (err) {
        setError('Hubo un error al cargar los libros.');
      } finally {
        setLoading(false); // Indicamos que terminó la carga
      }
    };
    fetchBooks();
  }, []);

  return (
    <div className="page">
      <div className="books-list-page">

        <AddButton onClick={() => onCreateBook({ title: 'New Book', author: 'Unknown', imageUrl: '' })} />

        <div className="books-list">
          {books.map((book) => (
            <BookCard key={book.id} book={book} onDeleteBook={onDeleteBook} />
          ))}
        </div>
      </div>
    </div>
  );
}