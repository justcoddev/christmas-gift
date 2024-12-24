import Card from '@/components/card/Card';
import ChristmasGift from '@/components/ChristmasGift';
import GiftBox from '@/components/GiftBox';
import React, { useState } from 'react';

const GiftAnimation = ({ formData }) => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleGiftOpened = () => {
    setIsCardVisible(true);
  };

  const handleCardClosed = () => {
    setIsCardVisible(false);
  };

  return (
    <div className="relative h-screen w-screen">
      <ChristmasGift className="absolute inset-0 z-0" />
      <GiftBox onGiftOpened={handleGiftOpened} />
      <div
        className={`absolute inset-0 flex justify-center items-center z-20 ${isCardVisible ? 'block' : 'hidden'
          }`}
      >
        <Card isActive={isCardVisible} onClose={handleCardClosed} formData={formData} />
      </div>
    </div>
  );
};

export default GiftAnimation;
