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
var angular2_infinite_scroll_1 = require('angular2-infinite-scroll');
// include component
var home_component_1 = require('./component/home/home.component');
var header_weshop_component_1 = require('./component/header/header-weshop.component');
var big_slider_weshop_component_1 = require('./component/bigslider/big-slider-weshop.component');
var buy_from_component_1 = require('./component/buy-from/buy-from.component');
var help_buy_component_1 = require('./component/help-buy/help-buy.component');
var hot_deal_component_1 = require('./component/hot-deal/hot-deal.component');
var amazon_box_component_1 = require('./component/amazon-box/amazon-box.component');
var ebay_box_component_1 = require('./component/ebay-box/ebay-box.component');
var recently_view_component_1 = require('./component/recently-view/recently-view.component');
// include services
var format_price_service_1 = require('../../services-common/format-price.service');
var big_slider_service_1 = require('./component/bigslider/services/big-slider.service');
var hotdeal_service_1 = require('./component/hot-deal/services/hotdeal.service');
var amazon_box_service_1 = require('./component/amazon-box/services/amazon-box.service');
var ebay_box_service_1 = require('./component/ebay-box/services/ebay-box.service');
var recentlyview_service_1 = require('./component/recently-view/services/recentlyview.service');
var buy_from_service_1 = require('./component/buy-from/services/buy-from.service');
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
                angular2_infinite_scroll_1.InfiniteScrollModule,
            ],
            // load component
            declarations: [
                home_component_1.HomeComponent,
                header_weshop_component_1.HeaderWeshopComponent,
                big_slider_weshop_component_1.BigSliderWeshopComponent,
                buy_from_component_1.BuyFromComponent,
                help_buy_component_1.HelpBuyComponent,
                amazon_box_component_1.AmazonBoxComponent,
                hot_deal_component_1.HotDealComponent,
                ebay_box_component_1.EbayBoxComponent,
                recently_view_component_1.RecentlyViewComponent
            ],
            // load all module,component to extend
            exports: [],
            // load service
            providers: [
                big_slider_service_1.BigSliderService,
                hotdeal_service_1.HotdealService,
                amazon_box_service_1.AmazonBoxService,
                ebay_box_service_1.EbayBoxService,
                format_price_service_1.FormatPriceService,
                recentlyview_service_1.RecentlyviewService,
                buy_from_service_1.BuyFromService,
                recentlyview_service_1.RecentlyviewService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=home.module.js.map