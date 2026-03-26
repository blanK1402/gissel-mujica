import { useTranslation } from 'react-i18next';
import { SEOHead } from '../components/common';
import mujicaPhoto from '../assets/images/es-mujicaphoto.jpeg';

export const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title="Acerca de Gissel Mujica"
        description="Conoce a Gissel Mujica, Realtor® certificada en Florida con experiencia personal en compra de vivienda. Enfoque educativo y acompañamiento profesional."
        keywords="gissel mujica realtor, agente inmobiliario florida, realtor certificada"
      />
      
      {/* Hero Section */}
      <section className="relative bg-[rgb(229,229,223)] pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[rgb(190,137,41)] via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[rgb(45,45,42)] tracking-tight mb-6">
              {t('about.title')}
            </h1>
            <div className="w-24 h-1.5 bg-[rgb(190,137,41)] mx-auto md:mx-0 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 md:py-32 bg-[rgb(240,239,233)] relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[600px] h-[600px] bg-[rgb(190,137,41)]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[800px] h-[800px] bg-[rgb(229,229,223)] rounded-full blur-3xl z-0 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center mb-24">
            {/* Image Column */}
            <div className="w-full lg:w-5/12 relative group">
              <div className="absolute -inset-4 bg-[rgb(190,137,41)]/20 rounded-[2.5rem] transform rotate-3 transition-transform duration-700 group-hover:rotate-6"></div>
              <div className="absolute -inset-4 bg-white/60 backdrop-blur-sm rounded-[2.5rem] transform -rotate-2 transition-transform duration-700 group-hover:-rotate-4 shadow-xl border border-white/40"></div>
              
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-white">
                <img 
                  src={mujicaPhoto} 
                  alt="Gissel Mujica - Realtor" 
                  className="w-full h-auto object-cover aspect-[4/5] object-top hover:scale-[1.03] transition-transform duration-700"
                />
              </div>

              {/* Badge Overlay */}
              <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md p-4 sm:p-6 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] z-20 flex items-center gap-3 sm:gap-4 border border-white/50 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-[rgb(190,137,41)]/10 flex items-center justify-center text-[rgb(190,137,41)]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-[rgb(100,98,92)] font-bold uppercase tracking-widest mb-0.5">Certificada</p>
                  <p className="font-extrabold text-[rgb(45,45,42)] text-sm sm:text-base">Realtor® WRA</p>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="w-full lg:w-7/12 space-y-8 mt-12 lg:mt-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgb(190,137,41)]/10 rounded-full border border-[rgb(190,137,41)]/20">
                <span className="w-2 h-2 rounded-full bg-[rgb(190,137,41)]"></span>
                <span className="text-[rgb(190,137,41)] font-bold tracking-wider uppercase text-xs">Mi Historia</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[rgb(45,45,42)] leading-tight">
                Guiando tu camino hacia el <span className="text-[rgb(190,137,41)]">hogar ideal</span>
              </h2>
              
              <div className="prose prose-lg text-[rgb(100,98,92)] max-w-none">
                <p className="text-xl sm:text-2xl text-[rgb(45,45,42)] leading-relaxed font-medium">
                  {t('about.bio')}
                </p>
                
                <div className="w-full h-px bg-gradient-to-r from-[rgb(190,137,41)]/30 via-[rgb(190,137,41)]/10 to-transparent my-8"></div>
                
                <p className="leading-relaxed text-lg">
                  Mi misión es simple: que cada cliente experimente la compra, venta o inversión inmobiliaria con confianza, guía profesional y acompañamiento personalizado. 
                </p>
                <p className="leading-relaxed text-lg mt-4">
                  Vengo del lado del cliente, sé lo que significa encontrar la casa ideal y quiero hacer ese proceso lo más fluido, transparente y libre de estrés posible para ti. Me enorgullece ser un recurso educativo y un apoyo constante.
                </p>
              </div>
            </div>
            
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            <div className="bg-white/80 backdrop-blur-sm p-8 lg:p-10 rounded-[2rem] border border-[rgb(229,229,223)] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[rgb(190,137,41)] to-[rgb(160,110,30)] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl text-white">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-[rgb(45,45,42)] mb-3">Confianza</h3>
              <p className="text-[rgb(100,98,92)] leading-relaxed text-lg">Basada en experiencia real, resultados comprobados y una comunicación siempre transparente.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 lg:p-10 rounded-[2rem] border border-[rgb(229,229,223)] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[rgb(190,137,41)] to-[rgb(160,110,30)] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl text-white">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-[rgb(45,45,42)] mb-3">Educación</h3>
              <p className="text-[rgb(100,98,92)] leading-relaxed text-lg">Te explico cada paso del proceso inmobiliario detalladamente para que tomes las mejores decisiones.</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 lg:p-10 rounded-[2rem] border border-[rgb(229,229,223)] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[rgb(190,137,41)] to-[rgb(160,110,30)] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl text-white">💪</span>
              </div>
              <h3 className="text-2xl font-bold text-[rgb(45,45,42)] mb-3">Apoyo</h3>
              <p className="text-[rgb(100,98,92)] leading-relaxed text-lg">Estoy a tu lado en cada decisión importante, defendiendo siempre tus intereses y objetivos.</p>
            </div>
          </div>

          {/* Callout Section */}
          <div className="bg-gradient-to-br from-[rgb(45,45,42)] to-[rgb(25,25,22)] p-10 md:p-14 lg:p-16 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(190,137,41)]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            <div className="relative z-10 w-full md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">¿Por qué es importante elegir a un Realtor®?</h2>
              <p className="text-gray-300 leading-relaxed text-lg mb-8">
                Un agente inmobiliario certificado no solo muestra casas. Negocia, informa, protege tus intereses y acompaña cada paso del proceso. La certificación Realtor® WRA es mi compromiso con la excelencia profesional y la más estricta ética inmobiliaria internacional.
              </p>
              <div className="inline-flex items-center gap-3 text-[rgb(190,137,41)] font-semibold text-lg bg-white/5 px-6 py-4 rounded-xl border border-white/10 shadow-lg backdrop-blur-md">
                <svg className="w-7 h-7 text-[rgb(190,137,41)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                Certificada por Realtor® WRA
              </div>
            </div>
            
            <div className="relative z-10 w-full md:w-1/3 flex justify-center md:justify-end">
               <a href="#/contacto" className="inline-flex items-center justify-center w-full md:w-auto px-8 py-5 bg-[rgb(190,137,41)] text-white text-lg rounded-xl hover:bg-[rgb(160,110,30)] transition-all duration-300 font-bold shadow-[0_10px_20px_-10px_rgba(190,137,41,0.5)] hover:shadow-[0_20px_30px_-15px_rgba(190,137,41,0.6)] hover:-translate-y-1 text-center">
                  Contáctame Hoy
               </a>
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
};
