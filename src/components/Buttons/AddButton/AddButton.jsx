import React, { useState } from "react";
import "./AddButton.css";
import AddBookForm from "../../Forms/Add/AddBookForm";

function AddButton({ onCreateBook }) {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <button className="add-button" onClick={handleClick}>
        Add book
      </button>
      {showForm && (
        <AddBookForm onCreateBook={onCreateBook} onClose={handleCloseForm} />
      )}
    </div>
  );
}

export default AddButton;