import { SEOHead } from '../components/common';
import { useTranslation } from 'react-i18next';
import { HeroSection, ServicesSection, FAQSection, ContactSection } from '../components/sections';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEOHead
        title={t('seo.home_title')}
        description={t('seo.home_desc')}
        keywords={t('seo.home_keywords')}
      />
      <HeroSection />
      <ServicesSection />
      <FAQSection />
      <ContactSection isHomePage={true} />
    </>
  );
};
