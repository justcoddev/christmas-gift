import React, { useEffect, useState } from 'react';
import './Card.css';

const Card = () => {
  const [isSwitched, setIsSwitched] = useState(false); // Controla el cambio de clases sin "2"
  const [isSwitched2, setIsSwitched2] = useState(false); // Controla el cambio de clases con "2"
  const [isVisible, setIsVisible] = useState(false); // Controla la visibilidad de las clases sin "2"
  const [isVisible2, setIsVisible2] = useState(true); // Controla la visibilidad de las clases con "2"

  useEffect(() => {
    // Activa las clases con "2" automáticamente después de 3 segundos
    const timerOpen2 = setTimeout(() => {
      document.getElementById('open2').checked = true;
      setIsSwitched2(true); // Cambia el estado para las clases con "2"

      // Haz que las clases con "2" se vuelvan invisibles antes de activar las clases sin "2"
      setIsVisible2(false); // Hace invisibles las clases con "2"

      // Oculta las clases con "2" y activa las clases sin "2" inmediatamente después
      const timerSwitch = setTimeout(() => {
        setIsVisible(true); // Haz visibles las clases sin "2"
        setIsSwitched(true); // Cambia al estado con las clases sin "2"
      }, 10); // Cambiar casi de inmediato

      return () => clearTimeout(timerSwitch);
    }, 2000);

    return () => clearTimeout(timerOpen2);
  }, []);

  useEffect(() => {
    if (isSwitched) {
      // Activa la tarjeta principal después de un breve tiempo
      const timerOpen = setTimeout(() => {
        document.getElementById('open').checked = true;
      }, 500); // 3 segundos después de activar las clases sin "2"

      return () => clearTimeout(timerOpen);
    }
  }, [isSwitched]);

  return (
    <div className={isSwitched ? "valentines-day-card" : "valentines-day-card2"}>
      {!isSwitched && (
        <>
          <input id="open2" type="checkbox" checked={isSwitched2} readOnly />
          <div
            className="card-front2"
            style={{ visibility: isVisible2 ? 'visible' : 'hidden' }} // Controla la visibilidad de las clases con "2"
          ></div>
          <div
            className="card-inside2"
            style={{ visibility: isVisible2 ? 'visible' : 'hidden' }} // Controla la visibilidad de las clases con "2"
          ></div>
        </>
      )}
      {isSwitched && (
        <>
          <input id="open" type="checkbox" />
          <div
            className="card-front"
            style={{ visibility: isVisible ? 'visible' : 'hidden' }} // Controla la visibilidad de las clases sin "2"
          ></div>
          <div
            className="card-inside"
            style={{ visibility: isVisible ? 'visible' : 'hidden' }} // Controla la visibilidad de las clases sin "2"
          >aqui va el mensajito </div>
        </>
      )}

      <label
        className={isSwitched ? "open" : "open2"}
        htmlFor={isSwitched ? "open" : "open2"}
      ></label>
    </div>
  );
};

export default Card;
