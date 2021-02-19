import { Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { ValueComponent } from './value/value.component';

export const appRoutes:Routes = [
  { path: 'city', component: CityComponent },
  { path: 'value', component: ValueComponent },
  { path: '**', redirectTo: 'city', pathMatch: 'full' }
];
