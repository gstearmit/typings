import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { SwiperModule } from 'angular2-useful-swiper';
import { AmazonComponent }   from './portal/amazon.component';

import { HeaderAmazonComponent } from '../header/amazon/header-amazon.component';
import { AmazonNavComponent } from './portal/amazon-nav/amazon-nav.component';
import { AmazonBannerComponent } from './portal/amazon-banner/amazon-banner.component';
import { AmazonHotdealComponent } from './portal/amazon-hotdeal/amazon-hotdeal.component';
import { AmazonFeature1Component } from './portal/amazon-feature1/amazon-feature.component';
import { AmazonFeature2Component } from './portal/amazon-feature2/amazon-feature.component';
import { AmazonFeature3Component } from './portal/amazon-feature3/amazon-feature.component';
import { AmazonRecommendationComponent } from './portal/amazon-recommendation/amazon-recommendation.component';
import { AmazonFootcateComponent } from './portal/amazon-foot-cate/amazon-foot-cate.component';


import { AmazonBrowserComponent } from './browser/browser.component';
import { AmazonDetailComponent } from './detail/detail.component';

import { AmazonDetailSliderComponent } from '../slider/amazon/amazon-detail-slider.component';

import { AmazonDetailImageService } from '../slider/amazon/services/slider.service';

import { AmazonRoutingModule } from './amazon.routes';

@NgModule({
    imports: [AmazonRoutingModule,BrowserModule,InfiniteScrollModule,SwiperModule],
    declarations: [
        AmazonComponent,
        AmazonNavComponent,
        AmazonBannerComponent,
        AmazonHotdealComponent,
        AmazonFeature1Component,
        AmazonFeature2Component,
        AmazonFeature3Component,
        AmazonRecommendationComponent,
        AmazonFootcateComponent,
        HeaderAmazonComponent,
        AmazonBrowserComponent,
        AmazonDetailComponent,
        AmazonDetailSliderComponent,
    ],
    exports: [
        AmazonComponent,
        AmazonNavComponent,
        AmazonBannerComponent,
        AmazonHotdealComponent,
        AmazonFeature1Component,
        AmazonFeature2Component,
        AmazonFeature3Component,
        AmazonRecommendationComponent,
        AmazonFootcateComponent,
        HeaderAmazonComponent,
        AmazonBrowserComponent,
        AmazonDetailComponent,
        AmazonDetailSliderComponent,
        SwiperModule
    ],
    providers: [
        AmazonDetailImageService
    ]
})
export class AmazonModule { }


