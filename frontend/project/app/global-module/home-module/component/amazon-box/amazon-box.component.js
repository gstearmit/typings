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
var amazon_box_service_1 = require('./services/amazon-box.service');
var AmazonBoxComponent = (function () {
    function AmazonBoxComponent(amazonBoxService) {
        this.amazonBoxService = amazonBoxService;
        this.datas = [];
        //this.getData();
    }
    AmazonBoxComponent.prototype.getData = function () {
        var self = this;
        this.amazonBoxService.getDataAmazonBox().subscribe(function (res) {
            this.datas = res;
            self.dataImage = this.datas.data.cms_block_data_image_banner;
            self.uploadUrl = this.datas.data.uploadUrl;
            self.image = this.datas.data.image;
            self.flag = true;
        });
    };
    AmazonBoxComponent.prototype.onScroll = function () {
        if (!this.flag) {
            this.getData();
        }
    };
    AmazonBoxComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'amazon-box',
            templateUrl: "amazon-box.component.html",
            providers: [amazon_box_service_1.AmazonBoxService]
        }), 
        __metadata('design:paramtypes', [amazon_box_service_1.AmazonBoxService])
    ], AmazonBoxComponent);
    return AmazonBoxComponent;
}());
exports.AmazonBoxComponent = AmazonBoxComponent;
//# sourceMappingURL=amazon-box.component.js.map