import { useTranslation } from 'react-i18next';
import { SEOHead } from '../components/common';

export const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title="Acerca de Gissel Mujica"
        description="Conoce a Gissel Mujica, Realtor® certificada en Florida con experiencia personal en compra de vivienda. Enfoque educativo y acompañamiento profesional."
        keywords="gissel mujica realtor, agente inmobiliario florida, realtor certificada"
      />
      <section className="bg-[rgb(229,229,223)] pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[rgb(45,45,42)] mb-6">
            {t('about.title')}
          </h1>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[rgb(240,239,233)]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="mb-12">
            <p className="text-xl text-[rgb(45,45,42)] leading-relaxed mb-6">
              {t('about.bio')}
            </p>
            <p className="text-lg text-[rgb(100,98,92)] leading-relaxed mb-8">
              Mi misión es simple: que cada cliente experimente la compra, venta o inversión inmobiliaria con confianza, guía profesional y acompañamiento personalizado. Vengo del lado del cliente, sé lo que significa encontrar la casa ideal y quiero hacer ese proceso fácil para ti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-[rgb(229,229,223)] p-8 rounded-2xl border-l-4 border-[rgb(190,137,41)] shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-[rgb(190,137,41)]/10 flex items-center justify-center mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-[rgb(45,45,42)] mb-2">Confianza</h3>
              <p className="text-[rgb(100,98,92)]">Basada en experiencia real y resultados comprobados.</p>
            </div>

            <div className="bg-[rgb(229,229,223)] p-8 rounded-2xl border-l-4 border-[rgb(190,137,41)] shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-[rgb(190,137,41)]/10 flex items-center justify-center mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-[rgb(45,45,42)] mb-2">Educación</h3>
              <p className="text-[rgb(100,98,92)]">Te explico cada paso del proceso inmobiliario.</p>
            </div>

            <div className="bg-[rgb(229,229,223)] p-8 rounded-2xl border-l-4 border-[rgb(190,137,41)] shadow-sm">
              <div className="w-14 h-14 rounded-xl bg-[rgb(190,137,41)]/10 flex items-center justify-center mb-4">
                <span className="text-3xl">💪</span>
              </div>
              <h3 className="text-xl font-bold text-[rgb(45,45,42)] mb-2">Apoyo</h3>
              <p className="text-[rgb(100,98,92)]">Estoy contigo en cada decisión importante.</p>
            </div>
          </div>

          <div className="bg-[rgb(229,229,223)] p-8 md:p-12 rounded-2xl border-2 border-[rgb(190,137,41)]/20 shadow-sm">
            <h2 className="text-2xl font-bold text-[rgb(45,45,42)] mb-4">Por qué Realtor®</h2>
            <p className="text-[rgb(100,98,92)] leading-relaxed mb-4">
              Un agente inmobiliario certificado no solo enseña casas. Negocia, informa, protege tus intereses y acompaña cada paso del proceso. La certificación Realtor® WRA es mi compromiso con la excelencia profesional y la ética inmobiliaria.
            </p>
            <p className="text-[rgb(190,137,41)] font-semibold flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[rgb(190,137,41)]/20 flex items-center justify-center text-xs">✓</span>
              Certificada por Realtor® WRA
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
