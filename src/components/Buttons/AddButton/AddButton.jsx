import React from 'react';
import './AddButton.css';

function AddButton({ onClick }) {
  return (
    <button className="add-button" onClick={onClick}>
      Add book
    </button>
  );
}

export default AddButton;
