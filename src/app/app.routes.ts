import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesMain }    from './main/main.routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/Main',
    pathMatch: 'full'
  },   
  ...RoutesMain 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);