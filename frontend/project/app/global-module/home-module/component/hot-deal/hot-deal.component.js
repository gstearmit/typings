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
var core_1 = require('@angular/core');
var hotdeal_service_1 = require('./services/hotdeal.service');
var format_price_service_1 = require('../../../../services-common/format-price.service');
var HotDealComponent = (function () {
    function HotDealComponent(hotdealService, formatPriceService) {
        this.hotdealService = hotdealService;
        this.formatPriceService = formatPriceService;
        this.datas = [];
    }
    HotDealComponent.prototype.getHotDeal = function () {
        var self = this;
        this.hotdealService.getDataHotdeal().subscribe(function (res) {
            this.datas = res;
            self.dataHotDeal = this.datas.data.cms_block_data_product.data;
            self.uploadUrl = this.datas.data.uploadUrl;
            self.flag = true;
            //console.log(self.dataHotDeal);
        });
    };
    HotDealComponent.prototype.onScroll = function () {
        if (!this.flag) {
            this.getHotDeal();
        }
    };
    HotDealComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hot-deal',
            templateUrl: "hot-deal.component.html",
            providers: [hotdeal_service_1.HotdealService, format_price_service_1.FormatPriceService]
        }), 
        __metadata('design:paramtypes', [hotdeal_service_1.HotdealService, format_price_service_1.FormatPriceService])
    ], HotDealComponent);
    return HotDealComponent;
}());
exports.HotDealComponent = HotDealComponent;
//# sourceMappingURL=hot-deal.component.js.map