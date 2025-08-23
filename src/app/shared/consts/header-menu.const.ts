import { HeaderMenu } from '../interfaces/header-menu.interface';

export const HEADER_MENUS: HeaderMenu[] = [
  {
    page: 'Inicio',
    router: '/',
    links: [
      {
        label: '¿Qué es Social Balance?',
        href: '#home',
      },
      {
        label: 'Producto',
        href: '#product',
      },
      {
        label: 'Calcula tus puntos',
        href: '#calculator',
      },
      {
        label: '¿Cómo funciona el sistema?',
        href: '#points-system',
      },
      {
        label: 'Recompensas',
        href: '#rewards',
      },
      {
        label: 'Tip del día',
        href: '#daily-tip',
      },
      {
        label: 'Tips anteriores',
        href: '#archive-tips',
      },
      {
        label: 'Subscripciones',
        href: '#subscriptions',
      },
    ],
  },
  {
    page: 'Sobre Nosotros',
    router: '/about',
    links: [
      {
        label: '¿Quiénes somos?',
        href: '#about',
      },
      {
        label: 'Universidades',
        href: '#universities',
      },
      {
        label: 'Ranking Universidades',
        href: '#ranking',
      },
      {
        label: 'Patrocinadores',
        href: '#partners',
      },
      {
        label: 'Impacto',
        href: '#impact',
      },
      {
        label: 'Testimonios',
        href: '#testimonials',
      },
      {
        label: 'Video destacado',
        href: '#video-testimonial',
      },
      {
        label: 'Preguntas Frecuentes',
        href: '#faq',
      },
    ],
  },
  {
    page: 'Términos y Condiciones',
    router: "/terms",
    links: [],
  },
  {
    page: 'Contáctanos',
    router: "/contact",
    links: [],
  },
] as const;
