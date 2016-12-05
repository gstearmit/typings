import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { AmazonPortalComponent } from './amazon/index';
import { EbayPortalComponent } from './ebay/index';
import { NotFoundComponent } from './error/not-found.component';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
   // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'amazon', component: AmazonPortalComponent },
    { path: 'ebay', component: EbayPortalComponent },
    { path: '404', component: NotFoundComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '404' }
];

export const routing = RouterModule.forRoot(appRoutes);