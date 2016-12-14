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
// Imports
var core_1 = require('@angular/core');
var ebay_banner_service_1 = require('./service/ebay-banner.service');
var EbayBannerComponent = (function () {
    // Private property for binding
    // Load data ones componet is ready
    function EbayBannerComponent(ebayBannerService) {
        this.ebayBannerService = ebayBannerService;
        this.datas = [];
    }
    EbayBannerComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    EbayBannerComponent.prototype.getData = function () {
        var _this = this;
        this.ebayBannerService.getBannerEbayHome().subscribe(function (data) { _this.datas = data; }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    EbayBannerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ebay-banner',
            templateUrl: 'ebay-banner.component.html'
        }), 
        __metadata('design:paramtypes', [ebay_banner_service_1.EbayBannerService])
    ], EbayBannerComponent);
    return EbayBannerComponent;
}());
exports.EbayBannerComponent = EbayBannerComponent;
//# sourceMappingURL=ebay-banner.component.js.map