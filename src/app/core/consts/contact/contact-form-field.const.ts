import { ContactFormField } from "../../interfaces/contact/contact-form-field.interface";

export const CONTACT_FORM_FIELDS: ContactFormField[] = [
  {
    row: [
      {
        name: 'firstName',
        type: 'text',
        placeholder: 'Nombres',
        svg: '/assets/svg/user.svg',
        required: true,
      },
      {
        name: 'lastName',
        type: 'text',
        placeholder: 'Apellidos',
        svg: '/assets/svg/user.svg',
        required: true,
      },
    ],
  },
  {
    row: [
      {
        name: 'phone',
        type: 'tel',
        placeholder: 'Número de Teléfono',
        svg: '/assets/svg/phone.svg',
        required: true,
      },
      {
        name: 'email',
        type: 'email',
        placeholder: 'Correo electrónico',
        svg: '/assets/svg/mail.svg',
        required: true,
      },
    ],
  },
  {
    row: [
      {
        name: 'message',
        type: 'textarea',
        placeholder: 'Escriba aquí su mensaje',
        rows: 5,
        required: true,
      },
    ],
  },
] as const;
