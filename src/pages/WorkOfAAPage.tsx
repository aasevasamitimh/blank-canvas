import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const WorkOfAAPage = () => {
  const { t } = useLanguage();
  return (
    <Layout title={t({ english: 'Work of A.A.', marathi: 'ए.ए.चे कार्य' })}>
      <section className="aa-section">
        <div className="aa-container max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-aa-navy mb-8">
            {t({ english: 'What A.A. Does and Doesn\'t Do', marathi: 'ए.ए. काय करते आणि काय करत नाही' })}
          </h1>
          <div className="aa-card">
            <p className="text-foreground leading-relaxed">
              {t({ english: 'Information about A.A. work and the 12 Steps will be added here.', marathi: 'ए.ए. कार्य आणि १२ पायऱ्यांबद्दल माहिती येथे जोडली जाईल.' })}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default WorkOfAAPage;
