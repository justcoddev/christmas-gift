import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const navItemsMobile = [
  { id: 1, name: "", emoji: "🏠", link: "/" },
  { id: 2, name: "", emoji: "🎄", link: "/christmas-gift" },
  { id: 3, name: "", emoji: "🟢😠", link: "/not-found" },
];

const phrases = [
  "«Nadie debería estar solo en Navidad». – Cindy Lou Who",
  "«Me vendría bien un poco de interacción social». – El Grinch",
  "«Por muy diferente que parezca un Quién, siempre será recibido con alegría navideña». – Cindy Lou Quién",
  "«AYÚDAME… me estoy SINTIENDO». – El Grinch",
  "«¡Ya sé qué hacer! Me haré rápidamente un gorro de Santy Claus y un abrigo». – El Grinch",
  "«El lodo tóxico de un hombre es el popurrí de otro». – El Grinch",
  "«No necesito nada más para Navidad que esto de aquí. Mi familia». – Lou Lou Who",
  "«Quizá la Navidad no venga de una tienda. Tal vez la Navidad… tal vez… ¡signifique un poco más!» – El Grinch",
  "«El día de Navidad siempre será mientras tengamos nosotros».",
  "«Santa, no te olvides del Grinch. Sé que es malo, peludo y maloliente, y que tiene las manos frías y húmedas, pero creo que es un poco… dulce». – Cindy Lou Who",
  "«Mira, no quiero hacer olas, ¡pero toda esta temporada navideña es estúpida, estúpida, estúpida!». – El Grinch",
  "«¡Y luego! ¡Oh, el ruido! ¡Oh, el ruido! ¡Ruido! ¡Ruido! ¡Ruido! ¡Hay una cosa que odio! ¡Todo el RUIDO! ¡EL RUIDO! ¡RUIDO! RUIDO!» – El Grinch",
  "«¿Las fiestas de quién son qué?» – El Grinch",
  "«Los niños de hoy. Tan insensibilizados por las películas y la televisión». – El Grinch",
  "«Aunque sea tan atroz, no hay lugar como el hogar.» – El Grinch",
  "«¡Debo encontrar alguna manera de evitar que llegue la Navidad!» – El Grinch",
];

const Footer = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 15000); // Cambia cada 15 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Mobile Footer Navigation */}
      <footer className="bg-white border-t border-gray-200 md:hidden fixed bottom-0 left-0 w-full z-30">
        <div className="flex justify-around items-center py-2">
          {navItemsMobile.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              className={({ isActive }) =>
                `flex flex-col items-center text-gray-700 hover:text-black ${isActive ? "text-black" : ""
                }`
              }
            >
              <span className="text-2xl">{item.emoji}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </footer>

      {/* Footer for Desktop */}
      <footer className="md:block">
        <div className="max-w-[1200px] mx-auto px-6 py-32 text-center">
          {/* Título */}
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Christmas Gift
          </h2>
          {/* Rotating Phrase */}
          <p className="text-lg text-gray-600 font-medium mb-4">
            {phrases[currentPhraseIndex]}
          </p>

          {/* Navegación */}
          <nav className="md:flex justify-center gap-8 mb-6 hidden">
            <NavLink
              to="/about"
              className="text-gray-700 hover:text-black text-base"
            >
              About us
            </NavLink>
            <NavLink
              to="/privacy"
              className="text-gray-700 hover:text-black text-base"
            >
              Privacy
            </NavLink>
            <NavLink
              to="/terms"
              className="text-gray-700 hover:text-black text-base"
            >
              Terms
            </NavLink>
            <NavLink
              to="/blog"
              className="text-gray-700 hover:text-black text-base"
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-700 hover:text-black text-base"
            >
              Contact
            </NavLink>
          </nav>

          {/* Nota final */}
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Built with ❤️? by a justcoddev.
          </p>
        </div>
      </footer>

    </>
  );
};

export default Footer;
