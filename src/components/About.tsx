import { Leaf, Users, Target, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.about.title}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.about.description}
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-white mb-16 shadow-2xl">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              {t.about.subtitle}
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-5xl font-bold">100%</div>
              <div className="text-lg font-semibold text-green-100">{t.about.stats.organic}</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">100%</div>
              <div className="text-lg font-semibold text-green-100">{t.about.stats.vegetarian}</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">∞</div>
              <div className="text-lg font-semibold text-green-100">{t.about.stats.sustainability}</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-200">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-gray-900">{t.about.mission}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t.about.missionText}
            </p>
          </div>

          <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <Heart className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">{t.about.vision}</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t.about.visionText}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-green-600">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
              {t.about.values.sustainability.title}
            </h4>
            <p className="text-gray-600 text-center text-sm">
              {t.about.values.sustainability.description}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
              {t.about.values.innovation.title}
            </h4>
            <p className="text-gray-600 text-center text-sm">
              {t.about.values.innovation.description}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-yellow-600">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-yellow-600" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
              {t.about.values.quality.title}
            </h4>
            <p className="text-gray-600 text-center text-sm">
              {t.about.values.quality.description}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-orange-600">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-center mb-3 text-gray-900">
              {t.about.values.community.title}
            </h4>
            <p className="text-gray-600 text-center text-sm">
              {t.about.values.community.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
