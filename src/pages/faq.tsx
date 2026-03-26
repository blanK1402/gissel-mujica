import { SEOHead } from '../components/common';
import { FAQSection } from '../components/sections';

export const FAQPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Preguntas Frecuentes"
        description="Respuestas a las preguntas más frecuentes sobre compra, venta e inversión inmobiliaria en Florida."
        keywords="preguntas frecuentes realtor, faq compra casa, faq inversión inmobiliaria"
      />
      <FAQSection />
    </>
  );
};
