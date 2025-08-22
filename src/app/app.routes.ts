import { RouterModule, Routes } from '@angular/router';
import { Home } from './core/pages/home/home';
import { Contact } from './core/pages/contact/contact';
import { Terms } from './core/pages/terms/terms';
import { Register } from './core/pages/register/register';
import { About } from './core/pages/about/about';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'about', component: About },
    { path: 'contact', component: Contact },
    { path: 'terms', component: Terms },
    { path: 'register', component: Register },
    { path: '**', redirectTo: '' } // Redireccionar a la página de inicio para rutas no encontradas
];