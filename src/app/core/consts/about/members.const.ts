import { Member } from "../../interfaces/about/member.interface";

export const TEAM_MEMBERS: Member[] = [
    {
      name: 'César Aróstegui',
      description: 'Estudiante de Ingeniería de Software',
      image: 'assets/images/members/cesar.png',
    },
    {
      name: 'Rodrigo Solano',
      description: 'Estudiante de Ingeniería de Sistemas',
      image: 'assets/images/members/rodrigo.png',
    },
    {
      name: 'Ángel Crispín',
      description: 'Estudiante de Ingeniería de Software',
      image: 'assets/images/members/angel.png',
    },
    {
      name: 'Alexander Montoya',
      description: 'Estudiante de Ingeniería de Software',
      image: 'assets/images/members/montoya.png',
    },
    {
      name: 'Giordano Trejo',
      description: 'Estudiante de Ingeniería de Software',
      image: 'assets/images/members/giordano.png',
    },
    {
      name: 'Josep Melgarejo',
      description: 'Estudiante de Ingeniería de Software',
      image: 'assets/images/members/melgarejo.png',
    },
] as const;