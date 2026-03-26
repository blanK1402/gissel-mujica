import { SEOHead } from '../components/common';
import { ContactSection } from '../components/sections';

export const ContactPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Contacta con Gissel Mujica"
        description="Contacta con Gissel Mujica, Realtor® en Florida. Respondo en menos de 24 horas. Compra, venta e inversión inmobiliaria."
        keywords="contacto realtor florida, agendar cita, contactar agente inmobiliario"
      />
      <ContactSection />
    </>
  );
};
