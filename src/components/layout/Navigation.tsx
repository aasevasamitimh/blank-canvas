import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { 
      path: '/history', 
      label: { english: 'History of A.A.', marathi: 'ए.ए. चा इतिहास' } 
    },
    { 
      path: '/faq', 
      label: { english: 'FAQs', marathi: 'नवागताचे प्रश्न' } 
    },
    { 
      path: '/find-meetings', 
      label: { english: 'Find Meetings', marathi: 'मिटींग्ज शोधा' } 
    },
    { 
      path: '/sharings', 
      label: { english: 'Sharings', marathi: 'अनुभव' } 
    },
    { 
      path: '/books', 
      label: { english: 'Books', marathi: 'पुस्तके' } 
    },
    { 
      path: '/gallery', 
      label: { english: 'Gallery', marathi: 'गॅलरी' } 
    },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'english' ? 'marathi' : 'english');
  };

  return (
    <>
      <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-40 border-b-2 border-aa-mint">
        <div className="aa-container">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/images/ektalogo.png"
                alt="AA Ekta Logo" 
                className="h-12 md:h-16 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden md:block">
                <h1 className="text-xl font-serif font-bold text-aa-navy">
                  {t({ english: 'AA EKTA', marathi: 'ए.ए. एकता' })}
                </h1>
                <p className="text-xs text-aa-teal font-medium">
                  {t({ english: 'INTERGROUP', marathi: 'आंतरसमूह' })}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 aa-focus ${
                    location.pathname === item.path
                      ? 'bg-aa-navy text-white shadow-md'
                      : 'text-foreground hover:bg-aa-mint hover:text-aa-navy'
                  }`}
                >
                  {t(item.label)}
                </Link>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="ml-4 border-2 border-aa-teal text-aa-teal hover:bg-aa-teal hover:text-white font-bold aa-focus"
              >
                {language === 'english' ? 'मराठी' : 'EN'}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-aa-mint transition-colors aa-focus"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? t({ english: 'Close menu', marathi: 'मेनू बंद करा' }) : t({ english: 'Open menu', marathi: 'मेनू उघडा' })}
            >
              {isOpen ? <X className="h-6 w-6 text-aa-navy" /> : <Menu className="h-6 w-6 text-aa-navy" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden pb-4 space-y-2 animate-fade-in-up">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition-all duration-300 aa-focus ${
                    location.pathname === item.path
                      ? 'bg-aa-navy text-white font-semibold shadow-md'
                      : 'hover:bg-aa-mint hover:text-aa-navy'
                  }`}
                >
                  {t(item.label)}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    toggleLanguage();
                    setIsOpen(false);
                  }}
                  className="w-full border-2 border-aa-teal text-aa-teal hover:bg-aa-teal hover:text-white font-bold"
                >
                  {language === 'english' ? 'मराठी' : 'English'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Desktop Helpline - Sticky */}
      <a
        href="tel:+919420094243"
        className="aa-helpline hidden md:flex items-center space-x-2 animate-pulse-soft"
        aria-label={t({ english: '24/7 Helpline', marathi: '२४/७ हेल्पलाइन' })}
      >
        <Phone className="h-5 w-5" />
        <span className="font-bold text-base">
          {t({ english: '24/7 Helpline', marathi: '२४/७ संपर्क' })}: 94200 94243
        </span>
      </a>

      {/* Mobile Helpline - Floating Button */}
      <a
        href="tel:+919420094243"
        className="md:hidden fixed bottom-6 right-6 z-50 bg-aa-orange text-white p-5 rounded-full shadow-2xl hover:bg-aa-navy transition-all duration-300 hover:scale-110 animate-pulse-soft"
        aria-label={t({ english: 'Call 24/7 helpline', marathi: '२४/७ हेल्पलाइनवर कॉल करा' })}
      >
        <Phone className="h-6 w-6" />
      </a>
    </>
  );
};

export default Navigation;
