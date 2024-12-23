import React, { useState } from 'react';
import './Card.css'; // Asegúrate de que el archivo CSS esté correctamente vinculado

const Card = () => {
  return (
    <div className="valentines-day-card">
      <input id="open" type="checkbox" />
      <label className="open" htmlFor="open"></label>

      <div className="card-front">
        {/* <div className="note">Click to Open</div> */}
      </div>

      <div className="card-inside">
        {/* <div className="text-one"></div>
        <div className="heart"></div>
        <div className="smile"></div>
        <div className="eyes"></div> */}
      </div>
    </div>
  );
};

export default Card;
