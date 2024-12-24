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

  // Estado para manejar si los datos están cargados
  const [loading, setLoading] = useState(true);

  // Leer los datos desde el hash o directamente de los parámetros de la URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const hash = searchParams.get('hash'); // Obtén el hash si está presente

    if (hash) {
      // Fetch los datos usando el hash
      fetch(`/api/message?hash=${hash}`)
        .then((response) => response.json())
        .then((data) => {
          setFormData(data); // Actualiza el contexto con los datos obtenidos
          setLoading(false); // Indica que los datos han sido cargados
        })
        .catch((err) => {
          console.error('Error al cargar los datos del mensaje:', err);
          setLoading(false);
        });
    } else {
      // Obtén los datos de los parámetros directamente
      const message = searchParams.get('message') || formData.message || '';
      const from = searchParams.get('from') || formData.from || '';
      const to = searchParams.get('to') || formData.to || '';

      setFormData({ message, from, to });
      setLoading(false);
    }
  }, [location.search, setFormData]);

  const handleGiftOpened = () => {
    setIsCardVisible(true);
  };

  const handleCardClosed = () => {
    setIsCardVisible(false);
  };

  if (loading) {
    return <div>Cargando...</div>; // Muestra un estado de carga mientras se obtienen los datos
  }

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
