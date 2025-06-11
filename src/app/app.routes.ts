import { Routes } from '@angular/router';
import { HomePageComponent } from './domains/landing/pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
];
