import { NgModule }       from '@angular/core';
//import { BrowserModule }  from '@angular/platform-browser';
//import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
<<<<<<< HEAD
import { HomeModule } from './home/home.module';

import { AppComponent }       from './app.component';
import { NotFoundComponent } from './404/404.component';
import { AppRoutingModule } from './app.routes'; 
=======

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
  
>>>>>>> 5b52b9bbb34dfbb23bd6c5d91ac5f7805e5b41e1
@NgModule({
  imports: [
    // BrowserModule,
    // FormsModule,
    HttpModule,
    JsonpModule,
<<<<<<< HEAD
	HomeModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
	NotFoundComponent
  ],
  providers: [
=======
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
>>>>>>> 5b52b9bbb34dfbb23bd6c5d91ac5f7805e5b41e1
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
