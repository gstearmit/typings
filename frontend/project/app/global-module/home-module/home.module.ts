import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

//import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { SwiperModule } from 'angular2-useful-swiper';
//<-- This one 

import { HomeComponent }            from './component/home/home.component';
import { HeaderWeshopComponent }    from './component/header/header-weshop.component';
import { BigSliderWeshopComponent } from './component/bigslider/big-slider-weshop.component';
import { BuyFromComponent } 		from './component/buy-from/buy-from.component';
import { HelpBuyComponent }         from './component/help-buy/help-buy.component';
import { HotDealComponent }         from './component/hot-deal/hot-deal.component';
import { AmazonBoxComponent } 		from './component/amazon-box/amazon-box.component';
import { EbayBoxComponent }         from './component/ebay-box/ebay-box.component';
import { RecentlyViewComponent }    from './component/recently-view/recently-view.component';


import { FormatPriceService }         from '../../services-common/format-price.service';

import { BigSliderService } from './component/bigslider/services/big-slider.service';
import { HotdealService }   from './component/hot-deal/services/hotdeal.service';
import { AmazonBoxService } from './component/amazon-box/services/amazon-box.service';
import { EbayBoxService }   from './component/ebay-box/services/ebay-box.service';
// import { RecentlyviewService } from '../component-common/recently-view/services/recentlyview.service';

import { homeRoutes } from './home.routes';
import { ShareModule} from '../../share/share.module';

@NgModule({
	imports: [
		homeRoutes,
		// BrowserModule,
		CommonModule,
		//InfiniteScrollModule,
		SwiperModule,
		ShareModule
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
		RecentlyViewComponent
	],
	exports: [
		
	],
	providers: [
		BigSliderService,
		HotdealService,
		AmazonBoxService,
		EbayBoxService,
		FormatPriceService
	]
})
export class HomeModule { }


