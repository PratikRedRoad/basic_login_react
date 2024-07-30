// PopUp.js
import React from 'react';
import './PopUp.css';

const PopUp = ({ message, onClose }) => {
    console.log("PopUp component called");
    console.log(message);
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Error</h2>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PopUp;
