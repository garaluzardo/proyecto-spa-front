import React, { useState } from "react";
import "./AddBookForm.css";

function AddBookForm({ onCreateBook, onClose }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [publisher, setPublisher] = useState("");
  const [pages, setPages] = useState("");
  const [bookshelve, setBookshelve] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
      image_Url: imageUrl,
      publisher,
      pages: parseInt(pages),
      bookshelve,
    };

    onCreateBook(newBook);

    setTitle("");
    setAuthor("");
    setImageUrl("");
    setPublisher("");
    setPages("");
    setBookshelve("");

    onClose();
  };

  return (
    <div className="add-book-form-overlay">
      <div className="add-book-form">
        <h2>Add a New Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Publisher</label>
            <input
              type="text"
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Pages</label>
            <input
              type="number"
              value={pages}
              onChange={(e) => setPages(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Bookshelve</label>
            <input
              type="text"
              value={bookshelve}
              onChange={(e) => setBookshelve(e.target.value)}
              required
            />
          </div>
          <div className="form-actions">
            <button type="submit" >Save</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBookForm;