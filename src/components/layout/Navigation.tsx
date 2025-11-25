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
      <nav className="bg-white shadow-md sticky top-0 z-40">
        <div className="aa-container">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <img 
                src="/english/images/ektalogo.png" 
                alt="AA Ekta Logo" 
                className="h-12 md:h-14"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-aa-teal ${
                    location.pathname === item.path
                      ? 'text-aa-navy font-semibold'
                      : 'text-foreground'
                  }`}
                >
                  {t(item.label)}
                </Link>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className="ml-4"
              >
                {language === 'english' ? 'म' : 'EN'}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-md hover:bg-muted"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden pb-4 space-y-2 animate-fade-in">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 rounded-md transition-colors ${
                    location.pathname === item.path
                      ? 'bg-aa-mint text-aa-navy font-semibold'
                      : 'hover:bg-muted'
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
                  className="w-full"
                >
                  {language === 'english' ? 'मराठी' : 'English'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Helpline - Sticky */}
      <a
        href="tel:+919420094243"
        className="aa-helpline hidden md:flex items-center space-x-2"
      >
        <Phone className="h-4 w-4" />
        <span className="font-semibold">
          {t({ english: 'Helpline', marathi: 'संपर्क' })}: 94200 94243
        </span>
      </a>

      {/* Mobile Helpline */}
      <a
        href="tel:+919420094243"
        className="md:hidden fixed bottom-4 right-4 z-50 bg-aa-navy text-white p-4 rounded-full shadow-lg hover:bg-aa-teal transition-colors"
        aria-label="Call helpline"
      >
        <Phone className="h-6 w-6" />
      </a>
    </>
  );
};

export default Navigation;
