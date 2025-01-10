import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';

const removeNonEssentialCookies = () => {
  const nonEssentialCookies = ['analytics', 'ads', 'tracking'];
  nonEssentialCookies.forEach(cookie => Cookies.remove(cookie));
};

const CookieConsent = () => {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    try {
      const savedConsent = Cookies.get('cookieConsent');
      if (savedConsent) {
        setConsent(savedConsent === 'true');
      }
    } catch (error) {
      console.error('Error reading cookie consent:', error);
    }
  }, []);

  const handleAccept = () => {
    try {
      Cookies.set('cookieConsent', 'true', { expires: 365 });
      setConsent(true);
    } catch (error) {
      console.error('Error setting cookie consent:', error);
    }
  };

  const handleDecline = () => {
    try {
      Cookies.set('cookieConsent', 'false', { expires: 365 });
      removeNonEssentialCookies();
      setConsent(false);
    } catch (error) {
      console.error('Error setting cookie consent:', error);
    }
  };

  if (consent !== null) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-primary text-white p-4 z-50 border-t-2">
      <div className='max-w-[1280px] mx-auto grid md:flex justify-between items-center nd:space-x-5 px-5'>
        <div className='flex flex-col'> 
          <span className='text-md font-robotobold mb-2'>Este site utiliza <span className='text-white font-robotobold'>Cookies</span> para melhorar a experiência do utilizador.</span>
          <span className='text-sm md:text-base font-roboto'>Ao aceitar, você consente o uso de todos os cookies.</span>
          <span className='text-sm md:text-md font-roboto'>Para mais informações, leia nossa <Link to={"/politica-de-cookies"}><span className='text-white underline underline-offset-2'>Política de Cookies</span></Link>.</span>
        </div>
        <div className='flex mt-5 md:w-[20%] space-x-2 md:space-x-0'>
          <button
            className="bg-white ring-2 ring-primary hover:ring-secondary hover:bg-primary hover:text-white text-accent font-bold py-2 px-4 rounded mr-2 font-robotobold w-full flex items-center justify-center duration-500"
            onClick={handleAccept}
          >
            <Cookie size={17} className='mr-1 mt-[1px]'/>
            Aceitar
          </button>
          <button
            className="bg-white hover:bg-red-500 text-accent hover:text-white font-bold py-2 px-4 rounded font-robotobold w-full duration-500"
            onClick={handleDecline}
          >
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;