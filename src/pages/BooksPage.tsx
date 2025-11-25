import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const BooksPage = () => {
  const { t, language } = useLanguage();

  const books = Array.from({ length: 17 }, (_, i) => ({
    id: i + 1,
    image: `/${language}/images/books/${i + 1}.png`,
  }));

  const pamphlets = [
    { id: 9, title: { english: 'This is A.A.', marathi: 'हे ए.ए. आहे' }, pdf: '/english/pdf/thisisAA.pdf' },
    { id: 10, title: { english: 'Do You Think You\'re Different?', marathi: 'तुम्ही वेगळे आहात असे वाटते का?' }, pdf: '/english/pdf/doyouthinkyourediff.pdf' },
    { id: 11, title: { english: 'Q&A on Sponsorship', marathi: 'प्रायोजकत्वावरील प्रश्नोत्तरे' }, pdf: '/english/pdf/Q&AonSpon.pdf' },
    { id: 12, title: { english: 'Inside A.A.', marathi: 'ए.ए. मधील' }, pdf: '/english/pdf/InsideAA.pdf' },
    { id: 13, title: { english: 'A.A. as a Resource', marathi: 'ए.ए. एक संसाधन म्हणून' }, pdf: '/english/pdf/aaasaresourceforhcp.pdf' },
    { id: 14, title: { english: 'Is There an Alcoholic in Your Life?', marathi: 'तुमच्या आयुष्यात दारुडा आहे का?' }, pdf: '/english/pdf/isthereanalcoinyourlife.pdf' },
    { id: 15, title: { english: 'Is A.A. for Me?', marathi: 'ए.ए. माझ्यासाठी आहे का?' }, pdf: '/english/pdf/isAAforMe.pdf' },
    { id: 16, title: { english: 'A Brief Guide to A.A.', marathi: 'ए.ए.साठी संक्षिप्त मार्गदर्शक' }, pdf: '/english/pdf/abriefguidetoaa.pdf' },
    { id: 17, title: { english: 'If You Are a Professional', marathi: 'जर तुम्ही व्यावसायिक आहात' }, pdf: '/english/pdf/ifyouareaprofessional.pdf' },
  ];

  return (
    <Layout title={t({ english: 'Books', marathi: 'पुस्तके' })}>
      <section className="aa-section bg-aa-light">
        <div className="aa-container">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-aa-orange mb-4">
              {t({ english: 'Books', marathi: 'पुस्तके' })}
            </h1>
            <p className="text-xl text-aa-navy mb-2">
              {t({ 
                english: 'Literature provided by A.A. World Services', 
                marathi: 'ए.ए. जागतिक सेवेकडून उपलब्ध केले गेलेले साहित्य' 
              })}
            </p>
            <p className="text-foreground">
              {t({ english: 'Contact for books:', marathi: 'पुस्तकांसाठी संपर्क:' })} 
              <a href="tel:+919420094243" className="text-aa-teal font-semibold ml-2">94200 94243</a>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16">
            {books.map((book) => (
              <div key={book.id} className="aa-card p-4 hover:shadow-lg transition-shadow">
                <img 
                  src={book.image} 
                  alt={`Book ${book.id}`}
                  className="w-full h-auto rounded"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-aa-orange mb-8">
              {t({ english: 'Read Pamphlets/Flyers', marathi: 'पुस्तिका/माहितीपत्रे वाचा' })}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-12">
            {pamphlets.map((pamphlet) => (
              <div key={pamphlet.id} className="aa-card p-4 hover:shadow-lg transition-shadow">
                <img 
                  src={`/${language}/images/books/${pamphlet.id}.png`}
                  alt={pamphlet.title[language]}
                  className="w-full h-auto rounded mb-4"
                  loading="lazy"
                />
                <Button 
                  className="w-full"
                  onClick={() => window.open(pamphlet.pdf, '_blank')}
                >
                  {t({ english: 'Read', marathi: 'वाचा' })}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.open('https://aa.org/pages/en_US/aa-literature', '_blank')}
              className="text-lg"
            >
              {t({ english: 'Read More', marathi: 'अधिक वाचा' })}
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BooksPage;
