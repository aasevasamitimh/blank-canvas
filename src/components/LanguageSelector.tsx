import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector = () => {
  const { setLanguage } = useLanguage();

  useEffect(() => {
    // Set Marathi as default language
    setLanguage('marathi');
    localStorage.setItem('aa-language-preference', 'marathi');
  }, [setLanguage]);

  return null;
};

export default LanguageSelector;
