import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { LazyComponent }   from './lazy.component';
//import { HeaderWeshopComponent } from '../header/header-weshop.component';
import { routingLazy } from './lazy.routing';

@NgModule({
  imports: [routingLazy,BrowserModule,InfiniteScrollModule],
  declarations: [LazyComponent],
  // exports: [LazyComponent],
  //providers: [NameListService]
})
export class LazyModule { }


