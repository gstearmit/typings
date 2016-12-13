import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EbayComponent } from './ebay.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            // {
            //   path: 'login',
            //   loadChildren: () => System.import('./login/login.module')
            // },
            // {
            //   path: 'register',
            //   loadChildren: () => System.import('./register/register.module')
            // },
            {
                path: 'ebay',component: EbayComponent,
                children: [
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    //  { path: 'home', loadChildren: './app/global-module/home-module/home.module#HomeModule' },

                ]
            }

        ])
    ],
    exports: [RouterModule]
})

export class ebayRouting{ }
