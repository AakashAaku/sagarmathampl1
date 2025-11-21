import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ne' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-green-700 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-700 font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Sagarmatha</h1>
              <p className="text-xs text-green-100">Multipurpose Pvt. Ltd.</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-green-200 transition-colors">
              {t.nav.home}
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-green-200 transition-colors">
              {t.nav.about}
            </button>
            <button onClick={() => scrollToSection('divisions')} className="hover:text-green-200 transition-colors">
              {t.nav.divisions}
            </button>
            <button onClick={() => scrollToSection('cafe')} className="hover:text-green-200 transition-colors">
              {t.nav.cafe}
            </button>
            <button onClick={() => scrollToSection('products')} className="hover:text-green-200 transition-colors">
              {t.nav.products}
            </button>
            <button onClick={() => scrollToSection('team')} className="hover:text-green-200 transition-colors">
              {t.nav.team}
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-green-200 transition-colors">
              {t.nav.contact}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 bg-green-600 hover:bg-green-500 px-3 py-2 rounded-lg transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === 'en' ? 'EN' : 'ने'}</span>
            </button>
          </nav>

          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 bg-green-600 hover:bg-green-500 px-2 py-1 rounded transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-medium">{language === 'en' ? 'EN' : 'ने'}</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-green-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <button onClick={() => scrollToSection('home')} className="block hover:text-green-200 transition-colors">
              {t.nav.home}
            </button>
            <button onClick={() => scrollToSection('about')} className="block hover:text-green-200 transition-colors">
              {t.nav.about}
            </button>
            <button onClick={() => scrollToSection('divisions')} className="block hover:text-green-200 transition-colors">
              {t.nav.divisions}
            </button>
            <button onClick={() => scrollToSection('cafe')} className="block hover:text-green-200 transition-colors">
              {t.nav.cafe}
            </button>
            <button onClick={() => scrollToSection('products')} className="block hover:text-green-200 transition-colors">
              {t.nav.products}
            </button>
            <button onClick={() => scrollToSection('team')} className="block hover:text-green-200 transition-colors">
              {t.nav.team}
            </button>
            <button onClick={() => scrollToSection('contact')} className="block hover:text-green-200 transition-colors">
              {t.nav.contact}
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
