import { Sprout, Coffee, Globe2, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Divisions() {
  const { t } = useLanguage();

  const divisions = [
    {
      icon: Sprout,
      color: 'green',
      title: t.divisions.division1.title,
      description: t.divisions.division1.description,
      link: '/divisions/agriculture'
    },
    {
      icon: Coffee,
      color: 'amber',
      title: t.divisions.division2.title,
      description: t.divisions.division2.description,
      link: '/divisions/food-beverage'
    },
    {
      icon: Globe2,
      color: 'blue',
      title: t.divisions.division3.title,
      description: t.divisions.division3.description,
      link: '/divisions/import-export'
    },
    {
      icon: Smartphone,
      color: 'purple',
      title: t.divisions.division4.title,
      description: t.divisions.division4.description,
      link: '/divisions/digital-platform'
    }
  ];

  const colorClasses = {
    green: {
      bg: 'bg-green-100',
      text: 'text-green-600',
      hover: 'hover:border-green-500'
    },
    amber: {
      bg: 'bg-amber-100',
      text: 'text-amber-600',
      hover: 'hover:border-amber-500'
    },
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      hover: 'hover:border-blue-500'
    },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-600',
      hover: 'hover:border-purple-500'
    }
  };

  return (
    <section id="divisions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.divisions.title}
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            {t.divisions.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {divisions.map((division, index) => {
            const Icon = division.icon;
            const colors = colorClasses[division.color as keyof typeof colorClasses];

            return (
              <div
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-2 border-transparent ${colors.hover} cursor-pointer`}
              >
                <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {division.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {division.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
