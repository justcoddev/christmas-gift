import Github from "@/components/icons/GitHub";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const navItemsDesktop = [
  { id: 1, name: "Christmas Gift", link: "/christmas-gift" },
  { id: 2, name: "", link: "https://github.com/justcoddev/christmas-gift" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-30 bg-white">
      <div
        className={`max-w-[1200px] mx-auto rounded-b-lg px-6 md:py-6 py-4 flex justify-between items-center transition-shadow ${scrolled ? "shadow-md" : ""
          }`}
      >
        {/* Logo or Home Link */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/"
            className="text-xl font-bold text-gray-800 hover:text-black"
          >
            Christmas Gift 🎄🎅🎄
          </NavLink>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 font-medium">
          {navItemsDesktop.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              target={item.id === 3 ? "_blank" : "_self"} // Abre el enlace de GitHub en una nueva pestaña
              className={({ isActive }) =>
                `flex items-center gap-2 text-gray-700 hover:text-black font-semibold text-sm ${isActive ? "font-semibold decoration-black" : ""
                }`
              }
            >
              {item.name}
              {item.id === 2 && <Github className="size-7" />}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
