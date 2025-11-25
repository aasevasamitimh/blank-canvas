import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const HistoryPage = () => {
  const { t } = useLanguage();

  return (
    <Layout
      title={t({ english: 'History of A.A.', marathi: 'ए.ए. चा इतिहास' })}
      description={t({
        english: 'Learn about the history and origins of Alcoholics Anonymous',
        marathi: 'अल्कोहोलिक्स ॲनॉनिमसच्या इतिहासाबद्दल आणि उत्पत्तीबद्दल जाणून घ्या'
      })}
    >
      <section className="aa-section">
        <div className="aa-container max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-aa-navy">
                {t({ english: 'History of Alcoholics Anonymous', marathi: 'अल्कोहोलिक्स ॲनॉनिमसचा इतिहास' })}
              </h1>
            </div>

            <div className="aa-card space-y-6 text-foreground leading-relaxed">
              <p>
                {t({
                  english: 'Alcoholics Anonymous was founded in 1935 in Akron, Ohio, by Bill Wilson and Dr. Bob Smith. The organization has since grown to include millions of members worldwide.',
                  marathi: 'अल्कोहोलिक्स ॲनॉनिमसची स्थापना १९३५ मध्ये ऍक्रॉन, ओहायो येथे बिल विल्सन आणि डॉ. बॉब स्मिथ यांनी केली. तेव्हापासून ही संघटना जगभरात लाखो सभासदांचा समावेश करण्यासाठी वाढली आहे.'
                })}
              </p>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-aa-navy">
                  {t({ english: 'The Beginning', marathi: 'सुरुवात' })}
                </h2>
                <p>
                  {t({
                    english: 'The story of A.A. began with two men - Bill W., a New York stockbroker, and Dr. Bob S., an Akron surgeon. Both had been hopeless alcoholics. Bill had been sober for several months through the help of the Oxford Group, a Christian fellowship. In May 1935, he traveled to Akron on business and found himself in danger of drinking again. He realized that to stay sober, he needed to help another alcoholic.',
                    marathi: 'ए.ए.ची कथा दोन माणसांपासून सुरू झाली - बिल डब्ल्यू., एक न्यूयॉर्क स्टॉकब्रोकर, आणि डॉ. बॉब एस., एक ऍक्रॉन शल्यचिकित्सक. दोघेही आशाहीन मद्यपी होते. ऑक्सफर्ड ग्रुप या ख्रिश्चन मैत्रीच्या मदतीने बिल काही महिन्यांपासून शुद्ध होते. मे १९३५ मध्ये, तो व्यवसायावर ऍक्रॉनला गेला आणि पुन्हा पिण्याच्या धोक्यात सापडला. त्याला समजले की शुद्ध राहण्यासाठी, त्याला दुसऱ्या मद्यपाला मदत करणे आवश्यक आहे.'
                  })}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-aa-navy">
                  {t({ english: 'Growth and Expansion', marathi: 'वाढ आणि विस्तार' })}
                </h2>
                <p>
                  {t({
                    english: 'By 1939, the Fellowship had about 100 members. That year, the basic text "Alcoholics Anonymous" was published, later becoming known as the "Big Book." The book outlined the program of recovery and the Twelve Steps. The publicity that followed helped the Fellowship grow rapidly.',
                    marathi: '१९३९ पर्यंत, फेलोशिपमध्ये सुमारे १०० सभासद होते. त्या वर्षी, मूलभूत ग्रंथ "अल्कोहोलिक्स ॲनॉनिमस" प्रकाशित झाला, नंतर तो "बिग बुक" म्हणून ओळखला जाऊ लागला. या पुस्तकाने पुनर्प्राप्तीचा कार्यक्रम आणि बारा पायऱ्यांची रूपरेषा दिली. त्यानंतरच्या प्रसिद्धीमुळे फेलोशिप वेगाने वाढण्यास मदत झाली.'
                  })}
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-aa-navy">
                  {t({ english: 'A.A. in India', marathi: 'भारतात ए.ए.' })}
                </h2>
                <p>
                  {t({
                    english: 'Alcoholics Anonymous came to India in 1957. Today, there are hundreds of A.A. groups throughout the country, providing hope and recovery to thousands of alcoholics and their families.',
                    marathi: 'अल्कोहोलिक्स ॲनॉनिमस १९५७ मध्ये भारतात आला. आज, देशभरात शेकडो ए.ए. गट आहेत, जे हजारो मद्यपी आणि त्यांच्या कुटुंबांना आशा आणि पुनर्प्राप्ती प्रदान करतात.'
                  })}
                </p>
              </div>

              <div className="bg-aa-mint/20 p-6 rounded-lg border border-aa-teal/30">
                <h3 className="text-xl font-bold text-aa-navy mb-3">
                  {t({ english: 'Key Milestones', marathi: 'मुख्य टप्पे' })}
                </h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>{t({ english: '1935: A.A. founded in Akron, Ohio', marathi: '१९३५: ऍक्रॉन, ओहायो येथे ए.ए.ची स्थापना' })}</li>
                  <li>{t({ english: '1939: Big Book published', marathi: '१९३९: बिग बुक प्रकाशित' })}</li>
                  <li>{t({ english: '1950: Twelve Traditions adopted', marathi: '१९५०: बारा परंपरा स्वीकारल्या' })}</li>
                  <li>{t({ english: '1957: A.A. comes to India', marathi: '१९५७: ए.ए. भारतात येते' })}</li>
                  <li>{t({ english: 'Present: Over 2 million members worldwide', marathi: 'सध्या: जगभरात २० लाखांहून अधिक सभासद' })}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HistoryPage;
