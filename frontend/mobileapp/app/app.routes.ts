import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './404/404.component';
export const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'notfound' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'ebay', loadChildren: 'app/ebay/ebay.module#EbayModule' },
  { path: 'notfound',component: NotFoundComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
