import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
  { path: 'app-home', component: HomeComponent },
  { path: 'detail/:id', component: DetailComponent },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./register/register.component').then(m => m.RegisterComponent)
  },

  { path: '**', redirectTo: '' }
];
