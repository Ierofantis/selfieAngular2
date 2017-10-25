import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesMain } from './main/main.routes';
import { RoutesMyPlaces } from './my-places/my-places.routes';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {path: '', component: AppComponent},  
  ...RoutesMain,
  ...RoutesMyPlaces
];

//export const routing: ModuleWithProviders = RouterModule.forRoot(routes);