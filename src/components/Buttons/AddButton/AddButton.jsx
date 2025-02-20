import React, { useState } from "react";
import "./AddButton.css";
import AddBookForm from "../../Forms/Add/AddBookForm"; // Importar el formulario

function AddButton({ onCreateBook }) {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true); // Mostrar el formulario al hacer clic
  };

  const handleCloseForm = () => {
    setShowForm(false); // Ocultar el formulario
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