import { useState, useEffect } from 'react';
import { getBooks } from '../../api/bookApi';
import BookCard from '../../components/BookCard/BookCard.jsx'; // Importamos el nuevo componente BookCard
import './BooksList.css';

export default function BookList({ onCreateBook, onDeleteBook }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado para manejar errores

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
        <h1>Books List</h1>

        {/* Botón para agregar un libro */}
        <button onClick={() => onCreateBook({ title: 'New Book', author: 'Unknown', imageUrl: '' })}>
          Add New Book
        </button>

        <div className="books-list">
          {books.map((book) => (
            <BookCard key={book.id} book={book} onDeleteBook={onDeleteBook} />
          ))}
        </div>
      </div>
    </div>
  );
}