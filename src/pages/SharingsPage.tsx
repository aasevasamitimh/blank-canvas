import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const SharingsPage = () => {
  const { t } = useLanguage();

  return (
    <Layout title={t({ english: 'Sharings', marathi: 'अनुभव' })}>
      <section className="aa-section bg-aa-light">
        <div className="aa-container max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-aa-orange mb-8 text-center">
            {t({ english: 'Starting a New Life, All Over Again', marathi: 'नवीन जीवनाची पुन्हा सुरुवात' })}
          </h1>
          
          <div className="aa-card prose prose-lg max-w-none">
            <p className="text-right font-semibold text-aa-navy">
              {t({ english: '– by Yatin', marathi: '– यतीन द्वारे' })}
            </p>

            <p className="text-justify leading-relaxed">
              {t({
                english: 'Life as a child for me was full of loneliness and fear with no sense of belonging or being loved and wanted at home. I soon discovered the comfort I was seeking within my peers in the neighborhood. At last, there was something to fill the void within me and I clinched to it.',
                marathi: 'लहानपणी माझे जीवन एकटेपणा आणि भीतीने भरलेले होते, घरी प्रेम आणि संबंध यांची जाणीव नव्हती. लवकरच मला शेजारच्या मित्रांमध्ये मला हवे असलेले सुख सापडले. शेवटी, माझ्या आतील रिकामेपणा भरण्यासाठी काहीतरी मिळाले आणि मी त्याला चिकटून राहिलो.'
              })}
            </p>

            <p className="text-justify leading-relaxed">
              {t({
                english: 'Together we did, all that we did; going to school, playing, having fun etc. As we grew, we were constantly seeking some adventurous ventures. We would go out in the deep sea with inflated tubes and no one knew how to swim, we would climb someone\'s coconut tree and steal coconuts, we would experiment with gun powder extracted out of fire crackers and make mini canons and sometimes we would gang up and bash up the teachers good boy in our classroom. We got a high out of doing all this. All the dogs and cats and even the street hawkers feared us.',
                marathi: 'आम्ही सर्व काही एकत्र करत होतो; शाळेत जाणे, खेळणे, गंमत करणे इ. जसजसे आम्ही मोठे होत गेलो, तसतसे आम्ही साहसी कारनामे शोधत राहिलो. आम्ही फुगलेल्या ट्यूबवर खोल समुद्रात जायचो आणि कोणालाच पोहता येत नव्हते, आम्ही कोणाच्या तरी नारळाच्या झाडावर चढून नारळ चोरायचो, आम्ही फटाक्यांमधून काढलेल्या बारूदाचे प्रयोग करून लहान तोफा बनवायचो आणि कधीकधी आम्ही वर्गातील शिक्षकांच्या चांगल्या मुलाला मारायचो. हे सर्व करताना आम्हाला खूप मजा यायची. सर्व कुत्रे, मांजरी आणि रस्त्यावरचे विक्रेतेसुद्धा आमची भीती बाळगत.'
              })}
            </p>

            <p className="text-justify leading-relaxed">
              {t({
                english: 'And then we were introduced to a cigarette and then to alcohol and other forms of drugs. To me, it gave a sense of being an adult; that I was doing something that is no kid\'s stuff. The initial years flew by and soon I was proclaimed a nuisance by the neighborhood.',
                marathi: 'आणि मग आम्हाला सिगारेट आणि नंतर दारू आणि इतर प्रकारच्या ड्रग्सची ओळख झाली. माझ्यासाठी, त्यामुळे मी प्रौढ झालो असे वाटायचे; मी काहीतरी करत आहे जे मुलांचे नाही. सुरुवातीची वर्षे उडून गेली आणि लवकरच मला शेजारच्यांनी उपद्रव म्हणून घोषित केले.'
              })}
            </p>

            <p className="text-justify leading-relaxed">
              {t({
                english: 'My peer group by the age of 15 had now changed. They were all men who would drink to glory all day and lived like a king, so I though then. I wanted to be a king and my drinking progressed. My academic education was suffering but who cared; books were for the good boy\'s and I hated the goodliness of it all.',
                marathi: '१५ वर्षांच्या वयात माझा मित्र गट बदलला होता. ते सर्व पुरुष होते जे दिवसभर पीत असत आणि राजासारखे जगत असत, तेव्हा मला असे वाटायचे. मला राजा व्हायचे होते आणि माझे पिणे वाढत गेले. माझे शैक्षणिक शिक्षण बिघडत होते पण कोणाची काळजी होती; पुस्तके चांगल्या मुलांसाठी होती आणि मला या सर्व चांगुलपणाचा तिरस्कार होता.'
              })}
            </p>

            <p className="text-justify leading-relaxed">
              {t({
                english: 'By the age of 22, I had become a hard core alcoholic as well as a drug addict. My family tried all thing they though was right for me in secret as they were worried of the families status in the society. I would be locked up in the house or sent to remote location for months or some priest would advise to carryout religious rituals, but nothing worked. I myself was not yet ready to let go.',
                marathi: '२२ वर्षांच्या वयात, मी कट्टर दारूड्या तसेच नशेड्या बनलो होतो. माझ्या कुटुंबाने समाजातील कौटुंबिक स्थितीची काळजी घेत गुप्तपणे माझ्यासाठी योग्य असे सर्व प्रयत्न केले. मला घरात कोंडून ठेवले जायचे किंवा महिनोभर दूरच्या ठिकाणी पाठवले जायचे किंवा काही पुजारी धार्मिक विधी करण्यास सांगायचे, पण काहीच काम झाले नाही. मी स्वतःच अजून सोडण्यास तयार नव्हतो.'
              })}
            </p>

            <p className="text-justify leading-relaxed">
              {t({
                english: 'I remember I had made my first AA Meeting at the age of 18 in the year 1982, but then, there were all oldies around and it felt strange to be amongst them. By the way in the 80\'s in Mumbai, as per my observation in all these years, the average age that an alcoholic would came to AA seeking recovery was after he crossed the age of 40. Things though have changed now by the year 2012, as a lot of awareness about the ill effect of alcohol and drugs addition and that these type of addition is in fact a disease is been widely accepted; we have youngster these days walking into the fellowship.',
                marathi: 'मला आठवते की मी १९८२ साली १८ वर्षांच्या वयात माझी पहिली ए.ए. मीटिंग केली होती, पण तेव्हा आजूबाजूला सर्व वयस्कर लोक होते आणि त्यांच्यामध्ये असणे विचित्र वाटत होते. तसे पाहिले तर ८० च्या दशकात मुंबईत, या सर्व वर्षांतील माझ्या निरीक्षणानुसार, सरासरी वय म्हणजे ४० वर्षांनंतर दारूड्या ए.ए.मध्ये सुधारणेसाठी येत असत. २०१२ पर्यंत गोष्टी बदलल्या आहेत, कारण दारू आणि ड्रग्सच्या व्यसनाच्या वाईट परिणामांबद्दल आणि या प्रकारचे व्यसन खरोखरच एक आजार आहे याची जागरूकता मोठ्या प्रमाणावर स्वीकारली गेली आहे; आजकाल आपल्याकडे तरुण लोक या संस्थेत येत आहेत.'
              })}
            </p>

            <p className="text-justify leading-relaxed">
              {t({
                english: 'Anyway, so after around 1982, I would still go once in a while along with my peers to an AA meeting, not with the intention of sobering up, but just kill time and entertain myself by listening to the stories of these oldies in AA. I thought they were weak people who couldn\'t manage their lives; they were losers and in all these I would try to console myself that I was in better shape and in control.',
                marathi: 'तरीही, १९८२ नंतर, मी कधीकधी माझ्या मित्रांसोबत ए.ए. मीटिंगला जात असे, शांत होण्याच्या उद्देशाने नव्हे, तर फक्त वेळ घालवण्यासाठी आणि ए.ए.मधील या वयस्करांच्या गोष्टी ऐकून स्वतःचे मनोरंजन करण्यासाठी. मला वाटायचे की ते कमकुवत लोक आहेत जे त्यांचे जीवन व्यवस्थापित करू शकत नाहीत; ते पराजित आहेत आणि या सर्वांमध्ये मी स्वतःला सांत्वन देण्याचा प्रयत्न करत असे की मी चांगल्या स्थितीत आहे आणि नियंत्रणात आहे.'
              })}
            </p>

            <p className="text-justify leading-relaxed">
              {t({
                english: 'In the following few year\'s things started happening to me those that I had heard members share in the AA meetings. Blackouts, debts, ill health, jailed, fear of future, suicidal thoughts and attempts, being sacked from job and penniless, were now all what I was living with. I was in total denial and would brush off these events as a coincidence.',
                marathi: 'पुढील काही वर्षांत माझ्यासोबत त्या गोष्टी घडू लागल्या ज्या मी ए.ए. मीटिंगमध्ये सदस्यांना सांगताना ऐकल्या होत्या. ब्लॅकआउट, कर्ज, आजारपण, तुरुंगवास, भविष्याची भीती, आत्महत्येचे विचार आणि प्रयत्न, नोकरीतून काढून टाकले जाणे आणि निराधार होणे, या सर्वांसोबत मी आता जगत होतो. मी पूर्णपणे नकारत होतो आणि या घटनांना योगायोग म्हणून टाकून देत असे.'
              })}
            </p>

            <p className="text-justify leading-relaxed">
              {t({
                english: 'And finally one day in the year 1991, I found myself living on the streets, begging. I had never imagined myself live such a life. But even then my false pride would not allow me to stoop and ask for forgiveness and help. I told myself, I would rather die but bow down and accept defeat. Truly enough, I could hear a cry within me. It was a voice of a helpless weak man wanting to live a good life. With no hope, I waited for death to come.',
                marathi: 'आणि शेवटी १९९१ साली एके दिवशी, मी स्वतःला रस्त्यावर जगताना, भीक मागताना आढळलो. मी कधीच अशा जीवनाची कल्पना केली नव्हती. पण तरीही माझा खोटा अभिमान मला झुकून माफी मागण्यास आणि मदत मागण्यास परवानगी देत नव्हता. मी स्वतःला सांगितले, मी मरण पत्करेन पण झुकून पराभव मान्य करणार नाही. खरोखरच, मला माझ्या आत एक रडणे ऐकू येत होते. तो एक असहाय्य कमकुवत माणसाचा आवाज होता जो चांगले जीवन जगू इच्छित होता. कोणतीही आशा न ठेवता, मी मृत्यूची वाट पाहत होतो.'
              })}
            </p>

            <p className="text-justify leading-relaxed">
              {t({
                english: 'But then came a friend who had been a onetime drinking partner. In the days we drank together, I would tell myself that this fellow was worse than me and would never sober up in life. And now he stood before me, clean, good looking; the sober looks, extending his hand to me. We sat together at a restaurant chatting and he shared how AA and the 12 step program changed his life.',
                marathi: 'पण मग एक मित्र आला जो एकेकाळी माझा मद्यपानाचा सोबती होता. आम्ही एकत्र पीत असताना, मी स्वतःला सांगत असे की हा माणूस माझ्यापेक्षा वाईट आहे आणि आयुष्यात कधीही शांत होणार नाही. आणि आता तो माझ्यासमोर उभा होता, स्वच्छ, देखणा; शांत दिसणारा, माझ्याकडे हात पुढे करत. आम्ही एका रेस्टॉरंटमध्ये एकत्र बसून गप्पा मारत होतो आणि त्याने सांगितले की ए.ए. आणि १२ पायऱ्यांच्या कार्यक्रमाने त्याचे जीवन कसे बदलले.'
              })}
            </p>

            <p className="text-justify leading-relaxed">
              {t({
                english: 'That evening he took me back to AA classroom, where I was welcomed and hugged by the very same people I thought were losers. For the first time in my life I felt the warmth of unconditional love and acceptance. I wept out the burden I was carrying all since my childhood and felt relieved and free from the bondage of my doings. I will cherish that moment until I am alive.',
                marathi: 'त्या संध्याकाळी त्याने मला परत ए.ए. वर्गात नेले, जिथे मला त्याच लोकांनी स्वागत केले आणि मिठी मारली ज्यांना मी पराजित मानत होतो. माझ्या आयुष्यात पहिल्यांदाच मला बिनशर्त प्रेम आणि स्वीकृतीची उबदारता जाणवली. मी माझ्या लहानपणापासून वाहून नेत असलेले ओझे रडून काढले आणि माझ्या कृतींच्या बंधनातून मुक्त आणि सुटका झाल्यासारखे वाटले. मी जिवंत आहे तोपर्यंत मी त्या क्षणाची आठवण ठेवीन.'
              })}
            </p>

            <p className="text-justify leading-relaxed">
              {t({
                english: 'It took me almost 9 years after coming to AA to sober up. The surrender had happened, the obsession to drink gone, and after all sufferings, now there was no looking back. One day at a time, I was to make a new beginning from scratch at the age of 27 in the year 1991 and I started all over again.',
                marathi: 'ए.ए.मध्ये आल्यानंतर मला शांत होण्यासाठी जवळजवळ ९ वर्षे लागली. समर्पण झाले होते, पिण्याची धडपड निघून गेली होती, आणि सर्व यातनांनंतर, आता मागे वळून पाहायचे नव्हते. एका वेळी एक दिवस, मला २७ वर्षांच्या वयात १९९१ मध्ये सुरवातीपासून नवीन सुरुवात करायची होती आणि मी पुन्हा सुरुवात केली.'
              })}
            </p>

            <p className="text-justify leading-relaxed">
              {t({
                english: 'Keeping it simple this time around, one day at a time, I made it a point to attend AA meeting daily. After a few months had passed by, I took up a part time job to support myself and also started my studies to build a broken carrier, such that it would still allow me time to make a meeting. I also took up to reading AA literature and helping out in AA Group service.',
                marathi: 'या वेळी ते सोपे ठेवत, एका वेळी एक दिवस, मी दररोज ए.ए. मीटिंगला उपस्थित राहण्याचा मुद्दा बनवला. काही महिने निघून गेल्यानंतर, मी स्वतःला आधार देण्यासाठी अर्धवेळ नोकरी घेतली आणि तुटलेले करिअर बांधण्यासाठी माझे अभ्यास सुरू केले, असे की मला अजूनही मीटिंगसाठी वेळ मिळेल. मी ए.ए. साहित्य वाचणे आणि ए.ए. ग्रुप सेवेत मदत करणे देखील सुरू केले.'
              })}
            </p>

            <p className="text-justify leading-relaxed">
              {t({
                english: 'As years passed by, living sober, I discovered that life is so simple to live until you give in to the temptations around and are drawn along in the strong current that lure you to an unknown destination. After having learned the lessons of life the hard way, it has been all embedded in my heart that the First Drink Does The Damage, that I need to work the 12 Step Program, that I need to make meetings and also to keep what I have by giving it away by means of carrying the message of recovery to the still suffering. Today, I do make it a point to follow these things to the best of my ability.',
                marathi: 'वर्षे निघून गेल्यावर, शांत राहून, मला समजले की जीवन जगणे इतके सोपे आहे जोपर्यंत तुम्ही आजूबाजूच्या मोहांना बळी पडत नाही आणि तुम्हाला अज्ञात गंतव्यस्थानाकडे आकर्षित करणाऱ्या मजबूत प्रवाहात खेचले जात नाही. कठीण मार्गाने जीवनाचे धडे शिकल्यानंतर, माझ्या हृदयात हे सर्व रुजले आहे की पहिला घोट नुकसान करतो, मला १२ पायऱ्यांचा कार्यक्रम करणे आवश्यक आहे, मला मीटिंग्स करणे आवश्यक आहे आणि अजूनही पीडित असलेल्यांना सुधारणेचा संदेश देऊन माझ्याकडे जे आहे ते ठेवणे आवश्यक आहे. आज, मी माझ्या क्षमतेनुसार या गोष्टींचे पालन करण्याचा मुद्दा बनवतो.'
              })}
            </p>

            <p className="text-justify leading-relaxed">
              {t({
                english: 'God has been kind to me all throughout my life, as I see now. Today, he has compensated for all that I had truly longed for in my early life.',
                marathi: 'देव माझ्या आयुष्यभर माझ्यावर दयाळू आहे, आता मला दिसते. आज, त्याने माझ्या सुरुवातीच्या आयुष्यात मी खरोखर ज्याची इच्छा बाळगली होती त्या सर्वांची भरपाई केली आहे.'
              })}
            </p>
          </div>

          <div className="flex justify-between mt-8">
            <Button variant="outline" size="lg" onClick={() => window.history.back()}>
              {t({ english: 'Back', marathi: 'मागे' })}
            </Button>
            <Button 
              size="lg"
              onClick={() => window.open('https://www.aawmig.org/category/aa-members-sharings/', '_blank')}
            >
              {t({ english: 'Next Sharing', marathi: 'पुढील अनुभव' })}
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SharingsPage;
