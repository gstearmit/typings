import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EbayComponent }   from './portal/ebay.component';
//import { EbayBrowserComponent } from "./browser/browser.component";
//import {EbayDetailComponent} from "./detail/detail.component";

@NgModule({
  imports: [
    RouterModule.forChild([
	  { path: 'ebay', component: EbayComponent },
    //{ path: 'ebay/browser', component: EbayBrowserComponent },
    //{ path: 'ebay/detail', component: EbayDetailComponent },
    // { path: 'amazon-home/portal', component: AmazonPortalComponent }
    ])
  ],
  exports: [RouterModule]
})

export class ebayRoutes { }
