import { NgModule } from '@angular/core'

import { CommonModule } from '@angular/common';
import { HomeModule } from './home-module/home.module';
import { globalRouting } from './global.routes';

import { GlobalComponent } from './global.component';

@NgModule({
  imports: [
    globalRouting,
    CommonModule,
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


