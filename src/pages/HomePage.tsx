import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Users, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import LanguageSelector from '@/components/LanguageSelector';

const HomePage = () => {
  const { t, language } = useLanguage();

  return (
    <>
      <LanguageSelector />
      <Layout
        title={t({ english: 'Home', marathi: 'मुख्यपृष्ठ' })}
        description={t({
          english: 'AA is an International Fellowship of more than 2 million recovering alcoholics throughout the world.',
          marathi: "'अल्कोहोलिक्स ॲनॉनिमस' ही 'मद्यपाश' या आजाराने पीडीत स्त्री पुरूषांची एक जागतिक संघटना आहे."
        })}
      >
        {/* Hero Section */}
      <section className="aa-gradient-trust text-white py-16 md:py-24">
        <div className="aa-container text-center space-y-6 animate-fade-in">
          <img 
            src={language === 'english' ? '/english/images/aalogo-en.png' : '/marathi/images/aalogo.png'}
            alt="AA Logo" 
            className="mx-auto h-24 md:h-32"
          />
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">
            {t({
              english: 'Alcoholics Anonymous',
              marathi: 'अल्कोहोलिक्स ॲनॉनिमस'
            })}
          </h1>
          <p className="text-xl md:text-2xl text-aa-orange font-semibold">
            {t({
              english: 'Ekta Intergroup',
              marathi: 'एकता आंतरसमूह'
            })}
          </p>
          <p className="text-lg md:text-xl text-aa-mint">
            {t({
              english: '(South Marathwada Region)',
              marathi: '(दक्षिण मराठवाडा विभाग)'
            })}
          </p>
          <p className="text-base md:text-lg text-white/90">
            {t({
              english: 'Beed | Hingoli | Latur | Nanded | Osmanabad | Parbhani',
              marathi: 'बीड | हिंगोली | लातूर | नांदेड | उस्मानाबाद | परभणी'
            })}
          </p>
        </div>
      </section>

      {/* Drinking Problem Section */}
      <section className="aa-section bg-muted/30">
        <div className="aa-container max-w-4xl mx-auto">
          <div className="aa-card bg-aa-navy text-white text-center space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold">
              {t({
                english: 'Do you have a',
                marathi: 'ही तुमची किंवा तुमच्या'
              })}
            </h2>
            <p className="text-3xl md:text-5xl font-bold text-aa-orange">
              {t({
                english: 'Drinking Problem?',
                marathi: 'कुटुंबियांची समस्या झाली आहे काय ?'
              })}
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 mt-4 text-center space-y-4">
            <p className="text-foreground">
              {t({
                english: 'Answer YES or NO to the following questions.',
                marathi: 'खाली दिलेल्या प्रश्नांची उत्तरे स्वत:लाच, अत्यंत प्रामाणिकपणे द्या.'
              })}
            </p>
            <Link to="/is-aa-for-me">
              <Button size="lg" className="bg-aa-navy hover:bg-aa-navy/90">
                {t({
                  english: '20 Questions of Alcoholics Anonymous',
                  marathi: 'अल्कोहोलिक्स ॲनॉनिमस चे २० प्रश्न'
                })}
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Preamble and 12 Steps Section */}
      <section className="aa-section">
        <div className="aa-container grid md:grid-cols-2 gap-8">
          {/* Preamble */}
          <div className="aa-card space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <Users className="h-8 w-8 text-aa-orange" />
              <h2 className="text-2xl font-bold text-aa-navy">
                {t({
                  english: 'Preamble of Alcoholics Anonymous',
                  marathi: "'अल्कोहोलिक्स ॲनॉनिमस'ची प्रस्तावना"
                })}
              </h2>
            </div>
            <div className="space-y-4 text-foreground leading-relaxed">
              <p>
                {t({
                  english: 'ALCOHOLICS ANONYMOUS is a fellowship of men and women who share their experience, strength and hope with each other that they may solve their common problem and help others to recover from Alcoholism.',
                  marathi: "'अल्कोहोलिक्स ॲनॉनिमस' म्हणजे निनावी मद्यपी. ही पुरुष व स्त्रियांची एक संघटना आहे. ह्यामधील सभासद आपले व्यक्तिगत अनुभव एकमेकांना सांगतात की, ज्यामुळे सर्व सभासदांचे मानसिक धैर्य वाढते व नवजीवनाची आशा स्फुरते."
                })}
              </p>
              <p>
                {t({
                  english: 'The only requirement for membership is a desire to stop drinking. There are no dues or fees for AA membership, we are self-supporting through our own contribution.',
                  marathi: 'या संघटनेत सामील होण्यास फक्त एकच अट आहे की, मद्यपाशाच्या आजारातून मुक्त होण्याची सभासदाची इच्छा असली पाहिजे. संघटनेत सामील होण्यास कोणतीही वर्गणी आकारली जात नाही.'
                })}
              </p>
              <p>
                {t({
                  english: 'AA is not allied with any sect, denomination, politics, organization or institution; does not wish to engage in any controversy; neither endorses nor opposes any causes.',
                  marathi: 'ही संघटना कुठलाही धर्म किंवा सामाजिक अथवा राजकीय तत्वांचा प्रचार करीत नाही. इतर कोणत्याही धार्मिक, सामाजिक किंवा राजकीय पक्षांशी ह्या संघटनेचा संबंध नाही.'
                })}
              </p>
              <p className="font-semibold text-aa-navy">
                {t({
                  english: 'Our primary purpose is to stay sober and help other alcoholics to achieve sobriety.',
                  marathi: "संघटनेचे ध्येय एकच आहे की, 'मद्यापासून स्वत:ला दूर ठेवणे आणि इतर मद्यपीडीत लोकांना ज्यांना दारूपासून मुक्ती मिळविण्याची इच्छा आहे त्यांना मदत करणे.'"
                })}
              </p>
            </div>
          </div>

          {/* 12 Steps Preview */}
          <div className="aa-card space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="h-8 w-8 text-aa-teal" />
              <h2 className="text-2xl font-bold text-aa-navy">
                {t({
                  english: 'The Twelve Steps of Alcoholics Anonymous',
                  marathi: "'अल्कोहोलिक्स ॲनॉनिमस' च्या सुधारणेच्या बारा पायऱ्या"
                })}
              </h2>
            </div>
            <ol className="list-decimal list-inside space-y-3 text-foreground leading-relaxed">
              <li>
                {t({
                  english: 'We admitted we were powerless over alcohol - that our lives had become unmanageable.',
                  marathi: 'आम्ही मान्य केले आहे की मद्यशक्तीपुढे आम्ही हतबल आहोत, आमचे जीवन अस्ताव्यस्त झाले आहे.'
                })}
              </li>
              <li>
                {t({
                  english: 'Came to believe that a Power greater than ourselves could restore us to sanity.',
                  marathi: 'आम्हास समजले की आमच्याहून महान शक्तीच आम्हास सुरळीत करू शकेल.'
                })}
              </li>
              <li>
                {t({
                  english: 'Made a decision to turn our will and our lives over to the care of God as we understood Him.',
                  marathi: 'आम्ही निर्णय घेतला की आमची ईच्छाशक्ती व जीवन संपूर्णपणे परमेश्वरास सोपवून द्यावे.'
                })}
              </li>
            </ol>
            <Link to="/work-of-aa">
              <Button variant="secondary" size="lg" className="w-full mt-4">
                {t({ english: 'Read All 12 Steps', marathi: 'पूढे वाचा' })}
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Sharings and FAQs Section */}
      <section className="aa-section bg-muted/30">
        <div className="aa-container grid md:grid-cols-2 gap-8">
          {/* Member Sharings */}
          <div className="aa-card space-y-4">
            <h2 className="text-2xl font-bold text-aa-navy">
              {t({
                english: 'A.A. Members Sharings',
                marathi: "'अल्कोहोलिक्स ॲनॉनिमस'च्या सभासदाचा एक अनुभव"
              })}
            </h2>
            <p className="text-foreground leading-relaxed line-clamp-6">
              {t({
                english: 'Life as a child for me was full of loneliness and fear with no sense of belonging or being loved and wanted at home. I soon discovered the comfort I was seeking within my peers in the neighborhood... And then we were introduced to a cigarette, alcohol and other forms of drugs. To me, it gave a sense of being an adult; that I was doing something that is no kid\'s stuff...',
                marathi: '...हळूहळू-हळूहळू \'शानदार ड्रिंक्स घेणे\' ची जागा \'दारू ढोसणे\' ने कधी घेतली हे मला कळले सुद्धा नाही. घरातली, समाजातली माझी प्रतिमा बिघडत चालली होती. दारूच्या अजगराचा विळखा माझ्याभोवती दिवसेंदिवस घट्ट व्हायला लागला...'
              })}
            </p>
            <Link to="/sharings">
              <Button className="bg-aa-navy hover:bg-aa-navy/90">
                {t({ english: 'Read More Sharings', marathi: 'पूढे वाचा' })}
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>

          {/* FAQs Preview */}
          <div className="aa-card space-y-4">
            <h2 className="text-2xl font-bold text-aa-navy">
              {t({
                english: 'FAQs for Newcomer',
                marathi: 'नवागताचे प्रश्न'
              })}
            </h2>
            <p className="text-foreground leading-relaxed">
              {t({
                english: 'This article is intended for people approaching Alcoholics Anonymous (A.A.) for the first time. In it we have tried to answer the questions most frequently in the minds of newcomers.',
                marathi: 'प्रथमच ए. ए. संघटनेत येणाऱ्यांसाठी हे माहिती पत्रक आहे. नवीन येणाऱ्या व्यक्तीच्या मनात असलेले प्रश्न – जे आम्ही जेव्हा प्रथम आलो तेव्हा आमच्याही पुढे उभे होते – सोडवण्याचा प्रयत्न येथे करीत आहोत.'
              })}
            </p>
            <div className="space-y-2">
              <h3 className="font-semibold text-aa-teal">
                {t({
                  english: 'AM I AN ALCOHOLIC?',
                  marathi: 'मी मद्यपी किंवा दारुडा आहे का?'
                })}
              </h3>
              <p className="text-sm text-foreground">
                {t({
                  english: 'If you repeatedly drink more than you intend or want to, if you get into trouble, or if you have memory lapses when you drink, you may be an alcoholic.',
                  marathi: 'परत-परत इच्छेपेक्षा जास्त तुम्ही पित असाल, पिण्यामुळे वारंवार अडचणीत येत असाल, प्यालानंतर बऱ्याच वेळा विस्मरण होत असल्यास, आपण मद्यपी, दारुडे, शराबी, किंवा अल्कोहोलिक असू शकता.'
                })}
              </p>
            </div>
            <Link to="/faq">
              <Button variant="secondary" className="w-full">
                {t({ english: 'Read All FAQs', marathi: 'पूढे वाचा' })}
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Meetings Section */}
      <section className="aa-section aa-gradient-healing text-white">
        <div className="aa-container max-w-4xl mx-auto text-center space-y-8">
          <div>
            <img 
              src="/english/images/marathwada_map.png" 
              alt="Marathwada Map" 
              className="mx-auto w-full max-w-2xl rounded-xl shadow-xl"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            {t({
              english: 'Regular meetings of Alcoholics Anonymous',
              marathi: 'नियमित सभा'
            })}
          </h2>
          <p className="text-lg">
            {t({
              english: 'in South Marathwada Region',
              marathi: 'दक्षिण मराठवाडा विभागात'
            })}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {['Beed', 'Hingoli', 'Latur', 'Nanded', 'Osmanabad', 'Parbhani'].map((district) => (
              <Link key={district} to="/find-meetings">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full bg-white/10 border-white text-white hover:bg-white hover:text-aa-navy backdrop-blur-sm"
                >
                  {district}
                </Button>
              </Link>
            ))}
          </div>
          <Link to="/find-meetings">
            <Button size="lg" className="bg-aa-orange hover:bg-aa-orange/90 text-white">
              {t({
                english: 'Find All Meetings',
                marathi: 'सर्व मिटींग्ज शोधा'
              })}
              <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="aa-section">
        <div className="aa-container max-w-3xl mx-auto text-center space-y-6">
          <img 
            src="/english/images/certificate.png" 
            alt="Government of Maharashtra Award"
            className="mx-auto w-full rounded-xl shadow-lg"
          />
          <p className="text-foreground font-medium">
            {t({
              english: 'Award by Government of Maharashtra for exceptional work in de-addiction',
              marathi: 'व्यसनमुक्तीच्या अपवादात्मक कार्यासाठी महाराष्ट्र सरकारचा पुरस्कार'
            })}
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="aa-section bg-aa-navy text-white">
        <div className="aa-container">
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/books">
              <div className="p-8 bg-white/10 rounded-xl hover:bg-white/20 transition-all text-center space-y-4 cursor-pointer">
                <BookOpen className="h-12 w-12 mx-auto text-aa-orange" />
                <h3 className="text-xl font-bold">
                  {t({ english: 'Books', marathi: 'पुस्तके' })}
                </h3>
                <p className="text-sm text-white/80">
                  {t({
                    english: 'AA literature and resources',
                    marathi: 'ए.ए. साहित्य आणि संसाधने'
                  })}
                </p>
              </div>
            </Link>
            <Link to="/gallery">
              <div className="p-8 bg-white/10 rounded-xl hover:bg-white/20 transition-all text-center space-y-4 cursor-pointer">
                <Users className="h-12 w-12 mx-auto text-aa-teal" />
                <h3 className="text-xl font-bold">
                  {t({ english: 'Gallery', marathi: 'गॅलरी' })}
                </h3>
                <p className="text-sm text-white/80">
                  {t({
                    english: 'Videos and awareness content',
                    marathi: 'व्हिडिओ आणि जागरूकता'
                  })}
                </p>
              </div>
            </Link>
            <Link to="/history">
              <div className="p-8 bg-white/10 rounded-xl hover:bg-white/20 transition-all text-center space-y-4 cursor-pointer">
                <Heart className="h-12 w-12 mx-auto text-aa-mint" />
                <h3 className="text-xl font-bold">
                  {t({ english: 'History', marathi: 'इतिहास' })}
                </h3>
                <p className="text-sm text-white/80">
                  {t({
                    english: 'History of Alcoholics Anonymous',
                    marathi: 'अल्कोहोलिक्स ॲनॉनिमसचा इतिहास'
                  })}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      </Layout>
    </>
  );
};

export default HomePage;
