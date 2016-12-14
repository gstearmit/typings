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
//import { BrowserModule }   from '@angular/platform-browser';
var common_1 = require('@angular/common');
var share_module_1 = require('../share/share.module');
var home_module_1 = require('./home-module/home.module');
var ebay_routes_1 = require('./ebay.routes');
var ebay_component_1 = require('./ebay.component');
var EbayModule = (function () {
    function EbayModule() {
    }
    EbayModule = __decorate([
        core_1.NgModule({
            imports: [
                ebay_routes_1.ebayRouting,
                //BrowserModule,
                common_1.CommonModule,
                share_module_1.ShareModule,
                home_module_1.HomeModule,
            ],
            declarations: [
                ebay_component_1.EbayComponent,
            ],
            exports: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], EbayModule);
    return EbayModule;
}());
exports.EbayModule = EbayModule;
//# sourceMappingURL=ebay.module.js.map