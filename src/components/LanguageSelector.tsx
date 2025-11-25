import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSelector = () => {
  const { setLanguage } = useLanguage();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if language preference is already set
    const savedLanguage = localStorage.getItem('aa-language-preference');
    if (!savedLanguage) {
      setShowModal(true);
    } else {
      setLanguage(savedLanguage as 'english' | 'marathi');
    }
  }, [setLanguage]);

  const handleLanguageSelect = (lang: 'english' | 'marathi') => {
    setLanguage(lang);
    localStorage.setItem('aa-language-preference', lang);
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 space-y-6 animate-fade-in">
        <div className="text-center space-y-4">
          <img 
            src="/images/ektalogo.png" 
            alt="AA Ekta Logo" 
            className="mx-auto h-32 w-32 object-contain"
          />
          <h2 className="text-2xl font-bold text-foreground">
            भाषा निवडा | Choose Language
          </h2>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={() => handleLanguageSelect('marathi')}
            size="lg"
            className="bg-aa-navy hover:bg-aa-navy/90 text-white font-bold text-xl h-14"
          >
            मराठी
          </Button>
          <Button
            onClick={() => handleLanguageSelect('english')}
            size="lg"
            className="bg-aa-navy hover:bg-aa-navy/90 text-white font-bold text-xl h-14"
          >
            English
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
