import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { HomeModule } from './home/home.module';
import { AmazonModule } from './amazon/amazon.module';
import { EbayModule } from './ebay/ebay.module';

import { LeftMenuComponent } from './header/left-menu.component';


import { AppComponent }       from './app.component';
import { SliderService } from './slider/weshop/services/slider.service';
import { HotdealService } from './component-common/hot-deal/services/hotdeal.service';
import { AmazonBoxService } from './amazon/amazon-box/services/amazon-box.service';
import { EbayBoxService } from './ebay/ebay-box/services/ebay-box.service';
import { DhgateBoxService } from './dhgate/dhgate-box/services/dhgate-box.service';
import { RecentlyviewService } from './component-common/recently-view/services/recentlyview.service';
import { routing } from './app.routes';
  
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
	EbayModule,
    AmazonModule,
	HomeModule,
    routing
  ],
  declarations: [
    AppComponent,
    LeftMenuComponent
  ],
  providers: [
    SliderService,
    HotdealService,
    AmazonBoxService,
    DhgateBoxService,
    EbayBoxService,
    RecentlyviewService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
platformBrowserDynamic().bootstrapModule(AppModule);