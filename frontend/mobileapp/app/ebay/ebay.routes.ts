import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EbayComponent }   from './portal/ebay.component';
<<<<<<< HEAD

const routes: Routes = [
  { path: '', component: EbayComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
=======
import { EbayBrowserComponent } from "./browser/browser.component";
import {EbayDetailComponent} from "./detail/detail.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'ebay', component: EbayComponent },
      { path: 'ebay/browser', component: EbayBrowserComponent },
      { path: 'ebay/detail', component: EbayDetailComponent },
    // { path: 'amazon-home/portal', component: AmazonPortalComponent }
    ])
  ],
  exports: [RouterModule]
>>>>>>> 5b52b9bbb34dfbb23bd6c5d91ac5f7805e5b41e1
})
export class EbayRoutingModule { }
