import React, { useState, useEffect } from 'react';
import { useFormData } from '../utils/FormDataContext';
import { useLocation } from 'react-router-dom';
import Card from '@/components/card/Card';
import ChristmasGift from '@/components/ChristmasGift';
import GiftBox from '@/components/GiftBox';

const GiftAnimation = () => {
  const { formData, setFormData } = useFormData(); // Obtén y actualiza los datos del contexto
  const [isCardVisible, setIsCardVisible] = useState(false);
  const location = useLocation();

  // Leer los parámetros de la URL y actualizar el contexto
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const message = searchParams.get('message') || formData.message || '¡Feliz Navidad!';
    const from = searchParams.get('from') || formData.from || 'Anónimo';
    const to = searchParams.get('to') || formData.to || 'Tú';

    setFormData({ message, from, to });
  }, [location.search, setFormData]);

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
        className={`absolute inset-0 flex justify-center items-center z-20 ${isCardVisible ? 'block' : 'hidden'}`}
      >
        <Card isActive={isCardVisible} onClose={handleCardClosed} formData={formData} />
      </div>
    </div>
  );
};

export default GiftAnimation;
