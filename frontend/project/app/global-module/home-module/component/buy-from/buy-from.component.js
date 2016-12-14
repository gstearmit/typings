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
var buy_from_service_1 = require('./services/buy-from.service');
var BuyFromComponent = (function () {
    function BuyFromComponent(buyFromService) {
        this.buyFromService = buyFromService;
        this.datas = [];
        this.dataBuyFromContent = [];
        this.brandUS = {
            paginationClickable: true,
            loop: true,
            autoplay: 1000,
            breakpoints: {
                640: {
                    slidesPerView: 3,
                },
                533: {
                    slidesPerView: 2,
                }
            }
        };
        this.getData();
    }
    BuyFromComponent.prototype.ngOnInit = function () {
        this.active = 0;
    };
    BuyFromComponent.prototype.tabClick = function (index) {
        this.active = index;
    };
    BuyFromComponent.prototype.isActive = function (categoryId) {
        if (this.active == categoryId) {
            return 'tab-pane active';
        }
        else {
            return 'tab-pane';
        }
    };
    BuyFromComponent.prototype.getData = function () {
        var self = this;
        this.buyFromService.getBuyFrom().subscribe(function (res) {
            this.datas = res;
            self.dataBuyFromTop = this.datas.data.cms_block_data_category;
            for (var key in this.datas.data.cms_block_data_image_brand) {
                self.dataBuyFromContent.push(this.datas.data.cms_block_data_image_brand[key]);
            }
            //console.log(self.dataBuyFromContent);
            self.uploadUrl = this.datas.data.uploadUrl;
        });
    };
    BuyFromComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'buy-from',
            templateUrl: "buy-from.component.html"
        }), 
        __metadata('design:paramtypes', [buy_from_service_1.BuyFromService])
    ], BuyFromComponent);
    return BuyFromComponent;
}());
exports.BuyFromComponent = BuyFromComponent;
//# sourceMappingURL=buy-from.component.js.map