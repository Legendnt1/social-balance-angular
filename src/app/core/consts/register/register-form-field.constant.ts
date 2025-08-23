import { RegisterFormField } from '../../interfaces/register/register-form-field.interface';

export const REGISTER_FORM_FIELDS: RegisterFormField[] = [
  {
    name: 'username',
    type: 'text',
    placeholder: 'Nombre de Usuario',
    required: true,
    invalidMessage: 'El nombre de usuario no cumple los requisitos.',
  },
  {
    name: 'fullname',
    type: 'text',
    placeholder: 'Nombre Completo',
    required: true,
    invalidMessage: 'El nombre está incorrecto.',
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Correo Electrónico',
    required: true,
    invalidMessage: 'El correo electrónico es inválido.',
  },
  {
    name: 'phone',
    type: 'tel',
    placeholder: 'Número de Teléfono',
    required: true,
    invalidMessage: 'Solo ingresa número al número de teléfono.',
  },
  {
    name: 'university',
    type: 'text',
    placeholder: 'Universidad',
    required: true,
    invalidMessage: 'Nombre de universidad no reconocida.',
  },
] as const;
