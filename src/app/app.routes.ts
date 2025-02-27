import { Routes } from '@angular/router';
import { EmployerDataComponent } from '../pages/employer-data/employer-data.component';

export const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployerDataComponent },
];
