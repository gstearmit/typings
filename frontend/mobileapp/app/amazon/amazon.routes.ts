// Imports
// Deprecated import
// import { RouterConfig } from '@angular/router';
import { Routes } from '@angular/router';

import { AmazonComponent }    from './amazon.component';
import { AmazonPortalComponent }    from './portal/portal.component';

// Route Configuration
export const amazonRoutes: Routes = [
    { path: 'amazon', component: AmazonComponent },
    { path: 'amazon/portal', component: AmazonPortalComponent }
]