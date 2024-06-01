import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
];
