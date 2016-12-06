import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './404/404.component';
import { AppComponent } from './app.component';

export const routes: Routes = [

  // { path: '', component: AppComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'ebay', loadChildren: 'app/ebay/ebay.module#EbayModule' },
  { path: 'amazon', loadChildren: 'app/amazon/amazon.module#AmazonModule' },
  { path: '**', redirectTo: 'notfound' },
  { path: 'notfound', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
