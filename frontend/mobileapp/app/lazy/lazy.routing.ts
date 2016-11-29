import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LazyComponent } from './lazy.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'lazy', component: LazyComponent }
    ])
  ],
  exports: [RouterModule]
})

export class routingLazy { }
