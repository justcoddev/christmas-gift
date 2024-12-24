import React from 'react';
import GiftAnimation from './GiftAnimation';

const Home = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen bg-gray-100 p-4">
      {/* Columna 1: Formulario */}
      <div className="overflow-auto border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 md:pr-4">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Formulario</h1>
        <form className="space-y-6">
          {/* Mensaje */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          {/* De */}
          <div>
            <label htmlFor="from" className="block text-sm font-medium text-gray-700 mb-1">
              De:
            </label>
            <input
              id="from"
              name="from"
              type="text"
              className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
              placeholder="Tu nombre"
            />
          </div>

          {/* Para */}
          <div>
            <label htmlFor="to" className="block text-sm font-medium text-gray-700 mb-1">
              Para:
            </label>
            <input
              id="to"
              name="to"
              type="text"
              className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
              placeholder="Nombre del destinatario"
            />
          </div>

          {/* Botón Enviar */}
          <div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>

      {/* Columna 2 */}
      <div className="overflow-auto pt-4 md:pt-0 md:pl-4 flex justify-center items-center">
        {/* Contenedor flexible que se ajusta al tamaño de la animación */}
        <div className="w-full h-auto flex justify-center items-center">
          <GiftAnimation />
        </div>
      </div>
    </div>
  );
};

export default Home;
