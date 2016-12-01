// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent }    from './app.component';
// import { AmazonPortalComponent }    from './amazon/portal/amazon-portal.component';
//import { homeRoutes }    from './home/home.routes';
//import { amazonRoutes }    from './amazon/amazon.routes';
//import { ebayRoutes }    from './ebay/ebay.routes';

// Route Configuration
export const routes: Routes = [

  { path: '', component: AppComponent },
  //{ path: 'lazy', loadChildren: 'app/lazy/lazy.module#LazyModule' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'ebay', loadChildren: 'app/ebay/ebay.module#EbayModule' },
 
  // { path: '/amazon', component: AmazonPortalComponent },
  // { path: '**', redirectTo: '404'},
  //...homeRoutes,
 // ...amazonRoutes,
 // ...ebayRoutes
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
