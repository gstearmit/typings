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
/* * * ./app/home/hot-deal/services/hotdeal.ts * * */
// Imports
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
var headers_1 = require('../../../../../enu/headers');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var HotdealService = (function () {
    // Resolve HTTP using the constructor
    function HotdealService(http) {
        this.http = http;
        // private instance variable to hold base url
        this.UrlApi = 'http://192.168.11.252:88/common/homepage/';
    }
    // Fetch all existing comments
    HotdealService.prototype.getDataHotdeal = function () {
        return this.http.get(this.UrlApi + 'hotdeals?domain=weshop.com.vn', { headers: headers_1.contentHeaders })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    HotdealService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HotdealService);
    return HotdealService;
}());
exports.HotdealService = HotdealService;
//# sourceMappingURL=hotdeal.service.js.map