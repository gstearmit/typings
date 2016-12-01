import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
//import { SwiperModule } from 'angular2-useful-swiper';
//import { LazyModule } from './lazy/lazy.module';
import { EbayModule } from './ebay/ebay.module';
import { HomeModule } from './home/home.module';

import { AppComponent }       from './app.component';
//import { HomeComponent }      from './home/home.component';
// import { AmazonComponent }      from './amazon/amazon.component';
// //import { AmazonPortalComponent }      from './amazon/portal/portal.component';
// import { AmazonBrowserComponent }      from './amazon/browser/browser.component';
// import { AmazonDetailComponent }      from './amazon/detail/detail.component';
// //import { EbayComponent }      from './ebay/portal/ebay.component';
// import { EbayBrowserComponent }      from './ebay/browser/browser.component';
// import { EbayDetailComponent }      from './ebay/detail/detail.component';

// //import { BigSliderWeshopComponent } from './slider/weshop/big-slider-weshop.component';
// //import { EbayDetailSliderComponent } from './slider/ebay/ebay-detail-slider.component';
// //import { BuyFromComponent } from './component-common/brand/buy-from.component';
// //import { HelpBuyComponent } from './component-common/help-buy/help-buy.component';
// //import { HotDealComponent } from './component-common/hot-deal/hot-deal.component';
// //import { AmazonBoxComponent } from './amazon/amazon-box/amazon-box.component';
// //import { EbayBoxComponent } from './ebay/ebay-box/ebay-box.component';
// //import { DhgateComponent } from './dhgate/dhgate-box/dhgate.component';
// //import { RecentlyViewComponent } from './component-common/recently-view/recently-view.component';

// import { EbayNavComponent } from './ebay/portal/ebay-nav/ebay-nav.component';
// import { EbayBannerComponent } from './ebay/portal/ebay-banner/ebay-banner.component';
// import { EbayHotdealComponent } from './ebay/portal/ebay-hotdeal/ebay-hotdeal.component';
// import { EbayFeature1Component } from './ebay/portal/ebay-feature1/ebay-feature.component';
// import { EbayFeature2Component } from './ebay/portal/ebay-feature2/ebay-feature.component';
// import { EbayFeature3Component } from './ebay/portal/ebay-feature3/ebay-feature.component';
// import { EbayRecommendationComponent } from './ebay/portal/ebay-recommendation/ebay-recommendation.component';
// import { EbayFootcateComponent } from './ebay/portal/ebay-foot-cate/ebay-foot-cate.component';

 //import { HeaderWeshopComponent } from './header/header-weshop.component';

// import { HeaderAmazonComponent } from './header/amazon/header-amazon.component';
// import { HeaderEbayComponent } from './header/ebay/header-ebay.component';

import { SliderService } from './slider/weshop/services/slider.service';
import { HotdealService } from './component-common/hot-deal/services/hotdeal.service';
import { AmazonBoxService } from './amazon/amazon-box/services/amazon-box.service';
import { EbayBoxService } from './ebay/ebay-box/services/ebay-box.service';
import { DhgateBoxService } from './dhgate/dhgate-box/services/dhgate-box.service';
import { EbayDetailImageService } from './slider/ebay/services/slider.service';
import { RecentlyviewService } from './component-common/recently-view/services/recentlyview.service';
import { routing } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    //SwiperModule,
	EbayModule,
    //LazyModule,
	HomeModule,
    routing
  ],
  declarations: [
    AppComponent,
    //HomeComponent,
    //HeaderWeshopComponent,
    //BigSliderWeshopComponent,
    //BuyFromComponent,
    //AmazonBoxComponent,
    //HelpBuyComponent,
    //HotDealComponent,
    // AmazonComponent,
    // //EbayBoxComponent,
    // //DhgateComponent,
    // //RecentlyViewComponent,
    // //AmazonPortalComponent,
    // HeaderAmazonComponent,
    // //EbayComponent,
    // EbayBrowserComponent,
    // EbayDetailComponent,
    // HeaderEbayComponent,
    // AmazonBrowserComponent,
    // AmazonDetailComponent,
    // //EbayDetailSliderComponent,
    // EbayNavComponent,
    // EbayBannerComponent,
    // EbayHotdealComponent,
    // EbayFeature1Component,
    // EbayFeature2Component,
    // EbayFeature3Component,
    // EbayRecommendationComponent,
    // EbayFootcateComponent
  ],
  providers: [
    SliderService,
    HotdealService,
    AmazonBoxService,
    DhgateBoxService,
    EbayBoxService,
    RecentlyviewService,
    EbayDetailImageService
    //CommentService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
platformBrowserDynamic().bootstrapModule(AppModule);
