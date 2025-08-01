import { Routes } from '@angular/router';
import { createAppComponent } from './counter/counter.component';

export const routes: Routes = [
  {
    path: '',
    component: createAppComponent,
  },
];
