import { Routes } from '@angular/router';

import { ConfigComponent } from './config/cofig.component';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'config',
    component: ConfigComponent,
  },
];
