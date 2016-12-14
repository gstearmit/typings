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
var common_1 = require('@angular/common');
var home_module_1 = require('./home-module/home.module');
var global_routes_1 = require('./global.routes');
var global_component_1 = require('./global.component');
var GlobalModule = (function () {
    function GlobalModule() {
    }
    GlobalModule = __decorate([
        core_1.NgModule({
            imports: [
                global_routes_1.globalRouting,
                common_1.CommonModule,
                home_module_1.HomeModule
            ],
            declarations: [
                global_component_1.GlobalComponent
            ],
            exports: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], GlobalModule);
    return GlobalModule;
}());
exports.GlobalModule = GlobalModule;
//# sourceMappingURL=global.module.js.map