import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ChristmasGift from "./components/ChristmasGift";
import Card from "./components/card/Card";
import GiftBox from "./components/GiftBox";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function Main() {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleGiftOpened = () => {
    setIsCardVisible(true); // Muestra el Card cuando se abre el regalo
  };

  const handleCardClosed = () => {
    setIsCardVisible(false); // Oculta el Card después de la reversa
  };

  return (
    <StrictMode>
      <div className="relative h-screen w-screen">

        <ChristmasGift className="absolute inset-0 z-0" />


        <GiftBox onGiftOpened={handleGiftOpened} />


        <div
          className={`absolute inset-0 flex justify-center items-center z-20 ${isCardVisible ? "block" : "hidden"
            }`}
        >
          <Card isActive={isCardVisible} onClose={handleCardClosed} />
        </div>
      </div>
    </StrictMode>
  );
}

root.render(<Main />);
