import { useState, useEffect } from 'react';
import { getBooks } from '../../api/bookApi';
import './BooksList.css';
import BookCard from '../../components/BookCard/BookCard.jsx';
import AddButton from '../../components/Buttons/AddButton/AddButton.jsx';

export default function BookList({ books, onCreateBook, onDeleteBook }) {

  return (
    <div className="page">
      <div className="books-list-page">
        <AddButton onCreateBook={onCreateBook} />
        <div className="books-list">
          {books.map((book) => (
            <BookCard key={book.id} book={book} onDeleteBook={onDeleteBook} />
          ))}
        </div>
      </div>
    </div>
  );
}