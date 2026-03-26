import { SEOHead } from '../components/common';
import { HeroSection, ServicesSection, FAQSection, ContactSection } from '../components/sections';

export const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="GISSEL MUJICA | Realtor® en Florida"
        description="Agente inmobiliario bilingüe en Florida. Te ayudo a comprar, vender e invertir en propiedades con acompañamiento profesional. ¡Tu casa ideal te espera!"
        keywords="realtor florida, compra venta casas florida, agente inmobiliario bilingüe, comprar casa florida, vender propiedad florida, inversión inmobiliaria florida"
      />
      <HeroSection />
      <ServicesSection />
      <FAQSection />
      <ContactSection />
    </>
  );
};
