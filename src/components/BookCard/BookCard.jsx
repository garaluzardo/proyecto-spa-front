import { Link } from 'react-router-dom';
import './BookCard.css';
import LikeButton from '../Buttons/LikeButton/LikeButton';
import DeleteButton from '../Buttons/DeleteButton/DeleteButton';

export default function BookCard({ book, onDeleteBook }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      {book.image_Url && <img src={book.image_Url} alt={book.title} />}
      <p>Author: {book.author}</p>
      <p>Publisher: {book.publisher}</p>
      <p>Pages: {book.pages}</p>
      <p>Bookshelve: {book.bookshelve}</p>
      <div className="actions">
        <Link to={`/books/${book.id}`}>Ver más</Link>
        <DeleteButton onClick={() => onDeleteBook(book.id)} />
      </div>
      <LikeButton />
    </div>
  );
}

