import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const GiftPage = () => {
  const router = useRouter();
  const { hash } = router.query;
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    if (hash) {
      fetch(`/api/redirect?hash=${hash}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.formData) {
            setFormData(data.formData);
          } else {
            router.push('/404');
          }
        });
    }
  }, [hash, router]);

  if (!formData) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>¡Feliz Navidad!</h1>
      <p>De: {formData.from}</p>
      <p>Para: {formData.to}</p>
      <p>{formData.message}</p>
    </div>
  );
};

export default GiftPage;
