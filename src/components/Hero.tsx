import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Download, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const heroImages = [
  'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/4503270/pexels-photo-4503270.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/2933095/pexels-photo-2933095.jpeg?auto=compress&cs=tinysrgb&w=1920'
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen pt-16">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Agricultural scene ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
        ))}
      </div>

      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-2xl md:text-3xl text-green-300 font-semibold">
                {t.hero.subtitle}
              </p>
              <p className="text-lg text-gray-200">
                {t.hero.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('divisions')}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  <span>{t.hero.cta1}</span>
                </button>
                <button
                  onClick={() => scrollToSection('divisions')}
                  className="bg-white hover:bg-gray-100 text-green-700 px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 transition-all transform hover:scale-105 shadow-lg"
                >
                  <span>{t.hero.cta2}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="hidden md:flex justify-center items-center">
              <div className="relative w-96 h-96">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl" style={{ width: '144px', height: '144px' }}>
                    <div className="text-center">
                      <div className="text-green-700 font-bold text-2xl">Sagarmatha</div>
                      <div className="text-xs text-green-600 mt-1">Agriculture</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-green-600 text-white px-6 py-3 rounded-full shadow-xl">
                    <div className="text-center">
                      <div className="font-bold">{t.hero.values.sustainability}</div>
                    </div>
                  </div>
                </div>

                <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                  <div className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-xl">
                    <div className="text-center">
                      <div className="font-bold">{t.hero.values.innovation}</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div className="bg-yellow-600 text-white px-6 py-3 rounded-full shadow-xl">
                    <div className="text-center">
                      <div className="font-bold">{t.hero.values.quality}</div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-orange-600 text-white px-6 py-3 rounded-full shadow-xl">
                    <div className="text-center">
                      <div className="font-bold">{t.hero.values.community}</div>
                    </div>
                  </div>
                </div>

                <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                  <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    fill="none"
                    stroke="rgba(34,197,94,0.5)"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImage ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
