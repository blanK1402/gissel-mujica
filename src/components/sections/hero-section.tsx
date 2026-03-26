import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../common';
import gisselPhotoEs from '../../assets/images/es-mujicaphoto.jpeg';
import gisselPhotoEn from '../../assets/images/en-mujicaphoto.jpeg';
import wraLogo from '../../assets/images/logo.jpeg';
import propertyEs from '../../assets/images/es-idealhouse.jpg';
import propertyEn from '../../assets/images/en-propertyforsaleorrent.jpeg';

export const HeroSection: React.FC = () => {
  const { i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';
  const gisselPhoto = isSpanish ? gisselPhotoEs : gisselPhotoEn;
  const propertyPhoto = isSpanish ? propertyEs : propertyEn;

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
      
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-[rgb(190,137,41)]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-[rgb(190,137,41)]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-[rgb(190,137,41)]/50">
                <img src={wraLogo} alt="WRA" className="w-full h-full object-contain opacity-50" />
              </div>
              <span className="text-xs text-[rgb(100,98,92)] uppercase tracking-widest">
                {isSpanish ? 'Parte de WRA' : 'Part of WRA'}
              </span>
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
              <Link to="/contacto">
                <Button size="lg" variant="primary">
                  {heroMessages.cta}
                </Button>
              </Link>
              <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER.replace(/[^\d]/g, '')}`}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8">
                  WhatsApp
                </Button>
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
              <div className="absolute -inset-6 bg-gradient-to-br from-[rgb(190,137,41)]/20 via-[rgb(190,137,41)]/5 to-transparent rounded-3xl blur-3xl"></div>
              
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

                <div className="relative bg-[rgb(45,45,42)] rounded-2xl p-4 mt-4 flex flex-col justify-center items-center text-center shadow-xl">
                  <p className="text-3xl md:text-4xl font-bold text-white mb-1">50+</p>
                  <p className="text-[rgb(190,137,41)] text-xs md:text-sm font-medium">
                    {isSpanish ? "Familias felices" : "Happy families"}
                  </p>
                  <p className="text-[rgb(190,137,41)] text-xs md:text-sm">
                    {isSpanish ? "han encontrado su hogar" : "have found their home"}
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-3 shadow-xl flex items-center gap-3">
                <img src={wraLogo} alt="WRA" className="w-8 h-8 object-contain" />
                <div>
                  <p className="text-xs text-[rgb(100,98,92)]">{isSpanish ? 'Respaldada por' : 'Backed by'}</p>
                  <p className="text-sm font-bold text-[rgb(45,45,42)]">WRA</p>
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
