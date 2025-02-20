import React from 'react';
import './DeleteButton.css';

function DeleteButton({ onClick }) {
  return (
    <button className="delete-button" onClick={onClick}>
      ✕
    </button>
  );
}

export default DeleteButton;
