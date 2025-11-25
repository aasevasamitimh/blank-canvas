import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const BooksPage = () => {
  const { t } = useLanguage();
  return (
    <Layout title={t({ english: 'Books', marathi: 'पुस्तके' })}>
      <section className="aa-section">
        <div className="aa-container max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-aa-navy mb-8">
            {t({ english: 'AA Literature', marathi: 'ए.ए. साहित्य' })}
          </h1>
          <div className="aa-card">
            <p className="text-foreground">
              {t({ english: 'AA books and literature will be displayed here.', marathi: 'ए.ए. पुस्तके आणि साहित्य येथे प्रदर्शित केले जाईल.' })}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default BooksPage;
