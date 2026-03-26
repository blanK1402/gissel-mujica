import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logoImg from '@/assets/images/logo.jpeg';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es');
  };

  const servicesLinks = [
    { label: t('services.buying.title'), path: '/services#buying' },
    { label: t('services.selling.title'), path: '/services#selling' },
    { label: t('services.investment.title'), path: '/services#investment' },
  ];

  const menuItems = [
    { label: t('common.home'), path: '/' },
    { label: t('common.services'), path: '/services', hasDropdown: true },
    { label: t('common.about'), path: '/about' },
    { label: t('common.faq'), path: '/faq' },
    { label: t('common.contact'), path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-[rgb(229,229,223)]/90 backdrop-blur-md shadow-sm z-50 border-b border-[rgb(190,137,41)]/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 transition-transform hover:scale-[1.02] duration-300">
          <div className="bg-[rgb(240,239,233)] w-10 h-10 md:w-11 md:h-11 rounded-xl shadow-md border border-[rgb(190,137,41)]/20 p-1 overflow-hidden">
            <img 
              src={logoImg} 
              alt="Gissel Mujica Realtor" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-black text-[rgb(45,45,42)] leading-tight tracking-tight">GISSEL MUJICA</p>
            <p className="text-[10px] text-[rgb(190,137,41)] font-bold uppercase tracking-[0.2em] -mt-0.5">Realtor® Florida</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <div
              key={item.path}
              className="relative group"
              onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
              onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
            >
              <Link
                to={item.path}
                className="text-[rgb(45,45,42)] hover:text-[rgb(190,137,41)] transition-colors font-semibold text-sm relative py-2"
                onClick={() => item.hasDropdown && setIsServicesOpen(!isServicesOpen)}
              >
                {item.label}
                {item.hasDropdown && (
                  <span className={`ml-1 inline-block transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}>▾</span>
                )}
              </Link>
              
              {item.hasDropdown && isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-[rgb(240,239,233)] rounded-xl shadow-xl border border-[rgb(190,137,41)]/10 py-3 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex flex-col">
                    {servicesLinks.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="px-5 py-3 text-sm font-medium text-[rgb(45,45,42)] hover:bg-[rgb(190,137,41)]/10 hover:text-[rgb(190,137,41)] transition-all"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleLanguage}
            className="text-sm font-semibold text-[rgb(45,45,42)] hover:text-[rgb(190,137,41)] transition-colors px-3 py-1 rounded-lg hover:bg-[rgb(190,137,41)]/10"
          >
            {i18n.language === 'es' ? 'EN' : 'ES'}
          </button>

          <Link 
            to="/contact" 
            className="hidden md:flex items-center justify-center font-semibold transition-all duration-300 rounded-xl shadow-sm hover:shadow-md active:scale-[0.98] bg-[rgb(190,137,41)] text-white hover:bg-[rgb(160,115,30)] px-6 py-2.5 text-sm"
          >
            {t('header.cta')}
          </Link>

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
            <Link 
              to="/contact" 
              className="mt-2 flex items-center justify-center font-semibold transition-all duration-300 rounded-xl bg-[rgb(190,137,41)] text-white hover:bg-[rgb(160,115,30)] py-4 text-base w-full shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.cta')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
