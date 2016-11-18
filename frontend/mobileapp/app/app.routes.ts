// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }    from './home/home.component';
import { homeRoutes }    from './home/home.routes';

// Route Configuration
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '404'},
  ...homeRoutes
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
