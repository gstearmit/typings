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
var big_slider_service_1 = require('./services/big-slider.service');
var BigSliderWeshopComponent = (function () {
    function BigSliderWeshopComponent(sliderService) {
        this.sliderService = sliderService;
        this.datas = [];
        this.homeSlider = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop: true,
            autoplay: 1000
        };
        this.getData();
    }
    BigSliderWeshopComponent.prototype.ngOnInit = function () { };
    BigSliderWeshopComponent.prototype.getData = function () {
        var self = this;
        this.sliderService.getSliders().subscribe(function (res) {
            this.datas = res;
            self.dataImage = this.datas.data.cms_block_data_image_slide;
            self.uploadUrl = this.datas.data.uploadUrl;
            //console.log(this.datas.data);
        });
    };
    BigSliderWeshopComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'big-slider-weshop',
            templateUrl: "big-slider-weshop.component.html"
        }), 
        __metadata('design:paramtypes', [big_slider_service_1.BigSliderService])
    ], BigSliderWeshopComponent);
    return BigSliderWeshopComponent;
}());
exports.BigSliderWeshopComponent = BigSliderWeshopComponent;
//# sourceMappingURL=big-slider-weshop.component.js.map