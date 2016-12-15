// include module
import { NgModule } 				from '@angular/core';
import { CommonModule } 			from '@angular/common';
import { homeRoutes } 				from './home.routes';
import { ShareModule} 				from '../../share/share.module';
import { SwiperModule } 			from 'angular2-useful-swiper';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';

// include component
import { HomeComponent }            from './component/home/home.component';
import { HeaderWeshopComponent }    from './component/header/header-weshop.component';
import { BigSliderWeshopComponent } from './component/bigslider/big-slider-weshop.component';
import { BuyFromComponent } 		from './component/buy-from/buy-from.component';
import { HelpBuyComponent }         from './component/help-buy/help-buy.component';
import { HotDealComponent }         from './component/hot-deal/hot-deal.component';
import { AmazonBoxComponent } 		from './component/amazon-box/amazon-box.component';
import { EbayBoxComponent }         from './component/ebay-box/ebay-box.component';
import { RecentlyViewComponent }    from './component/recently-view/recently-view.component';

// include services
import { FormatPriceService }       from '../../services-common/format-price.service';

import { BigSliderService } 		from './component/bigslider/services/big-slider.service';
import { HotdealService }   		from './component/hot-deal/services/hotdeal.service';
import { AmazonBoxService } 		from './component/amazon-box/services/amazon-box.service';
import { EbayBoxService }   		from './component/ebay-box/services/ebay-box.service';
import { RecentlyviewService } 		from './component/recently-view/services/recentlyview.service';
import { BuyFromService } 		    from './component/buy-from/services/buy-from.service';

@NgModule({
	// load module
	imports: [
		homeRoutes,
		CommonModule,
		SwiperModule,
		ShareModule,
		InfiniteScrollModule,
	],
	// load component
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
	// load all module,component to extend
	exports: [
		
	],
	// load service
	providers: [
		BigSliderService,
		HotdealService,
		AmazonBoxService,
		EbayBoxService,
		FormatPriceService,
		RecentlyviewService,
		BuyFromService,
		RecentlyviewService
	]
})
export class HomeModule { }


