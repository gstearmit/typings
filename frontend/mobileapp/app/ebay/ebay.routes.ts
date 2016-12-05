import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EbayComponent }   from './portal/ebay.component';

const routes: Routes = [
  { path: '', component: EbayComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EbayRoutingModule { }

