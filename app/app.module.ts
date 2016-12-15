import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { TranslateModule }    from 'ng2-translate';
import { GlobalModule }       from './global-module/global.module';
import { CommonSystemModule } from './common-module/common-system.module';
// import { ShareModule }        from './share/share.module';
import { AppRoutingModule }   from './app.routes';

import { TranslateService } from 'ng2-translate';
import { AppComponent }       from './app.component';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    TranslateModule,
    // ShareModule,
    GlobalModule,
    CommonSystemModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}