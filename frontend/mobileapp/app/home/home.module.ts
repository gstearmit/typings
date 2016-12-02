import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { SwiperModule } from 'angular2-useful-swiper';

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

import { homeRoutes } from './home.routes';

@NgModule({
  imports: [homeRoutes,BrowserModule,InfiniteScrollModule,SwiperModule],
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
	    HeaderWeshopComponent,
		BigSliderWeshopComponent,
		BuyFromComponent,
		HelpBuyComponent,
		AmazonBoxComponent,
		HotDealComponent,
		EbayBoxComponent,
		DhgateComponent,
		RecentlyViewComponent,
	    SwiperModule
  ],
  //providers: [NameListService]
})
export class HomeModule { }


