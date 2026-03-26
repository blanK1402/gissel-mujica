import { useTranslation } from 'react-i18next';
import { SEOHead } from '../components/common';
import { FAQSection } from '../components/sections';

export const FAQPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEOHead
        title={t('seo.faq_title')}
        description={t('seo.faq_desc')}
        keywords={t('seo.home_keywords')}
      />
      <FAQSection />
    </>
  );
};
