import React from 'react';
import './UpdateButton.css';

function UpdateButton({ onClick }) {
  return (
    <button className="update-button" onClick={onClick}>
      Save 💾
    </button>
  );
}

export default UpdateButton;
