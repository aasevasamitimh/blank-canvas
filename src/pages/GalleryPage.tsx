import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const GalleryPage = () => {
  const { t } = useLanguage();
  return (
    <Layout title={t({ english: 'Gallery', marathi: 'गॅलरी' })}>
      <section className="aa-section">
        <div className="aa-container">
          <h1 className="text-3xl font-bold text-aa-navy mb-8 text-center">
            {t({ english: 'Videos & Gallery', marathi: 'व्हिडिओ आणि गॅलरी' })}
          </h1>
          <div className="aa-card">
            <p className="text-foreground text-center">
              {t({ english: 'Videos and awareness content from gallery.html will be added here.', marathi: 'gallery.html मधील व्हिडिओ आणि जागरूकता सामग्री येथे जोडली जाईल.' })}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default GalleryPage;
