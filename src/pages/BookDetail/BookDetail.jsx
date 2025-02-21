import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BookDetail.css";

export default function BookDetail({ books, onUpdateBook }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id === Number(id));

  const [editedBook, setEditedBook] = useState(book || {});
  const [personalNotes, setPersonalNotes] = useState(book?.notes || "");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setEditedBook(book || {});
    setPersonalNotes(book?.notes || "");
  }, [book]);

  const handleChange = (e) => {
    setEditedBook({ ...editedBook, [e.target.name]: e.target.value });
  };

  const handleNotesChange = (e) => {
    setPersonalNotes(e.target.value);
  };

  const handleSave = () => {
    onUpdateBook(editedBook.id, { ...editedBook, notes: personalNotes });
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <div className="overlay">
      <div className="book-detail-popup">
        <button className="close-btn" onClick={() => navigate(-1)}>X</button>
        <h2>{editedBook.title}</h2>
        {editedBook.image_Url && <img src={editedBook.image_Url} alt={editedBook.title} />}

        {!isEditing ? (
          <div>
            <p><strong>Author:</strong> {editedBook.author}</p>
            <p><strong>Publisher:</strong> {editedBook.publisher}</p>
            <p><strong>Pages:</strong> {editedBook.pages}</p>
            <p><strong>Bookshelf:</strong> {editedBook.bookshelve}</p>
            <p><strong>Personal Notes:</strong> {personalNotes}</p>
            <button onClick={handleEdit}>Edit</button>
          </div>
        ) : (
          <div>
            <label>Author:</label>
            <input type="text" name="author" value={editedBook.author} onChange={handleChange} />

            <label>Publisher:</label>
            <input type="text" name="publisher" value={editedBook.publisher} onChange={handleChange} />

            <label>Pages:</label>
            <input type="number" name="pages" value={editedBook.pages} onChange={handleChange} />

            <label>Bookshelve:</label>
            <input type="text" name="bookshelve" value={editedBook.bookshelve} onChange={handleChange} />

            <label>Personal Notes:</label>
            <textarea value={personalNotes} onChange={handleNotesChange} />

            <button onClick={handleSave}>Save Changes</button>
          </div>
        )}
      </div>
    </div>
  );
}
