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
var recentlyview_service_1 = require('./services/recentlyview.service');
var RecentlyViewComponent = (function () {
    function RecentlyViewComponent(recentlyviewService) {
        this.recentlyviewService = recentlyviewService;
        this.datas = {};
        this.getData();
    }
    RecentlyViewComponent.prototype.setData = function () {
        this.datas.id = 1;
        this.datas.src = 'http://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/ywwAAOSwZG9Wi~mT/$_1.JPG';
        this.datas.title = 'Product test';
        this.datas.price = 50000;
        this.datas.currency = 'VND';
        this.datas.sale = 'sale';
        this.recentlyviewService.create(this.datas);
    };
    RecentlyViewComponent.prototype.getData = function () {
        this.datas = this.recentlyviewService.getAll();
    };
    RecentlyViewComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'recently-view',
            templateUrl: "recently-view.component.html",
            providers: [recentlyview_service_1.RecentlyviewService]
        }), 
        __metadata('design:paramtypes', [recentlyview_service_1.RecentlyviewService])
    ], RecentlyViewComponent);
    return RecentlyViewComponent;
}());
exports.RecentlyViewComponent = RecentlyViewComponent;
//# sourceMappingURL=recently-view.component.js.map