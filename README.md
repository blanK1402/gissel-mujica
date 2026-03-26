# GISSEL MUJICA - Landing Page React

Landing page profesional para Gissel Mujica, agente inmobiliaria certificada Realtor® en Florida.

## Tecnología

- **React 18+** con TypeScript
- **Vite** para build rápido
- **Tailwind CSS** para estilos responsivos
- **React Router** para routing multi-página
- **React i18next** para internacionalización (ES/EN)
- **React Helmet** para SEO dinámico
- **Formspree** para formularios de contacto

## Estructura del Proyecto

```
src/
├── components/
│   ├── common/          # Componentes reutilizables
│   ├── layout/          # Header, Footer, Layout
│   └── sections/        # Secciones de página (Hero, Services, FAQ, Contact)
├── pages/               # Páginas del sitio
├── locales/             # Archivos de traducción (i18n)
├── assets/              # Imágenes, SVGs, fonts
└── utils/               # Funciones utilitarias
```

## Instalación

```bash
pnpm install
```

## Desarrollo

```bash
pnpm dev
```

## Build

```bash
pnpm build
```

## Configuración

### Variables de Entorno (.env)

```
VITE_PHONE_NUMBER=832-270-2820
VITE_EMAIL=gisselmujica@gmail.com
VITE_INSTAGRAM_URL=https://www.instagram.com/gisselmujica/
VITE_WHATSAPP_NUMBER=+18322702820
VITE_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

## Características

✅ Diseño responsivo (Mobile-first)
✅ Internacionalización (Español/Inglés)
✅ SEO optimizado con meta tags dinámicos
✅ Sitemap XML automático
✅ Botones flotantes (WhatsApp, Instagram)
✅ Formulario de contacto con Formspree
✅ Accordion para FAQ
✅ Sin comentarios en código (según requirements)
✅ Lazy loading + WebP support
✅ Scroll suave
✅ Animaciones sutiles

## Páginas

- `/` - Home (Hero + Servicios + FAQ + Contacto)
- `/servicios` - Detalle de servicios
- `/nosotros` - Acerca de Gissel
- `/contacto` - Formulario de contacto
- `/faq` - Preguntas frecuentes
- `/sitemap.xml` - Sitemap para SEO

## Paleta de Colores

- **Primario:** Dorado (#C89B3C)
- **Fondo:** Blanco (#FFFFFF)
- **Texto Principal:** Negro (#1A1A1A)
- **Fondo Alterno:** Gris muy claro (#F5F5F5)

## Notas

- Certificada por Realtor® WRA
- Enfoque en educación y acompañamiento
- Atención online/virtual en toda Florida
- Bilingüe: Español e Inglés
