import { NgModule }        from '@angular/core';
//import { BrowserModule }   from '@angular/platform-browser';

import { CommonModule }    from '@angular/common';
//import { HttpModule, JsonpModule } from '@angular/http';
import { ShareModule}      from '../share/share.module';
import { HomeModule}       from './home-module/home.module';
import { globalRouting }   from './global.routes';

import { GlobalComponent } from './global.component';

@NgModule({
  imports: [
  globalRouting,
  //BrowserModule,
  CommonModule,
  ShareModule,
  HomeModule
  ],
  declarations: [
	GlobalComponent
  ],
  exports: [
	   
  ],
  providers: [
	
  ]
})
export class GlobalModule { }


