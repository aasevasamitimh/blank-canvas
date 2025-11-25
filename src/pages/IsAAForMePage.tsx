import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const IsAAForMePage = () => {
  const { t } = useLanguage();
  return (
    <Layout title={t({ english: 'Is A.A. For Me?', marathi: 'ए.ए. माझ्यासाठी आहे का?' })}>
      <section className="aa-section">
        <div className="aa-container max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-aa-navy mb-8">
            {t({ english: '20 Questions', marathi: '२० प्रश्न' })}
          </h1>
          <div className="aa-card">
            <p className="text-foreground">
              {t({ english: 'The 20 questions will be added here.', marathi: '२० प्रश्न येथे जोडले जातील.' })}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default IsAAForMePage;
