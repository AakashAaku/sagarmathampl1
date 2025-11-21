import { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-green-700 font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Sagarmatha</h3>
              </div>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              {t.footer.aboutText}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-green-100 hover:text-white transition-colors">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-green-100 hover:text-white transition-colors">
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('products')} className="text-green-100 hover:text-white transition-colors">
                  {t.nav.products}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('team')} className="text-green-100 hover:text-white transition-colors">
                  {t.nav.team}
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-green-100 hover:text-white transition-colors">
                  {t.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t.footer.divisions}</h4>
            <ul className="space-y-2 text-green-100 text-sm">
              <li>{t.divisions.division1.title}</li>
              <li>{t.divisions.division2.title}</li>
              <li>{t.divisions.division3.title}</li>
              <li>{t.divisions.division4.title}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t.footer.newsletter}</h4>
            <p className="text-green-100 text-sm mb-4">
              {t.footer.newsletterText}
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.footer.emailPlaceholder}
                className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="w-full bg-white text-green-700 py-2 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                {subscribed ? '✓ Subscribed!' : t.footer.subscribe}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-green-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-green-100 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="text-green-100 text-sm">
              {t.footer.copyright}
            </div>

            <div className="flex space-x-6 text-green-100 text-sm">
              <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
