"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// include module
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var home_routes_1 = require('./home.routes');
var share_module_1 = require('../../share/share.module');
var angular2_useful_swiper_1 = require('angular2-useful-swiper');
//import { InfiniteScrollModule } from 'angular2-infinite-scroll';
// include component
var home_component_1 = require('./component/home/home.component');
var header_ebay_component_1 = require('./component/header/header-ebay.component');
var ebay_nav_component_1 = require('./component/ebay-nav/ebay-nav.component');
var ebay_banner_component_1 = require('./component/ebay-banner/ebay-banner.component');
var ebay_hotdeal_component_1 = require('./component/ebay-hotdeal/ebay-hotdeal.component');
var ebay_feature_component_1 = require('./component/ebay-feature1/ebay-feature.component');
var ebay_feature_component_2 = require('./component/ebay-feature2/ebay-feature.component');
var ebay_feature_component_3 = require('./component/ebay-feature3/ebay-feature.component');
var ebay_recommendation_component_1 = require('./component/ebay-recommendation/ebay-recommendation.component');
var ebay_foot_cate_component_1 = require('./component/ebay-foot-cate/ebay-foot-cate.component');
// include services
var ebay_banner_service_1 = require('./component/ebay-banner/service/ebay-banner.service');
var ebay_hotdeal_service_1 = require('./component/ebay-hotdeal/service/ebay-hotdeal.service');
var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            // load module
            imports: [
                home_routes_1.homeRoutes,
                common_1.CommonModule,
                angular2_useful_swiper_1.SwiperModule,
                share_module_1.ShareModule,
            ],
            // load component
            declarations: [
                home_component_1.HomeComponent,
                header_ebay_component_1.HeaderEbayComponent,
                ebay_nav_component_1.EbayNavComponent,
                ebay_banner_component_1.EbayBannerComponent,
                ebay_hotdeal_component_1.EbayHotdealComponent,
                ebay_feature_component_1.EbayFeature1Component,
                ebay_feature_component_2.EbayFeature2Component,
                ebay_feature_component_3.EbayFeature3Component,
                ebay_recommendation_component_1.EbayRecommendationComponent,
                ebay_foot_cate_component_1.EbayFootcateComponent
            ],
            // load all module,component to extend
            exports: [],
            // load service
            providers: [
                ebay_banner_service_1.EbayBannerService,
                ebay_hotdeal_service_1.EbayHotdealService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map