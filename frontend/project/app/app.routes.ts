import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [

  //{ path: '', component: AppComponent },

  //{ path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', redirectTo: 'global', pathMatch: 'full' },
  { path: 'ebay', loadChildren: 'app/ebay-module/ebay.module#EbayModule' },
  //{ path: '**', redirectTo: '/global/home' },
  // { path: '', redirectTo: '/global/home' },
  { path: 'error', loadChildren: 'app/error-module/error.module#ErrorModule' },
  //{ path: 'home', loadChildren: 'app/global-module/home/home.module#HomeModule' },
 // { path: 'ebay', loadChildren: 'app/ebay/ebay.module#EbayModule' },
  // { path: 'amazon', loadChildren: 'app/amazon/amazon.module#AmazonModule' },
  //{ path: '**', redirectTo: 'notfound' },
  //{ path: 'notfound', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})

export class AppRoutingModule { }