import { Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function MobileApp() {
  const { t } = useLanguage();

  const features = [
    {
      title: t.mobileApp.features.marketplace.title,
      description: t.mobileApp.features.marketplace.description
    },
    {
      title: t.mobileApp.features.wholesale.title,
      description: t.mobileApp.features.wholesale.description
    },
    {
      title: t.mobileApp.features.inventory.title,
      description: t.mobileApp.features.inventory.description
    },
    {
      title: t.mobileApp.features.farmer.title,
      description: t.mobileApp.features.farmer.description
    },
    {
      title: t.mobileApp.features.verification.title,
      description: t.mobileApp.features.verification.description
    },
    {
      title: t.mobileApp.features.delivery.title,
      description: t.mobileApp.features.delivery.description
    }
  ];

  return (
    <section id="mobile-app" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.mobileApp.title}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.mobileApp.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border-l-4 border-green-600"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

