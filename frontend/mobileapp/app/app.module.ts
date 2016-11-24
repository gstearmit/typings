import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { SwiperModule } from 'angular2-useful-swiper';

import { AppComponent }         from './app.component';
import { HomeComponent }      from './home/home.component';
import { TestComponent }      from './test/test.component';
import { AmazonComponent }      from './amazon/amazon.component';
import { AmazonPortalComponent }      from './amazon/portal/portal.component';

import { BigSliderWeshopComponent } from './slider/big-slider-weshop.component';
import { BuyFromComponent } from './component-common/brand/buy-from.component';
import { HelpBuyComponent } from './component-common/help-buy/help-buy.component';
import { HotDealComponent } from './component-common/hot-deal/hot-deal.component';
import { AmazonBoxComponent } from './amazon/amazon-box/amazon-box.component';
import { EbayBoxComponent } from './ebay/ebay-box/ebay-box.component';
import { DhgateComponent } from './dhgate/dhgate-box/dhgate.component';
import { RecentlyViewComponent } from './component-common/recently-view/recently-view.component';

import { HeaderWeshopComponent } from './header/header-weshop.component';
import { LeftMenuComponent } from './header/left-menu.component';
import { HeaderAmazonComponent } from './header/amazon/header-amazon.component';
import { HeaderEbayComponent } from './header/ebay/header-ebay.component';

import { SliderService } from './slider/services/slider.service';
//import { CommentService } from './home/services/comment.service';
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
    SwiperModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderWeshopComponent,
    BigSliderWeshopComponent,
    BuyFromComponent,
    AmazonBoxComponent,
    HelpBuyComponent,
    HotDealComponent,
    AmazonComponent,
    EbayBoxComponent,
    DhgateComponent,
    RecentlyViewComponent,
    LeftMenuComponent,
<<<<<<< HEAD
<<<<<<< HEAD
	TestComponent
=======
    AmazonPortalComponent,
    HeaderAmazonComponent
>>>>>>> dac89debe2779ee77f731de4bfaf24350caa01f5
=======
    AmazonPortalComponent,
    HeaderAmazonComponent
>>>>>>> e3c1295527ad033231b4e9a38c77fe7415ef5741
  ],
  providers: [
    SliderService,
    HotdealService,
    AmazonBoxService,
    DhgateBoxService,
    EbayBoxService,
    RecentlyviewService
    //CommentService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

