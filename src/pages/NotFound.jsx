import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full text-center px-5">
        {/* Imagen del Grinch */}
        <div className="mb-6">
          <img
            src="/src/assets/gif/giphy.gif"
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
        {/* Botón para volver al inicio */}
        <button
          onClick={() => navigate("/")}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600 focus:outline-none"
        >
          Volver al inicio y salvar la Navidad
        </button>
      </div>
    </div>
  );
};

export default NotFound;
