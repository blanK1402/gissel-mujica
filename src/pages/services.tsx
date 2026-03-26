import { useTranslation } from 'react-i18next';
import { SEOHead } from '../components/common';
import { ServicesSection } from '../components/sections';

export const ServicesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEOHead
        title={t('seo.services_title')}
        description={t('seo.services_desc')}
        keywords={t('seo.home_keywords')}
      />
      <section className="bg-[rgb(229,229,223)] pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[rgb(45,45,42)] mb-6">
            {t('common.services')}
          </h1>
          <p className="text-xl text-[rgb(100,98,92)] max-w-2xl">
            {t('services.subtitle')}
          </p>
        </div>
      </section>
      <ServicesSection />
    </>
  );
};
