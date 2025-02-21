import React from "react";
import "./ConfirmationPopUp.css";

export default function ConfirmationPopUp({ message, onConfirm, onCancel }) {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <p>{message}</p>
        <button className="YesButton" onClick={onConfirm}>Yes</button>
        <button className="NopeButton" onClick={onCancel}>Nope</button>
      </div>
    </div>
  );
}
