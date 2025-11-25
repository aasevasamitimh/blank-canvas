import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const SharingsPage = () => {
  const { t } = useLanguage();
  return (
    <Layout title={t({ english: 'Sharings', marathi: 'अनुभव' })}>
      <section className="aa-section">
        <div className="aa-container max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-aa-navy mb-8">
            {t({ english: 'Member Sharings', marathi: 'सभासदांचे अनुभव' })}
          </h1>
          <div className="aa-card">
            <p className="text-foreground leading-relaxed">
              {t({ english: 'Member experiences and recovery stories will be added here.', marathi: 'सभासदांचे अनुभव आणि पुनर्प्राप्ती कथा येथे जोडल्या जातील.' })}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default SharingsPage;
