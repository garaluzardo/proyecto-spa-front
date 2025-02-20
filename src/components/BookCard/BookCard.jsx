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
      {/* Div para la imagen del libro */}
      <div className="book-image-container">
        {book.image_Url && (
          <Link to={`/books/${book.id}`}>
            <img src={book.image_Url} alt={book.title} />
          </Link>
        )}
      </div>

      {/* Div para los botones de Like y Delete */}
      <div className="book-actions">
        <LikeButton />
        <DeleteButton onClick={handleDeleteClick} />
      </div>

      {/* Popup de confirmación para eliminar el libro */}
      {showPopup && (
        <ConfirmationPopUp
          message="Are you sure?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}