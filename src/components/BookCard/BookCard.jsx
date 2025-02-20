import { Link } from 'react-router-dom';
import { useState } from 'react';
import './BookCard.css';
import LikeButton from '../Buttons/LikeButton/LikeButton';
import DeleteButton from '../Buttons/DeleteButton/DeleteButton';
import ConfirmationPopUp from '../PopUp/ConfirmationPopUp';

export default function BookCard({ book, onDeleteBook }) {

  // Manejo del ConfirmationPopUp que aparece cuando el usuario hace click en el botón de eliminar
  const [showPopup, setShowPopup] = useState(false); 

  const handleDeleteClick = () => {
    setShowPopup(true); 
  };

  const handleConfirmDelete = () => {
    onDeleteBook(book.id);
    setShowPopup(false);
  };

  const handleCancel = () => {
    setShowPopup(false);
  };

  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      {book.image_Url && (
        <Link to={`/books/${book.id}`}>
          <img src={book.image_Url} alt={book.title} />
        </Link>
      )}
      <p>Author: {book.author}</p>
      <p>Publisher: {book.publisher}</p>
      <p>Pages: {book.pages}</p>
      <p>Bookshelve: {book.bookshelve}</p>
      <div className="actions">
        <DeleteButton onClick={handleDeleteClick} />
      </div>
      <LikeButton />
      {showPopup && (
        <ConfirmationPopUp
          message="Are you shur?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}

