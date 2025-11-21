import { useState } from 'react';
import { Coffee, Leaf, Smartphone, Recycle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Cafe() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { t } = useLanguage();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  return (
    <section id="cafe" className="py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-400 text-green-900 px-6 py-2 rounded-full font-bold mb-6">
            {t.cafe.subtitle}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.cafe.title}
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            {t.cafe.description}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <Leaf className="w-12 h-12" />
            </div>
            <h3 className="font-bold text-lg mb-2">{t.cafe.features.organic}</h3>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <Coffee className="w-12 h-12" />
            </div>
            <h3 className="font-bold text-lg mb-2">{t.cafe.features.vegetarian}</h3>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <Smartphone className="w-12 h-12" />
            </div>
            <h3 className="font-bold text-lg mb-2">{t.cafe.features.smart}</h3>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
            <div className="flex justify-center mb-4">
              <Recycle className="w-12 h-12" />
            </div>
            <h3 className="font-bold text-lg mb-2">{t.cafe.features.sustainable}</h3>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              {t.cafe.newsletter}
            </h3>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.cafe.emailPlaceholder}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-green-600 focus:outline-none text-gray-900"
                required
              />
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                {subscribed ? '✓ Subscribed!' : t.cafe.subscribe}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
