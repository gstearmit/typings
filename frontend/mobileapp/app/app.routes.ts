// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }    from './home/home.component';
// import { AmazonPortalComponent }    from './amazon/portal/amazon-portal.component';
import { homeRoutes }    from './home/home.routes';
import { testRoutes }    from './test/test.routes';
import { amazonRoutes }    from './amazon/amazon.routes';
import { ebayRoutes }    from './ebay/ebay.routes';

// Route Configuration
export const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '/amazon', component: AmazonPortalComponent },
  // { path: '**', redirectTo: '404'},
  ...homeRoutes,
  ...amazonRoutes,
  ...ebayRoutes
  ...testRoutes
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
