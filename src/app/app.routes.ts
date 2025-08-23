import { Routes } from '@angular/router';
import { Home } from './core/pages/home/home';

export const routes: Routes = [
  { path: '', component: Home },
  {
    path: 'about',
    loadComponent: () =>
      import('./core/pages/about/about').then((m) => m.About),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./core/pages/contact/contact').then((m) => m.Contact),
  },
  {
    path: 'terms',
    loadComponent: () =>
      import('./core/pages/terms/terms').then((m) => m.Terms),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./core/pages/register/register').then((m) => m.Register),
  },
  { path: '**', redirectTo: '' }, // Redireccionar a la página de inicio para rutas no encontradas
];
