import { TermData } from '../../interfaces/terms/term.interface';

export const TERMS_DATA: TermData[] = [
  {
    title: '1. Aceptación de los Términos',
    content: [
      {
        type: 'paragraph',
        text: 'Al acceder y utilizar la plataforma Social Balance, aceptas cumplir con estos términos y condiciones en su totalidad. Si no estás de acuerdo, abstente de usar nuestro servicio.',
      },
    ],
  },
  {
    title: '2. Descripción del Servicio',
    content: [
      {
        type: 'paragraph',
        text: 'Social Balance es una aplicación móvil diseñada para ayudar a usuarios universitarios a gestionar su tiempo en redes sociales mediante herramientas de bloqueo inteligente, recomendaciones de actividades presenciales y programas de desarrollo de habilidades sociales.',
      },
    ],
  },
  {
    title: '3. Registro y Cuenta',
    content: [
      {
        type: 'paragraph',
        text: 'Debes proporcionar información veraz al registrarte',
      },
      {
        type: 'paragraph',
        text: 'Eres responsable de mantener la confidencialidad de tu cuenta',
      },
      {
        type: 'paragraph',
        text: 'Debes ser mayor de 18 años o contar con autorización de tus padres/tutores',
      },
    ],
  },
  {
    title: '4. Uso Aceptable',
    content: [
      {
        type: 'paragraph',
        text: 'Queda prohibido:',
      },
      {
        type: 'list',
        items: [
          'Usar la plataforma con fines ilegales',
          'Intentar acceder a sistemas ajenos a tu cuenta',
          'Modificar, copiar o distribuir nuestro contenido sin autorización',
        ],
      },
    ],
  },
  {
    title: '5. Privacidad y Datos',
    content: [
      {
        type: 'paragraph',
        text: 'Nuestras prácticas de privacidad se rigen por nuestra Política de Privacidad disponible en [enlace]. Recopilamos ciertos datos para mejorar tu experiencia.',
      },
    ],
  },
  {
    title: '6. Contenido y Propiedad Intelectual',
    content: [
      {
        type: 'paragraph',
        text: 'Todos los derechos sobre la plataforma, diseño, logos y contenido son propiedad exclusiva de Social Balance.',
      },
    ],
  },
  {
    title: '7. Limitación de Responsabilidad',
    content: [
      {
        type: 'paragraph',
        text: 'Social Balance no garantiza:',
      },
      {
        type: 'list',
        items: [
          'Disponibilidad ininterrumpida del servicio',
          'Resultados específicos en la reducción del uso de redes sociales',
          'Exactitud de las recomendaciones de terceros',
        ],
      },
    ],
  },
  {
    title: '8. Modificaciones',
    content: [
      {
        type: 'paragraph',
        text: 'Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor al ser publicados.',
      },
    ],
  },
  {
    title: '9. Terminación',
    content: [
      {
        type: 'paragraph',
        text: 'Podemos suspender o cancelar tu acceso si incumples estos términos sin previo aviso.',
      },
    ],
  },
  {
    title: '10. Ley Aplicable',
    content: [
      {
        type: 'paragraph',
        text: 'Estos términos se rigen por las leyes de Perú y cualquier disputa se resolverá en sus tribunales.',
      },
    ],
  },
  {
    title: '11. Contacto',
    content: [
      {
        type: 'paragraph',
        text: 'Para preguntas sobre estos términos: contacto',
      },
    ],
  },
] as const;
