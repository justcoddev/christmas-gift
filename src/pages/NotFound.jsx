import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const NotFound = () => {
  const navigate = useNavigate();

  // Estados para los campos del formulario
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");

  // Función para verificar si ambos campos están llenos
  const areFieldsFilled = field1.trim() !== "" && field2.trim() !== "";

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full text-center px-5">
        {/* Imagen del Grinch */}
        <div className="mb-6">
          <img
            src="/giphy.gif"
            alt="Grinch"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Título divertido */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          ¡Oops! 404 - Página Extraviada
        </h2>
        {/* Mensaje divertido */}
        <p className="text-gray-600 mb-4">
          La página que buscas se fue a hacer compras navideñas con el Grinch. ¡No la encontramos!
        </p>
        {/* Campos de entrada */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Campo 1"
            value={field1}
            onChange={(e) => setField1(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-2 focus:outline-none focus:border-red-500"
          />
          <input
            type="text"
            placeholder="Campo 2"
            value={field2}
            onChange={(e) => setField2(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-red-500"
          />
        </div>
        {/* Botón para volver al inicio */}
        <button
          onClick={() => navigate("/")}
          disabled={!areFieldsFilled} // Botón deshabilitado si los campos no están llenos
          className={`w-full py-2 px-4 rounded-lg shadow ${areFieldsFilled
            ? "bg-red-500 text-white hover:bg-red-600"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          Volver al inicio y salvar la Navidad
        </button>
      </div>
    </div>
  );
};

export default NotFound;
