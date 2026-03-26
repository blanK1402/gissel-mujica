import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../../config/constants';
import gisselPhotoEs from '../../assets/images/es-mujicaphoto.jpeg';
import gisselPhotoEn from '../../assets/images/en-mujicaphoto.jpeg';
import wraLogo from '../../assets/images/logo.jpeg';
import propertyPhoto from '../../assets/images/service-hero-property.png';

export const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';
  const gisselPhoto = isSpanish ? gisselPhotoEs : gisselPhotoEn;

  const heroMessages = isSpanish
    ? {
        greeting: "Hola, soy Gissel Mujica",
        role: "Tu Realtor de confianza",
        title_1: "Te acompaño",
        title_2: "en todo el proceso",
        subtitle: "Encontrar tu hogar ideal es más que una transacción. Estoy aquí para guiarte, explicarte cada detalle y hacer de este proceso una experiencia segura y confiable.",
        cta: "Hablemos",
        social_proof: "Más de 50 familias han encontrado su hogar con mi ayuda",
      }
    : {
        greeting: "Hi, I'm Gissel Mujica",
        role: "Your trusted Realtor",
        title_1: "I'm with you",
        title_2: "every step of the way",
        subtitle: "Finding your dream home is more than a transaction. I'm here to guide you, explain every detail, and make this process a safe and trustworthy experience.",
        cta: "Let's Talk",
        social_proof: "More than 50 families have found their home with my help",
      };

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[rgb(190,137,41)] to-transparent"></div>
      
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-[rgb(190,137,41)]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-[rgb(190,137,41)]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 relative z-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-[rgb(240,239,233)] w-14 h-14 md:w-16 md:h-16 rounded-xl border border-[rgb(190,137,41)]/20 shadow-md overflow-hidden flex-shrink-0 p-1">
                <img src={wraLogo} alt="WRA Agency" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-[rgb(190,137,41)] uppercase tracking-[0.2em]">
                  WRA Agency
                </span>
                <span className="text-xs font-medium text-[rgb(100,98,92)] uppercase tracking-widest">
                  {isSpanish ? 'Socio Estratégico' : 'Strategic Partner'}
                </span>
              </div>
            </div>

            <p className="text-[rgb(190,137,41)] font-medium mb-2 tracking-wide uppercase text-sm">
              {heroMessages.role}
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[rgb(45,45,42)] mb-2 leading-tight">
              <span className="block">{heroMessages.greeting}</span>
            </h1>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(190,137,41)] mb-6 leading-tight">
              {heroMessages.title_1} {heroMessages.title_2}
            </h1>

            <p className="text-lg md:text-xl text-[rgb(100,98,92)] mb-8 leading-relaxed max-w-lg">
              {heroMessages.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link 
                to="/contacto" 
                className="inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl shadow-lg hover:shadow-[rgb(190,137,41)]/40 active:scale-[0.98] bg-[rgb(190,137,41)] text-white hover:bg-[rgb(160,115,30)] px-10 py-4 text-lg w-full sm:w-auto"
              >
                {heroMessages.cta}
              </Link>
              <a 
                href={CONTACT_INFO.WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl shadow-md active:scale-[0.98] border-2 border-[rgb(190,137,41)] text-[rgb(190,137,41)] hover:bg-[rgb(190,137,41)]/10 px-8 py-4 text-lg w-full sm:w-auto"
              >
                WhatsApp
              </a>
            </div>

            <p className="text-sm text-[rgb(100,98,92)] flex items-center space-x-2">
              <span className="w-5 h-5 rounded-full bg-[rgb(190,137,41)]/20 flex items-center justify-center">
                <span className="text-[rgb(190,137,41)] text-xs font-bold">✓</span>
              </span>
              <span>{heroMessages.social_proof}</span>
            </p>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-[rgb(190,137,41)]/20 via-[rgb(190,137,41)]/5 to-transparent rounded-3xl blur-3xl pointer-events-none"></div>
              
              <div className="relative grid grid-cols-2 gap-4">
                <div className="relative col-span-2 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={gisselPhoto}
                    alt="Gissel Mujica - Realtor"
                    className="w-full h-[380px] md:h-[480px] lg:h-[550px] object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-16 pb-6 px-6">
                    <p className="text-white text-2xl md:text-3xl font-bold">Gissel Mujica</p>
                    <p className="text-[rgb(190,137,41)] font-semibold tracking-wider">Realtor®</p>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-xl mt-4">
                  <img
                    src={propertyPhoto}
                    alt={isSpanish ? "Propiedad residencial" : "Residential property"}
                    className="w-full h-[200px] md:h-[240px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent pt-12 pb-4 px-4">
                    <p className="text-white text-sm font-medium">
                      {isSpanish ? "Tu próximo hogar te espera" : "Your next home awaits"}
                    </p>
                  </div>
                </div>

                <div className="relative bg-[rgb(45,45,42)] rounded-2xl p-4 md:p-5 mt-4 flex flex-col shadow-xl border border-[rgb(190,137,41)]/20">
                  <p className="text-[rgb(190,137,41)] text-xs md:text-sm font-semibold mb-3 uppercase tracking-wider">
                    {t('hero.services_badge_title')}
                  </p>
                  <ul className="text-white text-xs md:text-sm space-y-2.5 font-medium">
                    <li className="flex items-center gap-2.5">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[rgb(190,137,41)]/20 flex items-center justify-center text-[rgb(190,137,41)] text-[10px]">✓</span> 
                      <span>{t('hero.services_badge_1')}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[rgb(190,137,41)]/20 flex items-center justify-center text-[rgb(190,137,41)] text-[10px]">✓</span> 
                      <span>{t('hero.services_badge_2')}</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[rgb(190,137,41)]/20 flex items-center justify-center text-[rgb(190,137,41)] text-[10px]">✓</span> 
                      <span>{t('hero.services_badge_3')}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-2 sm:-right-4 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-4 border border-gray-100 transform hover:scale-105 transition-transform duration-300 z-30">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden bg-[rgb(240,239,233)] flex-shrink-0 shadow-md border-2 border-white p-1">
                  <img src={wraLogo} alt="WRA" className="w-full h-full object-contain transition-transform group-hover:scale-110 duration-500" />
                </div>
                <div>
                  <p className="text-[10px] text-[rgb(190,137,41)] uppercase tracking-[0.1em] font-bold mb-0.5">{isSpanish ? 'Respaldada por' : 'Backed by'}</p>
                  <p className="text-sm sm:text-base font-extrabold text-[rgb(45,45,42)] leading-none italic">WRA Agency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-2 bg-gradient-to-r from-[rgb(190,137,41)] via-[rgb(190,137,41)] to-[rgb(190,137,41)] opacity-80"></div>
    </section>
  );
};
