// Imports
// Deprecated import
// import { RouterConfig } from '@angular/router';
import { Routes } from '@angular/router';

import { EbayComponent }    from './ebay.component';
// import { AmazonPortalComponent }    from './portal/portal.component';

// Route Configuration
export const ebayRoutes: Routes = [
    { path: 'ebay', component: EbayComponent },
    // { path: 'amazon-home/portal', component: AmazonPortalComponent }
]