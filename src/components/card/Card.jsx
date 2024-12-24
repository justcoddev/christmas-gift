import React, { useEffect, useState } from "react";
import "./Card.css";

const Card = ({ isActive, onClose }) => {
  const [isSwitched, setIsSwitched] = useState(false); // Controla el cambio de clases sin "2"
  const [isSwitched2, setIsSwitched2] = useState(false); // Controla el cambio de clases con "2"
  const [isVisible, setIsVisible] = useState(false); // Controla la visibilidad de las clases sin "2"
  const [isVisible2, setIsVisible2] = useState(true); // Controla la visibilidad de las clases con "2"
  const [isReturning, setIsReturning] = useState(false); // Controla el retorno al estado inicial

  useEffect(() => {
    if (isActive && !isReturning) {
      // Paso 1: Mostrar solo `card-inside2` durante 2 segundos
      setIsVisible2(true); // Asegura que `card-inside2` sea visible
      setIsSwitched2(false); // Desactiva `card-front2`

      const timerVisibleInside2 = setTimeout(() => {
        // Paso 2: Activar `card-front2` y su transición
        document.getElementById("open2").checked = true;
        setIsSwitched2(true); // Activa `card-front2`

        // Después de 500ms, ocultar `card-inside2` y preparar el cambio a `card-front`
        const timerSwitchToFront = setTimeout(() => {
          setIsVisible2(false); // Oculta `card-inside2`
          setIsVisible(true); // Hace visible `card-front`

          // Activar el `checked` de `card-front`
          const openInput = document.getElementById("open");
          if (openInput) openInput.checked = true;

          setIsSwitched(true); // Cambia al estado principal
          setIsSwitched2(false); // Desactiva el estado de `card-front2`
        }, 500); // Tiempo para transición de `card-front2` -> `card-front`

        return () => clearTimeout(timerSwitchToFront);
      }, 500); // Tiempo que `card-inside2` está visible

      return () => clearTimeout(timerVisibleInside2);
    }
  }, [isActive, isReturning]);


  useEffect(() => {
    if (isSwitched) {
      // Activa la tarjeta principal después de un breve tiempo
      const timerOpen = setTimeout(() => {
        document.getElementById("open").checked = true;
      }, 500);

      return () => clearTimeout(timerOpen);
    }
  }, [isSwitched]);

  const handleReverse = () => {
    setIsReturning(true);

    // Paso 1: Desactiva la card-front
    const openInput = document.getElementById("open");
    if (openInput) openInput.checked = false;

    setTimeout(() => {
      // Paso 2: Oculta la card-front y hace visible la card-front2 y card-inside2
      setIsVisible(false);
      setIsVisible2(true);
      setIsSwitched(false);
      setIsSwitched2(true);

      // Activa el checked de card-front2
      const open2Input = document.getElementById("open2");
      if (open2Input) open2Input.checked = true;

      setTimeout(() => {
        // Paso 3: Desactiva la card-front2
        if (open2Input) open2Input.checked = false; // Asegúrate de desactivar el checked
        setIsSwitched2(false);

        setTimeout(() => {
          // Finaliza el reversa y limpia los estados
          setIsReturning(false);

          // Llama a onClose al finalizar
          if (onClose) {
            onClose();
          }
        }, 300); // Tiempo para limpiar después de desactivar card-front2
      }, 300); // Tiempo para mantener activada la card-front2
    }, 300); // Tiempo para ocultar la card-front
  };



  return (
    <div className={isSwitched ? "valentines-day-card" : "valentines-day-card2"}>
      {!isSwitched && (
        <>
          <input id="open2" type="checkbox" checked={isSwitched2} readOnly />
          <div
            className="card-front2"
            style={{ visibility: isVisible2 ? "visible" : "hidden" }}
          ></div>
          <div
            className="card-inside2"
            style={{ visibility: isVisible2 ? "visible" : "hidden" }}
          ></div>
        </>
      )}
      {isSwitched && (
        <>
          <input id="open" type="checkbox" />
          <div
            className="card-front"
            style={{ visibility: isVisible ? "visible" : "hidden" }}
          ></div>
          <div
            className="card-inside"
            style={{ visibility: isVisible ? "visible" : "hidden" }}
          >
            Aquí va el mensajito
          </div>
        </>
      )}

      <label
        className={isSwitched ? "open" : "open2"}
        onClick={isReturning ? null : handleReverse} // Solo activa la reversa si no está en progreso
      ></label>
    </div>
  );
};

export default Card;
