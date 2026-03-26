import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '../common';
import logoImg from '@/assets/images/logo.jpeg';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const menuItems = [
    { label: t('common.home'), path: '/' },
    { label: t('common.services'), path: '/servicios' },
    { label: t('common.about'), path: '/nosotros' },
    { label: t('common.faq'), path: '/faq' },
    { label: t('common.contact'), path: '/contacto' },
  ];

  return (
    <header className="fixed top-0 w-full bg-[rgb(229,229,223)]/90 backdrop-blur-md shadow-sm z-50 border-b border-[rgb(190,137,41)]/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <img 
            src={logoImg} 
            alt="Gissel Mujica Realtor" 
            className="w-10 h-10 rounded-xl shadow-md group-hover:shadow-lg transition-shadow object-cover"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-[rgb(45,45,42)]">GISSEL MUJICA</p>
            <p className="text-xs text-[rgb(190,137,41)] font-medium">Realtor® WRA</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="text-[rgb(45,45,42)] hover:text-[rgb(190,137,41)] transition-colors font-medium text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[rgb(190,137,41)] hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="text-sm font-semibold text-[rgb(45,45,42)] hover:text-[rgb(190,137,41)] transition-colors px-3 py-1 rounded-lg hover:bg-[rgb(190,137,41)]/10"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>

          <a href={`tel:${import.meta.env.VITE_PHONE_NUMBER}`} className="hidden md:block">
            <Button size="md" variant="primary">
              {t('header.cta')}
            </Button>
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[rgb(45,45,42)] text-2xl focus:outline-none p-2 rounded-lg hover:bg-[rgb(190,137,41)]/10 transition-colors"
          >
            ☰
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[rgb(229,229,223)] border-t border-[rgb(190,137,41)]/20">
          <nav className="flex flex-col space-y-1 px-4 py-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-[rgb(45,45,42)] hover:text-[rgb(190,137,41)] hover:bg-[rgb(190,137,41)]/10 transition-all font-medium py-3 px-4 rounded-xl"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a href={`tel:${import.meta.env.VITE_PHONE_NUMBER}`} className="pt-2">
              <Button size="md" variant="primary" className="w-full">
                {t('header.cta')}
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
