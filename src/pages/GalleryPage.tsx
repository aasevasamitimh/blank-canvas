import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GalleryPage = () => {
  const { t, language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const videos = [
    {
      url: 'https://youtu.be/ifNTmgsxUYQ',
      thumbnail: `/${language}/images/thumbnail-1.png`,
      title: {
        english: 'Satyamev Jayate - Alcohol Abuse - Alcoholism is a disease',
        marathi: 'सत्यमेव जयते - दारूचा गैरवापर - मद्यपाश हा एक आजार आहे'
      }
    },
    {
      url: 'https://youtu.be/_nReLVR83b8',
      thumbnail: `/${language}/images/thumbnail-2.png`,
      title: {
        english: 'Satyamev Jayate - Alcohol Abuse - The cure',
        marathi: 'सत्यमेव जयते - दारूचा गैरवापर - उपचार'
      }
    },
    {
      url: 'https://youtu.be/PsVOBpIXg_A',
      thumbnail: `/${language}/images/thumbnail-3.png`,
      title: {
        english: 'Satyamev Jayate - Alcohol Abuse - How AA helped \'Laxman\'',
        marathi: 'सत्यमेव जयते - दारूचा गैरवापर - ए.ए.ने \'लक्ष्मण\'ला कशी मदत केली'
      }
    },
    {
      url: 'https://youtu.be/ENjrGpWXLtQ',
      thumbnail: `/${language}/images/thumbnail-4.png`,
      title: {
        english: 'Satyamev Jayate - Alcohol Abuse - Contact AA',
        marathi: 'सत्यमेव जयते - दारूचा गैरवापर - ए.ए.शी संपर्क साधा'
      }
    },
    {
      url: 'https://youtu.be/ro1UhzOR8ZM',
      thumbnail: `/${language}/images/thumbnail-5.png`,
      title: {
        english: 'Satyamev Jayate S1 | Impact Story | Ep on Alcohol Abuse | One day at a time',
        marathi: 'सत्यमेव जयते सीझन १ | प्रभाव कथा | दारूचा गैरवापर | एका वेळी एक दिवस'
      }
    }
  ];

  const awarenessSlides = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % awarenessSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + awarenessSlides.length) % awarenessSlides.length);
  };

  return (
    <Layout title={t({ english: 'Gallery', marathi: 'गॅलरी' })}>
      {/* Videos Section */}
      <section className="aa-section bg-aa-light">
        <div className="aa-container">
          <h1 className="text-4xl font-bold text-aa-orange mb-12 text-center">
            {t({ english: 'Videos', marathi: 'व्हिडिओज' })}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <a
                key={index}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="aa-card group hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title[language]}
                    className="w-full h-auto transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-foreground text-center">{video.title[language]}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Awareness Carousel Section */}
      <section className="aa-section bg-background">
        <div className="aa-container">
          <h2 className="text-4xl font-bold text-aa-orange mb-12 text-center">
            {t({ english: 'Awareness', marathi: 'जनजागृती' })}
          </h2>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Carousel */}
            <div className="overflow-hidden rounded-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {awarenessSlides.map((slide, slideIndex) => (
                  <div key={slideIndex} className="min-w-full grid md:grid-cols-2 gap-4 px-2">
                    {slide.map((imageNum) => (
                      <img
                        key={imageNum}
                        src={`/${language}/images/pi-${imageNum}.png`}
                        alt={`Awareness ${imageNum}`}
                        className="w-full h-auto rounded-lg"
                        loading="lazy"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {awarenessSlides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? 'bg-aa-teal w-8' : 'bg-aa-mint'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GalleryPage;
