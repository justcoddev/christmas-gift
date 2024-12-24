import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const HashPage = () => {
  const router = useRouter();
  const { hash } = router.query; // Captura el parámetro dinámico 'hash'
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!hash) return;

      try {
        const response = await fetch(`/api/get-message/${hash}`);
        if (!response.ok) throw new Error('Error fetching data');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [hash]);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>No se encontró el mensaje o hubo un error.</div>;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-red-500">🎄 Mensaje de Navidad 🎄</h1>
      <p className="mt-4 text-lg">De: {data.from}</p>
      <p className="text-lg">Para: {data.to}</p>
      <p className="mt-4 text-gray-700 border-t pt-4">{data.message}</p>
    </div>
  );
};

export default HashPage;
