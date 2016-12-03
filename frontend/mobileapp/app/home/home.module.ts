import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

//import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { SwiperModule } from 'angular2-useful-swiper';
import { CommonModule } from '@angular/common'; //<-- This one 

import { HomeComponent }   from './home.component';
import { HeaderWeshopComponent } from '../header/header-weshop.component';
import { BigSliderWeshopComponent } from '../slider/weshop/big-slider-weshop.component';
import { BuyFromComponent } from '../component-common/brand/buy-from.component';
import { HelpBuyComponent } from '../component-common/help-buy/help-buy.component';
import { HotDealComponent } from '../component-common/hot-deal/hot-deal.component';
import { AmazonBoxComponent } from '../amazon/amazon-box/amazon-box.component';
import { EbayBoxComponent } from '../ebay/ebay-box/ebay-box.component';
import { DhgateComponent } from '../dhgate/dhgate-box/dhgate.component';
import { RecentlyViewComponent } from '../component-common/recently-view/recently-view.component';


import { FormatPriceService }          from'../services-common/format-price.service';

import { SliderService } from '../slider/weshop/services/slider.service';
import { HotdealService } from '../component-common/hot-deal/services/hotdeal.service';
import { AmazonBoxService } from '../amazon/amazon-box/services/amazon-box.service';
import { EbayBoxService } from '../ebay/ebay-box/services/ebay-box.service';
import { DhgateBoxService } from '../dhgate/dhgate-box/services/dhgate-box.service';
import { EbayDetailImageService } from '../slider/ebay/services/slider.service';
import { RecentlyviewService } from '../component-common/recently-view/services/recentlyview.service';

import { homeRoutes } from './home.routes';

@NgModule({
  imports: [
  homeRoutes,
  BrowserModule,
  //InfiniteScrollModule,
  SwiperModule,
  CommonModule
  ],
  declarations: [
	HomeComponent,
	HeaderWeshopComponent,
	BigSliderWeshopComponent,
	BuyFromComponent,
	HelpBuyComponent,
	AmazonBoxComponent,
	HotDealComponent,
	EbayBoxComponent,
	DhgateComponent,
	RecentlyViewComponent
  ],
  exports: [
	    // HeaderWeshopComponent,
		// BigSliderWeshopComponent,
		// BuyFromComponent,
		// HelpBuyComponent,
		// AmazonBoxComponent,
		// HotDealComponent,
		// EbayBoxComponent,
		// DhgateComponent,
		// RecentlyViewComponent,
	    // SwiperModule
  ],
  providers: [
	SliderService,
    HotdealService,
    AmazonBoxService,
    DhgateBoxService,
    EbayBoxService,
    RecentlyviewService,
    EbayDetailImageService,
	FormatPriceService
  ]
})
export class HomeModule { }


