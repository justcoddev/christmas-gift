import React, { useEffect, useState } from 'react';
import './Card.css'; // Asegúrate de que el archivo CSS esté correctamente vinculado

const Card = () => {
  const [isSwitched, setIsSwitched] = useState(false); // Controla el cambio de clases
  const [isFrontOpened, setIsFrontOpened] = useState(false); // Controla la animación de la tarjeta

  useEffect(() => {
    // Activa la tarjeta con clases "2" después de 3 segundos
    const timerOpen = setTimeout(() => {
      document.getElementById('open2').checked = true;

      // Activa las clases sin "2" después de 2 segundos adicionales
      const timerSwitch = setTimeout(() => {
        setIsSwitched(true); // Cambia al estado con las clases sin "2"
        document.getElementById('open2').checked = false; // Asegúrate de desactivar el checkbox "2"

        // Después de 3 segundos, activa la animación en la clase card-front
        const timerOpenFront = setTimeout(() => {
          document.getElementById('open').checked = true; // Abre la card-front automáticamente
        }, 3000);

        return () => clearTimeout(timerOpenFront); // Limpia el temporizador de la animación front
      }, 2000);

      return () => clearTimeout(timerSwitch); // Limpia el segundo temporizador
    }, 3000);

    return () => clearTimeout(timerOpen); // Limpia el primer temporizador
  }, []);

  return (
    <div className={isSwitched ? "valentines-day-card" : "valentines-day-card2"}>
      {!isSwitched && <input id="open2" type="checkbox" />}
      {isSwitched && <input id="open" type="checkbox" />}
      <label className={isSwitched ? "open" : "open2"} htmlFor={isSwitched ? "open" : "open2"}></label>

      {isSwitched ? (
        <>
          <div className="card-front"></div>
          <div className="card-inside"></div>
        </>
      ) : (
        <>
          <div className="card-front2"></div>
          <div className="card-inside2"></div>
        </>
      )}
    </div>
  );
};

export default Card;
