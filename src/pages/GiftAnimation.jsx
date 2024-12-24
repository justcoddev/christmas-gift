import React, { useState, useEffect } from 'react';
import { useFormData } from '../utils/FormDataContext';
import { useLocation } from 'react-router-dom';
import Card from '@/components/card/Card';
import ChristmasGift from '@/components/ChristmasGift';
import GiftBox from '@/components/GiftBox';

const GiftAnimation = () => {
  const { formData, setFormData } = useFormData();
  const [isCardVisible, setIsCardVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const hash = searchParams.get('hash');

    if (hash) {
      fetch(`/api/redirect?hash=${hash}`) // Endpoint correcto
        .then((res) => {
          if (!res.ok) {
            throw new Error('Error al obtener datos del servidor.');
          }
          return res.json();
        })
        .then((data) => {
          if (data.formData) {
            setFormData(data.formData); // Establece los datos en el contexto
          } else {
            console.error('Datos no encontrados para este hash.');
          }
        })
        .catch((err) => console.error('Error al cargar datos por hash:', err));
    }
  }, [location.search, setFormData]);


  const handleGiftOpened = () => setIsCardVisible(true);
  const handleCardClosed = () => setIsCardVisible(false);

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
