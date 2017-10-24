import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutesMain }    from './main/main.routes';


// Route Configuration
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/Main',
    pathMatch: 'full'
  },
    // Add dog routes form a different file
  ...RoutesMain 
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);