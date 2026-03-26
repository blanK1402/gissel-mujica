import { useTranslation } from 'react-i18next';
import { SEOHead } from '../components/common';
import { ContactSection } from '../components/sections';

export const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEOHead
        title={t('seo.contact_title')}
        description={t('seo.contact_desc')}
        keywords={t('seo.home_keywords')}
      />
      <ContactSection />
    </>
  );
};
