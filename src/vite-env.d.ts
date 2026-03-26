interface ImportMetaEnv {
  readonly VITE_PHONE_NUMBER: string;
  readonly VITE_EMAIL: string;
  readonly VITE_INSTAGRAM_URL: string;
  readonly VITE_INSTAGRAM_HANDLE: string;
  readonly VITE_WHATSAPP_NUMBER: string;
  readonly VITE_FORM_ENDPOINT: string;
  readonly VITE_FACEBOOK_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  const src: string;
  export default src;
}
