/**
 * Reusable constants and environmental variables access layer.
 * Helps prevent hardcoding direct URLs inside React components.
 */

const phoneRaw = import.meta.env.VITE_PHONE_NUMBER || '';
const whatsappRaw = import.meta.env.VITE_WHATSAPP_NUMBER || phoneRaw;

export const CONTACT_INFO = {
  EMAIL: import.meta.env.VITE_EMAIL || '',
  PHONE_DISPLAY: phoneRaw,
  PHONE_CALL: `tel:${phoneRaw}`,
  WHATSAPP_DISPLAY: whatsappRaw,
  WHATSAPP_URL: `https://wa.me/${whatsappRaw.replace(/[^\d]/g, '')}`,
  
  SOCIAL: {
    INSTAGRAM: import.meta.env.VITE_INSTAGRAM_URL || '',
    FACEBOOK: import.meta.env.VITE_FACEBOOK_URL || '',
    GOOGLE: 'https://share.google/8QfBsfnQEEgWiNsAB',
  },

  AGENCY_URL: "https://crescendodigitalmarketingagency.com/en/",
};
