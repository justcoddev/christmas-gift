import React, { useState } from 'react';
import GiftAnimation from './GiftAnimation';

const Home = () => {
  const [formData, setFormData] = useState({
    message: '',
    from: '',
    to: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen p-4 pt-8">
      <div className="overflow-auto border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 md:pr-4">
        <h1 className="text-2xl font-bold text-red-500 mb-4">Crea Tu Mensaje Especial</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-1">
              Mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          <div>
            <label htmlFor="from" className="block text-base font-medium text-gray-700 mb-1">
              De:
            </label>
            <input
              id="from"
              name="from"
              type="text"
              value={formData.from}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="to" className="block text-base font-medium text-gray-700 mb-1">
              Para:
            </label>
            <input
              id="to"
              name="to"
              type="text"
              value={formData.to}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 p-2"
              placeholder="Nombre del destinatario"
            />
          </div>
        </form>
      </div>

      <div className="overflow-auto pt-4 md:pt-0 md:pl-4 flex justify-center items-center">
        <div className="w-full h-auto flex justify-center items-center">
          <GiftAnimation formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default Home;
