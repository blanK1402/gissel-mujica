import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { CONTACT_INFO } from '../../config/constants';

const MapWidget: React.FC = () => (
  <div className="rounded-2xl overflow-hidden shadow-lg border border-[rgb(190,137,41)]/10 h-[450px]">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.646195983288!2d-82.253811524759!3d27.04134367657069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c35530de796aaf%3A0x65d8276ce53c1736!2sGissel%20Mujica%20Realtor!5e0!3m2!1sen!2sco!4v1774557610526!5m2!1sen!2sco" 
      width="100%" 
      height="100%" 
      style={{ border: 0 }} 
      allowFullScreen 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);

const ReviewsWidget: React.FC = () => (
  <div className="rounded-2xl overflow-hidden">
    <iframe 
      className='lc_reviews_widget' 
      src='https://reputationhub.site/reputation/widgets/review_widget/wfq04Wqd3mGfNvMT0kt0' 
      frameBorder='0' 
      scrolling='no' 
      style={{ minWidth: '100%', width: '100%', height: '350px' }}
    />
  </div>
);

export const ContactSection: React.FC<{ isHomePage?: boolean }> = ({ isHomePage = false }) => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      let message = '';
      let serviceValue = '';

      switch (serviceParam) {
        case 'buying':
        case 'buy':
          serviceValue = 'buy';
          message = t('contact.form.default_msg_buy');
          break;
        case 'selling':
        case 'sell':
          serviceValue = 'sell';
          message = t('contact.form.default_msg_sell');
          break;
        case 'investment':
          serviceValue = 'investment';
          message = t('contact.form.default_msg_investment');
          break;
        default:
          serviceValue = serviceParam;
          message = '';
      }

      setFormData(prev => ({
        ...prev,
        service: serviceValue,
        message: message || prev.message
      }));
    }
  }, [searchParams, t]);

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const serviceOptions = [
    { value: 'buy', label: t('contact.form.service_buy') },
    { value: 'sell', label: t('contact.form.service_sell') },
    { value: 'investment', label: t('contact.form.service_investment') },
    { value: 'info', label: t('contact.form.service_info') },
    { value: 'advice', label: t('contact.form.service_advice') },
    { value: 'other', label: t('contact.form.service_other') },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const subject = encodeURIComponent(`${t('contact.form.service')}: ${formData.service || t('contact.title')}`);
      const bodyText = `
${t('contact.form.name')}: ${formData.name}
${t('contact.form.email')}: ${formData.email}
${t('contact.form.phone')}: ${formData.phone}
${t('contact.form.service')}: ${formData.service}

--- ${t('contact.form.message')} ---
${formData.message}
      `.trim();
      
      const body = encodeURIComponent(bodyText);
      const mailtoUrl = `mailto:${CONTACT_INFO.EMAIL}?subject=${subject}&body=${body}`;

      window.open(mailtoUrl, '_blank');
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="relative w-full bg-[rgb(240,239,233)] py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[rgb(190,137,41)]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[rgb(190,137,41)]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[rgb(45,45,42)] mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-[rgb(100,98,92)] max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Mobile: stacked vertically */}
        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:gap-y-6">
          {/* Info - Side-by-side on home row 3, Right on contact page */}
          <div className={`${isHomePage ? 'order-3 lg:col-span-1' : 'order-1 lg:order-2'}`}>
            <div className="bg-[rgb(229,229,223)] rounded-2xl p-6 md:p-8 shadow-lg border border-[rgb(190,137,41)]/10">
              <h3 className="text-2xl font-bold text-[rgb(45,45,42)] mb-6">
                {t('contact.info.title')}
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgb(190,137,41)]/10 flex items-center justify-center text-[rgb(190,137,41)] shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[rgb(100,98,92)]">{t('contact.info.location_title')}</p>
                    <p className="text-[rgb(45,45,42)]">{t('contact.info.location')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgb(190,137,41)]/10 flex items-center justify-center text-[rgb(190,137,41)] shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[rgb(100,98,92)]">{t('contact.info.contact_title')}</p>
                    <a href={CONTACT_INFO.PHONE_CALL} target="_blank" rel="noopener noreferrer" className="text-[rgb(190,137,41)] hover:text-[rgb(160,115,30)] font-medium">{CONTACT_INFO.PHONE_DISPLAY}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgb(190,137,41)]/10 flex items-center justify-center text-[rgb(190,137,41)] shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[rgb(100,98,92)]">{t('contact.info.email_title')}</p>
                    <a href={`mailto:${CONTACT_INFO.EMAIL}`} target="_blank" rel="noopener noreferrer" className="text-[rgb(190,137,41)] hover:text-[rgb(160,115,30)] font-medium break-all">{CONTACT_INFO.EMAIL}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgb(190,137,41)]/10 flex items-center justify-center text-[rgb(190,137,41)] shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[rgb(100,98,92)]">{t('contact.info.hours_title')}</p>
                    <p className="text-[rgb(45,45,42)]">{t('contact.info.hours')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgb(190,137,41)]/10 flex items-center justify-center text-[rgb(190,137,41)] shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[rgb(100,98,92)]">{t('contact.info.languages_title')}</p>
                    <p className="text-[rgb(45,45,42)]">{t('contact.info.languages')}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[rgb(190,137,41)]/20">
                  <p className="text-[rgb(45,45,42)] text-center">
                    <span className="text-[rgb(190,137,41)] font-semibold">{t('contact.info.callout_title')}</span>
                    <br />
                    <span className="text-sm text-[rgb(100,98,92)]">{t('contact.info.callout_subtitle')}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>



          {/* Reviews - Row 2 on home, Bottom Left on contact page */}
          <div className={`${isHomePage ? 'order-2 lg:col-span-2' : 'order-3 lg:order-3'}`}>
            <ReviewsWidget />
          </div>

          {/* Map - Row 1 on home, Bottom Right on contact page */}
          <div className={`${isHomePage ? 'order-1 lg:col-span-2' : 'order-4 lg:order-4'}`}>
            <MapWidget />
          </div>

          {/* Form - Side-by-side on home row 3, Left on contact page */}
          <div className={`${isHomePage ? 'order-4 lg:col-span-1' : 'order-2 lg:order-1'}`}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-[rgb(229,229,223)] rounded-2xl p-6 md:p-8 shadow-lg border border-[rgb(190,137,41)]/10">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[rgb(45,45,42)]">{t('contact.form.name')}</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.name_placeholder')}
                  required
                  className="mt-2 w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-[rgb(45,45,42)] outline-none transition-all focus:ring-2 focus:ring-[rgb(190,137,41)]/20 focus:border-[rgb(190,137,41)] placeholder-[rgb(150,148,142)]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[rgb(45,45,42)]">{t('contact.form.email')}</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    required
                    className="mt-2 w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-[rgb(45,45,42)] outline-none transition-all focus:ring-2 focus:ring-[rgb(190,137,41)]/20 focus:border-[rgb(190,137,41)] placeholder-[rgb(150,148,142)]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[rgb(45,45,42)]">{t('contact.form.phone')}</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (123) 456-7890"
                    required
                    className="mt-2 w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-[rgb(45,45,42)] outline-none transition-all focus:ring-2 focus:ring-[rgb(190,137,41)]/20 focus:border-[rgb(190,137,41)] placeholder-[rgb(150,148,142)]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-[rgb(45,45,42)]">{t('contact.form.service')}</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-[rgb(45,45,42)] outline-none transition-all focus:ring-2 focus:ring-[rgb(190,137,41)]/20 focus:border-[rgb(190,137,41)] cursor-pointer appearance-none bg-no-repeat bg-right"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25rem 1.25rem' }}
                >
                  <option value="">{t('contact.form.service')}</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[rgb(45,45,42)]">{t('contact.form.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.message_placeholder')}
                  required
                  rows={4}
                  className="mt-2 w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-sm text-[rgb(45,45,42)] outline-none transition-all focus:ring-2 focus:ring-[rgb(190,137,41)]/20 focus:border-[rgb(190,137,41)] placeholder-[rgb(150,148,142)] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="mt-4 inline-flex items-center justify-center gap-3 rounded-xl bg-[rgb(190,137,41)] px-10 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-[rgb(160,115,30)] hover:shadow-xl hover:shadow-[rgb(190,137,41)]/30 hover:-translate-y-1 disabled:opacity-50 disabled:translate-y-0 disabled:cursor-not-allowed w-full sm:w-auto"
              >
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
                {status === 'loading' ? t('contact.form.sending') : t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Floating Notification (Toast) */}
      {(status === 'success' || status === 'error') && (
        <div 
          className={`fixed bottom-8 right-8 z-[100] flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border transition-all duration-500 animate-in fade-in slide-in-from-bottom-5 ${
            status === 'success' 
              ? 'bg-white border-green-100 text-green-800' 
              : 'bg-white border-red-100 text-red-800'
          }`}
        >
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
            status === 'success' ? 'bg-green-50' : 'bg-red-50'
          }`}>
            {status === 'success' ? (
              <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-sm">
              {status === 'success' ? t('contact.form.success') : t('contact.form.error')}
            </p>
          </div>
          <button 
            onClick={() => setStatus('idle')}
            className="ml-2 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};