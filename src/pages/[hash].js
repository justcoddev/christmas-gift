import { useEffect } from 'react';
import { useRouter } from 'next/router';

const RedirectToHash = () => {
  const router = useRouter();
  const { hash } = router.query;

  useEffect(() => {
    if (hash) {
      // Redirige al cliente al hash routing
      window.location.replace(`/#/christmas-gift?hash=${hash}`);
    }
  }, [hash]);

  return <div>Redirigiendo...</div>;
};

export default RedirectToHash;
