import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { SwiperModule } from 'angular2-useful-swiper';

import { AppComponent }         from './app.component';
import { HomeComponent }      from './home/home.component';


import { BigSliderWeshopComponent } from './slider/big-slider-weshop.component';
import { BuyFromComponent } from './home/brand/buy-from.component';
import { HelpBuyComponent } from './home/help-buy/help-buy.component';
import { HotDealComponent } from './home/hot-deal/hot-deal.component';
import { AmazonComponent } from './home/amazon-box/amazon.component';
import { EbayComponent } from './home/ebay-box/ebay.component';
import { DhgateComponent } from './home/dhgate-box/dhgate.component';
import { RecentlyViewComponent } from './home/recently-view/recently-view.component';

import { HeaderWeshopComponent } from './header/header-weshop.component';
import { LeftMenuComponent } from './header/left-menu.component';
import { HeaderAmazonComponent } from './header/amazon/header-amazon.component';
import { HeaderEbayComponent } from './header/ebay/header-ebay.component';

import { HomeService } from './home/services/home.service';
import { SliderService } from './slider/services/slider.service';
import { CommentService } from './slider/services/comment.service';
import { routing } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
    JsonpModule,
    SwiperModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderWeshopComponent,
    BigSliderWeshopComponent,
    BuyFromComponent,
    HelpBuyComponent,
    HotDealComponent,
    AmazonComponent,
    EbayComponent,
    DhgateComponent,
    RecentlyViewComponent,
    LeftMenuComponent
  ],
  providers: [
    HomeService,
    SliderService,
    CommentService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

