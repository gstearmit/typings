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
var ebay_box_service_1 = require('./services/ebay-box.service');
var format_price_service_1 = require('../../../../services-common/format-price.service');
var EbayBoxComponent = (function () {
    function EbayBoxComponent(ebayBoxService) {
        this.ebayBoxService = ebayBoxService;
        this.datas = [];
        //this.getData();
    }
    EbayBoxComponent.prototype.getData = function () {
        var self = this;
        this.ebayBoxService.getDataEbayBox().subscribe(function (res) {
            this.datas = res;
            self.dataImage = this.datas.data.cms_block_data_image_banner;
            self.uploadUrl = this.datas.data.uploadUrl;
            self.image = this.datas.data.image;
            self.flag = true;
        });
    };
    EbayBoxComponent.prototype.onScroll = function () {
        if (!this.flag) {
            this.getData();
        }
    };
    EbayBoxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ebay-box',
            templateUrl: "ebay-box.component.html",
            providers: [ebay_box_service_1.EbayBoxService, format_price_service_1.FormatPriceService]
        }), 
        __metadata('design:paramtypes', [ebay_box_service_1.EbayBoxService])
    ], EbayBoxComponent);
    return EbayBoxComponent;
}());
exports.EbayBoxComponent = EbayBoxComponent;
//# sourceMappingURL=ebay-box.component.js.map