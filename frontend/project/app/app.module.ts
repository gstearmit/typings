import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { TranslateModule } from 'ng2-translate';
import { GlobalModule } from './global-module/global.module';
import { EbayModule } from './ebay-module/ebay.module';
import { CommonSystemModule } from './common-module/common-system.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    TranslateModule,
    // ShareModule,
    GlobalModule,
    EbayModule,
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