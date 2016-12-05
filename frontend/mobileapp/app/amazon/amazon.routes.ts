// Imports
// Deprecated import
// import { RouterConfig } from '@angular/router';

import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmazonComponent }    from './portal/amazon.component';
import { AmazonBrowserComponent }    from './browser/browser.component';
import { AmazonDetailComponent }    from './detail/detail.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'amazon', component: AmazonComponent },
            { path: 'amazon/browser', component: AmazonBrowserComponent },
            { path: 'amazon/detail', component: AmazonDetailComponent },
        ])
    ],
    exports: [RouterModule]
})

export class amazonRoutes { }
