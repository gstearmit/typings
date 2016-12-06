import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AmazonComponent }    from './portal/amazon.component';
import { AmazonBrowserComponent }    from './browser/browser.component';
import { AmazonDetailComponent }    from './detail/detail.component';

const routes: Routes = [
    { path: '', component: AmazonComponent },
    { path: '/browser', component: AmazonBrowserComponent },
    { path: '/detail', component: AmazonDetailComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class AmazonRoutingModule {}
