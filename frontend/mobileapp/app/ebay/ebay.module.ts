import { NgModule } from '@angular/core';

//import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { EbayComponent }   from './portal/ebay.component';
import { SwiperModule } from 'angular2-useful-swiper';

import { HeaderEbayComponent } from '../header/ebay/header-ebay.component';
import { EbayNavComponent } from './portal/ebay-nav/ebay-nav.component';
import { EbayBannerComponent } from './portal/ebay-banner/ebay-banner.component';
import { EbayHotdealComponent } from './portal/ebay-hotdeal/ebay-hotdeal.component';
import { EbayFeature1Component } from './portal/ebay-feature1/ebay-feature.component';
import { EbayFeature2Component } from './portal/ebay-feature2/ebay-feature.component';
import { EbayFeature3Component } from './portal/ebay-feature3/ebay-feature.component';
import { EbayRecommendationComponent } from './portal/ebay-recommendation/ebay-recommendation.component';
import { EbayFootcateComponent } from './portal/ebay-foot-cate/ebay-foot-cate.component';
import { LeftMenuComponent } from '../header/left-menu.component';

import { EbayRoutingModule } from './ebay.routes';

@NgModule({
  imports: [EbayRoutingModule,InfiniteScrollModule,SwiperModule],
  declarations: [
	  EbayComponent,
	  EbayNavComponent,
	  EbayBannerComponent,
	  EbayHotdealComponent,
	  EbayFeature1Component,
	  EbayFeature2Component,
	  EbayFeature3Component,
	  EbayRecommendationComponent,
	  EbayFootcateComponent,
	  HeaderEbayComponent,
	  LeftMenuComponent
  ],
  exports: [
	//   EbayComponent,
	//   EbayNavComponent,
	//   EbayBannerComponent,
	//   EbayHotdealComponent,
	//   EbayFeature1Component,
	//   EbayFeature2Component,
	//   EbayFeature3Component,
	//   EbayRecommendationComponent,
	//   EbayFootcateComponent,
	//   HeaderEbayComponent,
	//   LeftMenuComponent
  ],
  //providers: [NameListService]
})
export class EbayModule { }


