// include module
import { NgModule } 				from '@angular/core';
import { CommonModule } 			from '@angular/common';
import { homeRoutes } 				from './home.routes';
import { ShareModule} 				from '../../share/share.module';
import { SwiperModule } 			from 'angular2-useful-swiper';
//import { InfiniteScrollModule } from 'angular2-infinite-scroll';

// include component
import { HomeComponent }            from './component/home/home.component';
import { HeaderEbayComponent } from './component/header/header-ebay.component';
import { EbayNavComponent } from './component/ebay-nav/ebay-nav.component';
import { EbayBannerComponent } from './component/ebay-banner/ebay-banner.component';
import { EbayHotdealComponent } from './component/ebay-hotdeal/ebay-hotdeal.component';
import { EbayFeature1Component } from './component/ebay-feature1/ebay-feature.component';
import { EbayFeature2Component } from './component/ebay-feature2/ebay-feature.component';
import { EbayFeature3Component } from './component/ebay-feature3/ebay-feature.component';
import { EbayRecommendationComponent } from './component/ebay-recommendation/ebay-recommendation.component';
import { EbayFootcateComponent } from './component/ebay-foot-cate/ebay-foot-cate.component';

// include services
import { EbayBannerService } from './component/ebay-banner/service/ebay-banner.service';
import { EbayHotdealService } from './component/ebay-hotdeal/service/ebay-hotdeal.service';


@NgModule({
    // load module
    imports: [
        homeRoutes,
        CommonModule,
        SwiperModule,
        ShareModule,
        //InfiniteScrollModule,
    ],
    // load component
    declarations: [
        HomeComponent,
        HeaderEbayComponent,
        EbayNavComponent,
        EbayBannerComponent,
        EbayHotdealComponent,
        EbayFeature1Component,
        EbayFeature2Component,
        EbayFeature3Component,
        EbayRecommendationComponent,
        EbayFootcateComponent
    ],
    // load all module,component to extend
    exports: [

    ],
    // load service
    providers: [
        EbayBannerService,
        EbayHotdealService
    ]
})
export class HomeModule { }


