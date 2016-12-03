import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EbayComponent }   from './portal/ebay.component';
import { EbayBrowserComponent } from "./browser/browser.component";
import {EbayDetailComponent} from "./detail/detail.component";

const routes: Routes = [
  { path: 'ebay', component: EbayComponent },
  { path: 'ebay/browser', component: EbayBrowserComponent },
  { path: 'ebay/detail', component: EbayDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EbayRoutingModule { }

