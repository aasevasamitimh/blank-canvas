import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-aa-navy via-aa-navy-dark to-aa-navy text-white py-12 mt-auto">
      <div className="aa-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif font-bold text-aa-mint mb-4">
              {t({
                english: 'Alcoholics Anonymous',
                marathi: 'अल्कोहोलिक्स ॲनॉनिमस'
              })}
            </h3>
            <p className="text-sm leading-relaxed text-white/90">
              {t({
                english: 'A fellowship of men and women who share their experience, strength and hope with each other.',
                marathi: "'मद्यपाश' या आजाराने पीडीत स्त्री पुरूषांची एक जागतिक संघटना."
              })}
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif font-bold text-aa-mint mb-4">
              {t({
                english: 'Get Help',
                marathi: 'मदत मिळवा'
              })}
            </h3>
            <a 
              href="tel:+919420094243"
              className="flex items-center space-x-2 text-aa-orange hover:text-white transition-colors font-semibold group"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">📞</span>
              <span>94200 94243</span>
            </a>
            <p className="text-xs text-white/80">
              {t({
                english: '24/7 Helpline Available',
                marathi: '२४/७ सेवा उपलब्ध'
              })}
            </p>
          </div>

          {/* Region Section */}
          <div className="space-y-3">
            <h3 className="text-lg font-serif font-bold text-aa-mint mb-4">
              {t({
                english: 'Ekta Intergroup',
                marathi: 'एकता आंतरसमूह'
              })}
            </h3>
            <p className="text-sm text-white/90">
              {t({
                english: 'South Marathwada Region',
                marathi: 'दक्षिण मराठवाडा विभाग'
              })}
            </p>
            <p className="text-sm text-white/90">
              {t({
                english: 'Maharashtra, India',
                marathi: 'महाराष्ट्र, भारत'
              })}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 text-center space-y-2">
          <p className="text-sm">
            © {new Date().getFullYear()}{' '}
            <a 
              href="https://aaekta.org" 
              className="text-aa-orange hover:text-aa-mint font-semibold transition-colors hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              aaekta.org
            </a>
          </p>
          <p className="text-xs text-white/70">
            {t({
              english: 'Hope • Healing • Recovery',
              marathi: 'आशा • उपचार • पुनर्प्राप्ती'
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
