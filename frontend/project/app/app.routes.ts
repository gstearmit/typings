import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: 'app/global-module/global.module#GlobalModule' },
  { path: 'ebay', loadChildren: 'app/ebay-module/ebay.module#EbayModule' },
  { path: '**', redirectTo: '',pathMatch: 'full' },
  { path: 'error', loadChildren: 'app/error-module/error.module#ErrorModule' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})

export class AppRoutingModule { }