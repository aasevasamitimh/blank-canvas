import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-aa-navy text-white py-8 mt-16">
      <div className="aa-container">
        <div className="text-center space-y-4">
          <p className="text-sm">
            © {new Date().getFullYear()}{' '}
            <a 
              href="https://aaekta.org" 
              className="text-aa-orange hover:underline font-semibold"
            >
              aaekta.org
            </a>
          </p>
          <p className="text-sm text-aa-mint">
            {t({
              english: 'Alcoholics Anonymous - Ekta Intergroup',
              marathi: 'अल्कोहोलिक्स ॲनॉनिमस - एकता आंतरसमूह'
            })}
          </p>
          <p className="text-xs text-aa-mint/80">
            {t({
              english: 'South Marathwada Region',
              marathi: 'दक्षिण मराठवाडा विभाग'
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
