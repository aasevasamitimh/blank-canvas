import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const WorkOfAAPage = () => {
  const { t } = useLanguage();

  return (
    <Layout title={t({ english: 'Work of A.A.', marathi: 'ए.ए.चे कार्य' })}>
      <section className="aa-section bg-aa-light">
        <div className="aa-container max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-aa-orange mb-8 text-center">
            {t({ english: 'What does A.A. do and doesn\'t do?', marathi: 'ए.ए. काय करते आणि काय करत नाही?' })}
          </h1>
          
          <div className="aa-card prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-aa-teal mb-4">
              {t({ english: 'WHAT IS A.A.?', marathi: 'ए.ए. म्हणजे काय?' })}
            </h2>
            <p className="text-justify leading-relaxed mb-6">
              {t({
                english: 'Alcoholics Anonymous is a fellowship of men and women who share their experience, strength and hope with each other that they may solve their common problem and help others to recover from alcoholism.',
                marathi: 'अल्कोहोलिक्स ॲनॉनिमस ही स्त्री-पुरुषांची एक संघटना आहे जी त्यांच्या अनुभव, शक्ती आणि आशा एकमेकांसोबत सामायिक करतात जेणेकरून ते त्यांची समान समस्या सोडवू शकतील आणि इतरांना मद्यपासून मुक्त होण्यास मदत करू शकतील.'
              })}
            </p>
            <p className="text-justify leading-relaxed mb-8">
              {t({
                english: 'The only requirement for membership is a desire to stop drinking. There are no dues or fees for AA membership; we are self-supporting through our own contributions. AA is not allied with any sect, denomination, politics, organization or institution; does not wish to engage in any controversy; neither endorses nor opposes any causes. Our primary purpose is to stay sober and help other alcoholics to achieve sobriety.',
                marathi: 'सदस्यत्वाची एकमेव आवश्यकता म्हणजे मद्यपान थांबवण्याची इच्छा. ए.ए. सदस्यत्वासाठी कोणतीही वर्गणी नाही; आम्ही आमच्या स्वतःच्या योगदानाद्वारे स्वावलंबी आहोत. ए.ए. कोणत्याही पंथ, संप्रदाय, राजकारण, संघटना किंवा संस्थेशी संलग्न नाही; कोणत्याही वादात गुंतण्याची इच्छा नाही; कोणत्याही कारणांचे समर्थन किंवा विरोध करत नाही. आमचा प्राथमिक उद्देश म्हणजे शांत राहणे आणि इतर मद्यपींना शांतता प्राप्त करण्यास मदत करणे.'
              })}
            </p>

            <hr className="my-8 border-aa-mint" />

            <h2 className="text-2xl font-bold text-aa-teal mb-4">
              {t({ english: 'WHAT DOES A.A. DO?', marathi: 'ए.ए. काय करते?' })}
            </h2>
            <ol className="list-decimal list-inside space-y-6 mb-8">
              <li className="text-justify leading-relaxed">
                {t({
                  english: 'A.A. members share their experience with anyone seeking help with a drinking problem; they give person-to-person service or "sponsorship" to the alcoholic coming to A.A. from any source.',
                  marathi: 'ए.ए. सदस्य मद्यपानाच्या समस्येसाठी मदत शोधणाऱ्या कोणाशीही त्यांचा अनुभव सामायिक करतात; ते कोणत्याही स्रोतातून ए.ए.मध्ये येणाऱ्या मद्यपींना व्यक्ती-ते-व्यक्ती सेवा किंवा "प्रायोजकत्व" देतात.'
                })}
              </li>
              <li className="text-justify leading-relaxed">
                {t({
                  english: 'The A.A. programme, set forth in our Twelve Steps, offers the alcoholic a way to develop a satisfying life without alcohol.',
                  marathi: 'आमच्या बारा पायऱ्यांमध्ये मांडलेला ए.ए. कार्यक्रम, मद्यपींना दारूविना समाधानकारक जीवन विकसित करण्याचा मार्ग देतो.'
                })}
              </li>
              <li className="text-justify leading-relaxed">
                {t({
                  english: 'This programme is discussed at A.A. group meetings:',
                  marathi: 'या कार्यक्रमावर ए.ए. गट सभांमध्ये चर्चा केली जाते:'
                })}
                <ol className="list-[lower-alpha] list-inside ml-6 mt-4 space-y-3">
                  <li className="text-justify leading-relaxed">
                    {t({
                      english: 'Open speaker meetings - open to alcoholics and non-alcoholics. (Attendance at an open A.A. meeting is the best way to learn what A.A. is, what it does, and what it does not do.) At speaker meetings, A.A. members "tell their stories." They describe their experiences with alcohol, how they came to A.A., and how their lives have changed as a result of A.A.',
                      marathi: 'खुल्या वक्ता सभा - मद्यपी आणि गैर-मद्यपींसाठी खुल्या. (खुल्या ए.ए. सभेत उपस्थिती म्हणजे ए.ए. काय आहे, ते काय करते आणि काय करत नाही हे शिकण्याचा सर्वोत्तम मार्ग आहे.) वक्ता सभांमध्ये, ए.ए. सदस्य "त्यांच्या कथा सांगतात." ते दारूबरोबरचे त्यांचे अनुभव, ते ए.ए.मध्ये कसे आले आणि ए.ए.च्या परिणामी त्यांचे जीवन कसे बदलले याचे वर्णन करतात.'
                    })}
                  </li>
                  <li className="text-justify leading-relaxed">
                    {t({
                      english: 'Open discussion meetings - one member speaks briefly about his or her drinking experience, and then leads a discussion on A.A. recovery or any drinking-related problem anyone brings up. (Closed meetings are for A.A.s or anyone who may have a drinking problem.)',
                      marathi: 'खुल्या चर्चा सभा - एक सदस्य त्याच्या किंवा तिच्या मद्यपानाच्या अनुभवाबद्दल थोडक्यात बोलतो, आणि नंतर ए.ए. सुधारणा किंवा कोणीही आणलेल्या मद्यपान-संबंधित समस्येवर चर्चा सुरू करतो. (बंद सभा ए.ए.साठी किंवा मद्यपानाची समस्या असलेल्या कोणासाठीही असतात.)'
                    })}
                  </li>
                  <li className="text-justify leading-relaxed">
                    {t({
                      english: 'Closed discussion meetings - conducted just as open discussions are, but for alcoholics or prospective A.A.s only.',
                      marathi: 'बंद चर्चा सभा - खुल्या चर्चांप्रमाणेच आयोजित केल्या जातात, परंतु केवळ मद्यपींसाठी किंवा संभाव्य ए.ए.साठी.'
                    })}
                  </li>
                  <li className="text-justify leading-relaxed">
                    {t({
                      english: 'Step meetings (usually closed) - discussion of one of the Twelve Steps.',
                      marathi: 'पायरी सभा (सहसा बंद) - बारा पायऱ्यांपैकी एकाची चर्चा.'
                    })}
                  </li>
                  <li className="text-justify leading-relaxed">
                    {t({
                      english: 'A.A. members also take meetings into correctional and treatment facilities.',
                      marathi: 'ए.ए. सदस्य सुधारक आणि उपचार सुविधांमध्ये देखील सभा घेतात.'
                    })}
                  </li>
                  <li className="text-justify leading-relaxed">
                    {t({
                      english: 'A.A. members may be asked to conduct the informational meetings about A.A. as a part of A.S.A.P. (Alcohol Safety Action Project) and D.W.I. (Driving While Intoxicated) programme. These meetings about A.A. are not regular A.A. group meetings.',
                      marathi: 'ए.ए. सदस्यांना A.S.A.P. (अल्कोहोल सेफ्टी ॲक्शन प्रोजेक्ट) आणि D.W.I. (ड्रायव्हिंग व्हाईल इंटॉक्सिकेटेड) कार्यक्रमाचा भाग म्हणून ए.ए.बद्दल माहिती सभा आयोजित करण्यास सांगितले जाऊ शकते. ए.ए.बद्दलच्या या सभा नियमित ए.ए. गट सभा नाहीत.'
                    })}
                  </li>
                </ol>
              </li>
            </ol>

            <hr className="my-8 border-aa-mint" />

            <h2 className="text-2xl font-bold text-aa-teal mb-4">
              {t({ english: 'WHAT A.A. DOES NOT DO?', marathi: 'ए.ए. काय करत नाही?' })}
            </h2>
            <ol className="list-decimal list-inside space-y-3 mb-8">
              <li>{t({ english: 'Furnish initial motivation for alcoholics to recover.', marathi: 'मद्यपींना सुधारण्यासाठी प्रारंभिक प्रेरणा देणे.' })}</li>
              <li>{t({ english: 'Solicit members.', marathi: 'सदस्यांची विनंती करणे.' })}</li>
              <li>{t({ english: 'Engage in or sponsor research.', marathi: 'संशोधनात गुंतणे किंवा प्रायोजित करणे.' })}</li>
              <li>{t({ english: 'Keep attendance records or case histories.', marathi: 'उपस्थिती रेकॉर्ड किंवा केस इतिहास ठेवणे.' })}</li>
              <li>{t({ english: 'Join "councils" of social agencies.', marathi: 'सामाजिक संस्थांच्या "परिषदांमध्ये" सामील होणे.' })}</li>
              <li>{t({ english: 'Follow up or try to control its members.', marathi: 'त्याच्या सदस्यांना अनुसरण करणे किंवा नियंत्रित करण्याचा प्रयत्न करणे.' })}</li>
              <li>{t({ english: 'Make medical or psychological diagnoses or prognoses.', marathi: 'वैद्यकीय किंवा मानसशास्त्रीय निदान किंवा रोगनिदान करणे.' })}</li>
              <li>{t({ english: 'Provide drying-out or nursing services, hospitalization, drugs, or any medical or psychiatric treatment.', marathi: 'शुष्क किंवा परिचर्या सेवा, रुग्णालयीकरण, औषधे, किंवा कोणतीही वैद्यकीय किंवा मानसोपचार उपचार प्रदान करणे.' })}</li>
              <li>{t({ english: 'Offer religious services.', marathi: 'धार्मिक सेवा देणे.' })}</li>
              <li>{t({ english: 'Engage in education about alcohol.', marathi: 'दारूबद्दल शिक्षणात गुंतणे.' })}</li>
              <li>{t({ english: 'Provide housing, food, clothing, jobs, money, or any other welfare or social services.', marathi: 'गृहनिर्माण, अन्न, कपडे, नोकऱ्या, पैसे, किंवा इतर कोणत्याही कल्याण किंवा सामाजिक सेवा प्रदान करणे.' })}</li>
              <li>{t({ english: 'Provide domestic or vocational counselling.', marathi: 'घरगुती किंवा व्यावसायिक समुपदेशन प्रदान करणे.' })}</li>
              <li>{t({ english: 'Accept any money for its services, or any contributions from non-A.A. sources.', marathi: 'त्याच्या सेवांसाठी कोणतेही पैसे किंवा गैर-ए.ए. स्रोतांकडून कोणतेही योगदान स्वीकारणे.' })}</li>
              <li>{t({ english: 'Provide letters of reference to parole boards, lawyers, court officials, social agencies, employers, etc.', marathi: 'पॅरोल बोर्ड, वकील, न्यायालय अधिकारी, सामाजिक संस्था, नियोक्ते इ. यांना संदर्भ पत्रे प्रदान करणे.' })}</li>
            </ol>

            <hr className="my-8 border-aa-mint" />

            <h2 className="text-2xl font-bold text-aa-teal mb-4">
              {t({ english: 'CONCLUSION', marathi: 'निष्कर्ष' })}
            </h2>
            <p className="text-justify leading-relaxed">
              {t({
                english: 'The primary purpose of A.A. is to carry our message of recovery to the alcoholic seeking help. Almost every alcoholism treatment tries to help the alcoholic maintain sobriety. Regardless of the road we follow, we all head for the same destination, recovery of the alcoholic person. Together, we can do what none of us could accomplish alone. We can serve as a source of personal experience and be an ongoing support system for recovering alcoholics.',
                marathi: 'ए.ए.चा प्राथमिक उद्देश म्हणजे मदत शोधणाऱ्या मद्यपीला आमचा सुधारणेचा संदेश पोहोचवणे. जवळजवळ प्रत्येक मद्यपान उपचार मद्यपींना शांतता राखण्यास मदत करण्याचा प्रयत्न करतो. आपण कोणत्याही मार्गाचे अनुसरण करत असलो तरी, आपण सर्वजण एकाच गंतव्यस्थानाकडे जातो, मद्यपी व्यक्तीची सुधारणा. एकत्रितपणे, आपण ते करू शकतो जे आपल्यापैकी कोणीही एकटे साध्य करू शकत नाही. आम्ही वैयक्तिक अनुभवाचा स्रोत म्हणून काम करू शकतो आणि सुधारणा करणाऱ्या मद्यपींसाठी सतत समर्थन प्रणाली असू शकतो.'
              })}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WorkOfAAPage;
