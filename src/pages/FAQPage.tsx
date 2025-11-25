import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const FAQPage = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: { 
        english: 'AM I AN ALCOHOLIC?', 
        marathi: 'मी मद्यपी किंवा दारुडा आहे का?' 
      },
      answer: {
        english: 'If you repeatedly drink more than you intend or want to, if you get into trouble, or if you have memory lapses when you drink, you may be an alcoholic. Only you can decide. No one in A.A. will tell you whether you are or not.',
        marathi: 'परत-परत इच्छेपेक्षा जास्त तुम्ही पित असाल, पिण्यामुळे वारंवार अडचणीत येत असाल, प्यालानंतर बऱ्याच वेळा विस्मरण होत असल्यास, आपण मद्यपी, दारुडे, शराबी, किंवा अल्कोहोलिक असू शकता. परंतु हे फक्त तुम्हीच ठरवू शकता. ए. ए. मधील कोणीही तुम्हाला तुम्ही मद्यपी आहात किंवा नाही हे सांगणार नाहीत.'
      }
    },
    {
      question: {
        english: 'WHAT CAN I DO IF I AM WORRIED ABOUT MY DRINKING?',
        marathi: 'माझ्या पिण्याबद्दल मला काळजी वाटते, तरी मी काय करावे?'
      },
      answer: {
        english: 'If you are concerned about your drinking, you can call our helpline at 94200 94243 or attend an A.A. meeting. At meetings, you will find other people who have had similar experiences and have found a way to live without alcohol.',
        marathi: 'जर तुम्हाला तुमच्या पिण्याबद्दल काळजी वाटत असेल, तर तुम्ही आमच्या हेल्पलाइनवर ९४२०० ९४२४३ वर कॉल करू शकता किंवा ए.ए. मीटिंगला उपस्थित राहू शकता. मीटिंगमध्ये, तुम्हाला इतर लोक सापडतील ज्यांना समान अनुभव आले आहेत आणि त्यांनी दारूशिवाय जगण्याचा मार्ग शोधला आहे.'
      }
    },
    {
      question: {
        english: 'WHAT HAPPENS AT A.A. MEETINGS?',
        marathi: 'ए.ए. मीटिंगमध्ये काय होते?'
      },
      answer: {
        english: 'A.A. meetings are informal gatherings where members share their experiences, strength, and hope with each other. There are different types of meetings - some are speaker meetings where one or more members tell their stories, while others are discussion meetings where the topic is chosen by the group. All meetings are confidential.',
        marathi: 'ए.ए. मीटिंग म्हणजे अनौपचारिक मेळावे जिथे सभासद त्यांचे अनुभव, शक्ती आणि आशा एकमेकांशी शेअर करतात. विविध प्रकारच्या मीटिंग असतात - काही स्पीकर मीटिंग असतात जिथे एक किंवा अधिक सभासद त्यांच्या कथा सांगतात, तर इतर चर्चा मीटिंग असतात जिथे विषय गटाद्वारे निवडला जातो. सर्व मीटिंग गोपनीय असतात.'
      }
    },
    {
      question: {
        english: 'DO I HAVE TO BELIEVE IN GOD TO BE IN A.A.?',
        marathi: 'ए.ए. मध्ये राहण्यासाठी मला देवावर विश्वास ठेवणे आवश्यक आहे का?'
      },
      answer: {
        english: 'No. A.A. is not a religious organization. Members are free to interpret spirituality in any way they choose. Many members find that a spiritual awakening helps them in recovery, but each person is free to define what that means for them.',
        marathi: 'नाही. ए.ए. ही धार्मिक संस्था नाही. सभासद आध्यात्मिकतेचा अर्थ लावण्यास मोकळे आहेत. अनेक सभासदांना असे आढळते की आध्यात्मिक जागृती त्यांना पुनर्प्राप्तीमध्ये मदत करते, परंतु प्रत्येक व्यक्ती त्यांच्यासाठी याचा अर्थ काय आहे हे ठरवण्यास मोकळी आहे.'
      }
    },
    {
      question: {
        english: 'IS THERE A COST TO JOIN A.A.?',
        marathi: 'ए.ए. मध्ये सामील होण्यासाठी काही खर्च आहे का?'
      },
      answer: {
        english: 'There are no dues or fees for A.A. membership. A.A. is self-supporting through voluntary contributions from members. We accept no outside funding.',
        marathi: 'ए.ए. सदस्यत्वासाठी कोणतीही देयके किंवा फी नाहीत. ए.ए. सभासदांच्या स्वैच्छिक योगदानाद्वारे स्वयं-समर्थन करते. आम्ही बाहेरील निधी स्वीकारत नाही.'
      }
    },
    {
      question: {
        english: 'WILL MY ANONYMITY BE PROTECTED?',
        marathi: 'माझी अनामिकता संरक्षित केली जाईल का?'
      },
      answer: {
        english: 'Yes. Anonymity is a fundamental principle of A.A. What is shared in meetings stays in meetings. Members are not required to give their full names and are free to share as much or as little as they wish.',
        marathi: 'होय. अनामिकता ही ए.ए.ची मूलभूत तत्त्वे आहे. मीटिंगमध्ये जे शेअर केले जाते ते मीटिंगमध्येच राहते. सभासदांना त्यांची पूर्ण नावे देणे आवश्यक नाही आणि ते इच्छित तितके कमी किंवा जास्त शेअर करण्यास मोकळे आहेत.'
      }
    }
  ];

  return (
    <Layout
      title={t({ english: 'FAQs', marathi: 'नवागताचे प्रश्न' })}
      description={t({
        english: 'Frequently asked questions about Alcoholics Anonymous',
        marathi: 'अल्कोहोलिक्स ॲनॉनिमसबद्दल वारंवार विचारले जाणारे प्रश्न'
      })}
    >
      <section className="aa-section">
        <div className="aa-container max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-aa-navy">
                {t({ english: 'FAQs for Newcomers', marathi: 'नवागतांसाठी प्रश्न' })}
              </h1>
              <p className="text-lg text-muted-foreground">
                {t({
                  english: 'Answers to common questions about Alcoholics Anonymous',
                  marathi: 'अल्कोहोलिक्स ॲनॉनिमसबद्दल सामान्य प्रश्नांची उत्तरे'
                })}
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="aa-card">
                  <button
                    className="w-full flex items-start justify-between text-left"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <h3 className="text-lg font-semibold text-aa-navy pr-4">
                      {t(faq.question)}
                    </h3>
                    <ChevronDown 
                      className={`h-5 w-5 text-aa-teal flex-shrink-0 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="mt-4 pt-4 border-t border-border text-foreground leading-relaxed">
                      {t(faq.answer)}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="aa-card bg-aa-mint/20 border-aa-teal text-center">
              <p className="text-foreground">
                {t({
                  english: 'Still have questions? Call our helpline at',
                  marathi: 'अजूनही प्रश्न आहेत? आमच्या हेल्पलाइनवर कॉल करा'
                })}{' '}
                <a href="tel:+919420094243" className="font-bold text-aa-navy hover:underline">
                  94200 94243
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;
