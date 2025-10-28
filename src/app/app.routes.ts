import { Routes } from '@angular/router';

export const routes: Routes = [{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'home', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent) },
{ path: 'services', loadComponent: () => import('./pages/services/services.component').then(c => c.ServicesComponent) },
{ path: 'portfolio', loadComponent: () => import('./pages/portfolio/portfolio.component').then(c => c.PortfolioComponent) },
{ path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(c => c.ContactComponent) },];
