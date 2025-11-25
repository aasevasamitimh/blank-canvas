import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const IsAAForMePage = () => {
  const { t } = useLanguage();

  const questions = [
    {
      question: {
        english: 'Have you ever decided to stop drinking for a week or so, but only lasted for a couple of days?',
        marathi: 'तुम्ही कधी एखादा आठवडा किंवा असाच काही काळ मद्यपान थांबविण्याचा निर्णय केला पण काही दिवसच तो पाळू शकलात?'
      },
      answer: {
        english: 'Most of us in A.A. made all kinds of promises to ourselves and to our families. We could not keep them. Then we came to A.A. A.A. said: "Just try not to drink today." (If you do not drink today, you cannot get drunk today.)',
        marathi: 'ए. ए. मधील आमच्यापैकी अनेकांनी स्वतःला व कुटुंबियांना अनेक प्रकारची वचने दिली होती. आम्ही त्या वचनांचे पालन करू शकलो नाही. नंतर आम्ही ए. ए. त आलो. ए. ए. ने आम्हाला सांगितले" फक्त आजचा दिवस मद्यपान न करण्याचा प्रयत्न कर." ( जर तुम्ही आज मद्यपान केले नाहीत तर तुम्ही आज बेहोष होऊ शकत नाही.)'
      }
    },
    {
      question: {
        english: 'Do you wish people would mind their own business about your drinking – stop telling you what to do?',
        marathi: 'इतरांनी तुम्हाच्या मद्यपानाच्या बाबतीत बोलू नये - तुम्ही काय करावे हे तुम्हांला सांगू नये, असे तुम्हाला वाटत होते का?'
      },
      answer: {
        english: 'In A.A. we do not tell anyone to do anything. We just talk about our own drinking, the trouble we got into, and how we stopped. We will be glad to help you, if you want us to.',
        marathi: 'अे. अे. मध्ये आम्ही कोणासही काहीही करण्यास सांगत नाही. आम्ही फक्त आमच्या मद्यपानासंबंधी, आम्ही कोणत्या संकटात सापडलो आणि आम्ही मद्यापासून कसे दूर राहिलो या संबंधी बोलतो. जर तुमची इच्छा असेल तर तुम्हाला मदत करण्यात आम्हांला आनंद वाटेल.'
      }
    },
    {
      question: {
        english: 'Have you ever switched from one kind of drink to another in the hope that this would keep you from getting drunk?',
        marathi: 'तुम्ही कधी, आपण बेहोष होणार नाही, ह्या आशेने मद्याचे प्रकार बदलून पहाण्याचा प्रयत्न केला आहे का?'
      },
      answer: {
        english: 'We tried all kinds of ways. We made our drinks weak. Or just drank beer. Or we did not drink cocktails. Or only drank on weekends. You name it, we tried it. But if we drank anything with alcohol in it, we usually got drunk eventually.',
        marathi: 'आम्ही सर्व मार्गांचा अवलंब केला. आम्ही आमचे मद्य सौम्य करून पाहिले. किंवा आम्ही फक्त बियर प्यायलो. किंवा आम्ही फक्त आठवड्याच्या सुट्टीच्या दिवशी प्यायलो. तुम्ही म्हणाल त्या सर्व मार्गाचा आम्ही प्रयत्न केला आहे. परंतु ज्यात अल्कोहोल आहे असे काहीही आम्ही प्यायलो तरी शेवटी आम्ही बेहोष झालोच.'
      }
    },
    {
      question: {
        english: 'Have you had to have an eye-opener upon awakening during the past year?',
        marathi: 'मागिल काही वर्षे तुम्हाला जाग आल्यावर डोळे उघडण्यासाठी मद्याची आवश्यकता भासली आहे का?'
      },
      answer: {
        english: 'Do you need a drink to get started, or to stop shaking? This is a pretty sure sign that you are not drinking \'socially.\'',
        marathi: 'तुम्हाला दिवसाची सुरुवात करण्यासाठी किंवा शरिराचा कंप थांबविण्यासाठी मद्य प्यावे लागते का? तुम्ही समाजसंमत मद्यपान करीत नाहीत ह्याचे हे प्रभावी लक्षण आहे.'
      }
    },
    {
      question: {
        english: 'Do you envy people who can drink without getting into trouble?',
        marathi: 'जे लोक कोणत्याही अडचणीत न सापडता मद्यपान करू शकतात त्यांचा तुम्हांला हेवा वाटतो का?'
      },
      answer: {
        english: 'At one time or another, most of us have wondered why we were not like most people, who really can take it or leave it.',
        marathi: 'कधी ना कधी आमच्यापैकी बहुतेकांना आश्चर्य वाटत होते की, बहुसंख्य लोक जसे मद्यपान करू शकतात किंवा थांबवू शकतात, त्यांच्या सारखे आम्ही का करू शकत नाही.'
      }
    },
    {
      question: {
        english: 'Have you had problems connected with drinking during the past year?',
        marathi: 'मागील काही वर्षात मद्यपानाशी निगडीत अशा समस्या तुम्हाला निर्माण झाल्या का?'
      },
      answer: {
        english: 'Be honest! Doctors say that if you have a problem with alcohol and keep on drinking, it will get worse — never better. Eventually, you will die, or end up in an institution for the rest of your life. The only hope is to stop drinking.',
        marathi: 'प्रामाणिकपणे सांगा! डॉक्टर सांगतात की जर तुम्हाला मद्यापासून त्रास होत असेल आणि जर तुम्ही मद्यपान चालूच ठेवले तर तुमचा त्रास वाढतच जाईल, तो कधीही बरा होणार नाही, शेवटी तुम्ही मृत्यूमुखी पडाल किंवा उर्वरित आयुष्यासाठी एखाद्या उपचार केंद्रात पडून रहाल. मद्यपान थांबविणे हा एकच आशेचा किरण आहे.'
      }
    },
    {
      question: {
        english: 'Has your drinking caused trouble at home?',
        marathi: 'तुमच्या मद्यपानामुळे तुमच्या कुटुंबात काही समस्या निर्माण झाल्या आहेत का?'
      },
      answer: {
        english: 'Before we came into A.A., most of us said that it was the people or problems at home that made us drink. We could not see that our drinking just made everything worse. It never solved problems anywhere or anytime.',
        marathi: 'अे. अे. मधे येण्यापुर्वी आमच्यापैकी बहुतेकजण सांगत होते की, कुटुंबातील व्यक्ती किंवा समस्या ह्यामुळे आम्ही मद्यपान करीत होतो. आमच्या मद्यपानामुळे सर्व समस्या अधिकच गंभीर होत होत्या हे आम्हाला दिसत नव्हते. मद्यपानामुळे केव्हांही किंवा कोणतीही समस्या सुटू शकली नव्हती.'
      }
    },
    {
      question: {
        english: 'Do you ever try to get \'extra\' drinks at a party because you do not get enough?',
        marathi: 'तुम्ही समारंभात तुम्हाला पुरेसे मद्य मिळाले नाही म्हणून अधीक मद्य मिळविण्याचा प्रयत्न केला आहे का?'
      },
      answer: {
        english: 'Most of us used to have a "few" before we started out if we thought it was going to be that kind of party. And if drinks were not served fast enough, we would go some place else to get more.',
        marathi: 'आमच्यापैकी बहुतेकजण, समारंभात पुरेसे मद्य मिळणार नाही असे वाटल्यास, तिथे जाण्याचा अगोदर "थोडेसे" मद्यपान करून जात होतो. आणि भराभर मद्य दिले गेले नाही तर आम्ही मद्यपान करण्यासाठी इतरत्र जात होतो.'
      }
    },
    {
      question: {
        english: 'Do you tell yourself you can stop drinking any time you want to, even though you keep getting drunk when you do not mean to?',
        marathi: 'जरी तुम्ही तुमची इच्छा नसतांना बेहोष होत होतात तरी, आम्ही पाहिजे तेव्हा मद्यपान थांबवू शकतो असे स्वतःलाच सांगत होतात का?'
      },
      answer: {
        english: 'Many of us kidded ourselves into thinking that we drank because we wanted to. After we came into A.A., we found out that once we started to drink, we could not stop.',
        marathi: 'आम्हाला मद्यपान करावयाची  इच्छा आहे म्हणून आम्ही मद्यपान करतो या विचाराने आमच्यापैकी बहुतेकजण स्वतःलाच फसवत होते. ए. ए. मध्ये आल्यानंतर आम्हीस समजले की एकदा मद्यपानास सुरुवात केल्यानंतर आम्ही थांबू शकत नव्हतो.'
      }
    },
    {
      question: {
        english: 'Have you missed days of work or school because of drinking?',
        marathi: 'मद्यपानामुळे कधी तुमच्या शाळेत किंवा कामाच्या ठिकाणी रजा झाल्या आहेत का?'
      },
      answer: {
        english: 'Many of us admit now that we "called in sick" lots of times when the truth was that we were hung-over or on a drunk.',
        marathi: 'आमच्यापैकी बहुतेकजण आता मान्य करतात की मद्यपानामुळे डोके चढलेले असणे किंवा बेहोष असणे ही वस्तुस्थिती असताना आम्ही "आजारी" असल्याचा बहाणा केला आहे.'
      }
    },
    {
      question: {
        english: 'Do you have "blackouts"?',
        marathi: 'तुम्ही कधी बेशुध्दावस्थेत गेला आहात का?'
      },
      answer: {
        english: 'A "blackout" is when we have been drinking hours or days which we cannot remember. When we came to A.A., we found out that this is a pretty sure sign of alcoholic drinking.',
        marathi: '"बेशुध्दावस्था" म्हणजे आम्ही काही तास किंवा दिवस मद्यपान करित होतो पण त्याची आठवण राहत नाही अशी अवस्था. ए. ए. मध्ये आल्यानंतर आम्हास समजले की हे अनियंत्रीत मद्यपानाचे लक्षण आहे.'
      }
    },
    {
      question: {
        english: 'Have you ever felt that your life would be better if you did not drink?',
        marathi: 'मद्यपान न केल्यास आपले जीवन चांगले होईल असे तुम्हाला कधी वाटले होते का?'
      },
      answer: {
        english: 'Many of us started to drink because drinking made life seem better, at least for a while. By the time we got into A.A., we felt trapped. We were drinking to live and living to drink. We were sick and tired of being sick and tired.',
        marathi: 'मद्यामुळे आयुष्यात काहीकाळ तरी रंगत आहे, असे वाटल्यामुळेच आमच्यापैकी बहुतेकांनी मद्यपानास सुरुवात केली. अे. अे. मध्ये येईपर्यंत आम्ही पूर्णपणे मद्याच्या विळख्यात सापडलो असल्याची जाणीव झाली. आम्ही जगण्यासाठी मद्यपान करीत होतो आणि मद्यपान करण्यासाठी जगत होतो. कंटाळवाण्या जीवनाला आम्ही कंटाळलो होतो.'
      }
    }
  ];

  return (
    <Layout title={t({ english: 'Is A.A. For Me?', marathi: 'ए.ए. माझ्यासाठी आहे का?' })}>
      <section className="aa-section bg-aa-light">
        <div className="aa-container max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-aa-orange mb-8 text-center">
            {t({ english: 'Is A.A. for You?', marathi: 'ए. ए. तुमच्यासाठी आहे का?' })}
          </h1>
          
          <div className="aa-card prose prose-lg max-w-none mb-8">
            <p className="text-justify leading-relaxed mb-6">
              {t({
                english: 'Only you can decide whether you want to give A.A. a try—whether you think it can help you. We who are in A.A. came because we finally gave up trying to control our drinking. We still hated to admit that we could never drink safely. Then we heard from other A.A. members that we were sick. (We thought so for years!) We found out that many people suffered from the same feelings of guilt and loneliness and hopelessness that we did. We found out that we had these feelings because we had the disease of alcoholism.',
                marathi: 'तुम्हाला ए. ए. मध्ये येऊन प्रयत्न करावयाचा आहे का? किंवा ए. ए. तुम्हाला मदत करू शकेल असे तुम्हाला वाटते का? हे फक्त तुम्हीच ठरूवू शकता. ए. ए. मधील आम्ही, ए. ए. मध्ये आलो कारण सरतेशेवटी आम्ही नियंत्रीत मद्यपान करण्याचा प्रयत्न सोडून दिला. आम्ही कधीही नियंत्रीत मद्यपान करू शकणार नाही हे मान्य करण्याचा आम्हाला अजूनही तिटकारा वाटतो. नंतर आम्ही इतर ए. ए. सभासदांकडून ऐकले की आम्ही आजारी आहोत. ( अनेक वर्षे आम्हास तसे वाटत होते! ) आम्हाला समजले की अनेकजण आमच्यासारखेच अपराधिपणा, एकटेपणा, असहाय्यता या भावनांनी त्रासलेले होते.'
              })}
            </p>
            <p className="text-justify leading-relaxed">
              {t({
                english: 'We decided to try and face up to what alcohol had done to us. Here are some of the questions we tried to answer honestly. If we answered YES to four or more questions, we were in deep trouble with our drinking. See how you do. Remember, there is no disgrace in facing up to the fact that you have a problem.',
                marathi: 'आम्ही निर्णय केला की, मद्यपानाने आमची जी अवस्था केली आहे त्याला आम्ही तोंड देण्याचा प्रयत्न करू. आम्ही पुढे दिलेल्या काही प्रश्नांचे "प्रामाणिकपणे" उत्तर देण्याचा प्रयत्न केला. जर चार किंवा अधिक प्रश्नांचे उत्तर होय असेल तर आमची मद्यपानाची समस्या गंभीर स्वरूपाची असेल.तुम्ही प्रयत्न करून पहा. लक्षात ठेवा की मला मद्यपानाची समस्या आहे ह्या सत्याला सामोरे जाण्यात काहिच लाजिरवाने नाही.'
              })}
            </p>
          </div>

          <div className="space-y-8">
            {questions.map((item, index) => (
              <div key={index} className="aa-card">
                <h3 className="text-xl font-bold text-aa-teal mb-4">
                  {index + 1}. {item.question[t({ english: 'english', marathi: 'marathi' })]}
                </h3>
                <p className="text-foreground leading-relaxed pl-6">
                  {item.answer[t({ english: 'english', marathi: 'marathi' })]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IsAAForMePage;
