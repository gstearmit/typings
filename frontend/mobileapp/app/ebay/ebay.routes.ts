// Imports
// Deprecated import
// import { RouterConfig } from '@angular/router';
import { Routes } from '@angular/router';

import { EbayComponent }    from './portal/ebay.component';
import { EbayBrowserComponent } from "./browser/browser.component";
import {EbayDetailComponent} from "./detail/detail.component";

// Route Configuration
export const ebayRoutes: Routes = [
    { path: 'ebay', component: EbayComponent },
    { path: 'ebay/browser', component: EbayBrowserComponent },
    { path: 'ebay/detail', component: EbayDetailComponent },
    // { path: 'amazon-home/portal', component: AmazonPortalComponent }
]