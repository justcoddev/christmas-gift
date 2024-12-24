import React, { useState } from 'react';
import { useFormData } from '../utils/FormDataContext';
import { useNavigate } from 'react-router-dom';
import GiftAnimation from './GiftAnimation';

const Home = () => {
  const { formData, setFormData } = useFormData();
  const [generatedURL, setGeneratedURL] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateURL = () => {
    const params = new URLSearchParams(formData).toString();
    const uniqueURL = `${window.location.origin}/#/christmas-gift?${params}`;
    setGeneratedURL(uniqueURL);
  };

  const navigateToURL = () => {
    if (generatedURL) {
      navigate(generatedURL.replace(`${window.location.origin}/#/`, ''));
    }
  };

  const copyToClipboard = async () => {
    if (generatedURL) {
      try {

        await navigator.clipboard.writeText(generatedURL);
        alert('URL copiada al portapapeles');
      } catch (err) {

        const textArea = document.createElement('textarea');
        textArea.value = generatedURL;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('URL copiada al portapapeles');
      }
    }
  };


  const isFormComplete = formData.message && formData.from && formData.to;

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

        <div className="mt-6 space-y-4">
          <button
            type="button"
            onClick={generateURL}
            disabled={!isFormComplete}
            className={`px-4 py-2 rounded w-full ${isFormComplete
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
          >
            Generar URL
          </button>
          {generatedURL && (
            <div className="flex items-center gap-2 mt-4">
              <input
                type="text"
                readOnly
                value={generatedURL}
                className="w-full sm:w-[250px] md:w-[300px] lg:w-[400px] border border-gray-300 rounded-lg shadow-sm p-2"
              />
              <button
                type="button"
                onClick={copyToClipboard}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
              >
                Copiar
              </button>
            </div>
          )}
          {generatedURL && (
            <button
              type="button"
              onClick={navigateToURL}
              className="bg-green-500 text-white px-4 py-2 rounded w-full mt-4"
            >
              Ir a la URL Generada
            </button>
          )}
        </div>
      </div>

      <div className="overflow-auto pt-4 md:pt-0 md:pl-4 flex justify-center items-center">
        <GiftAnimation />
      </div>
    </div>
  );
};

export default Home;
