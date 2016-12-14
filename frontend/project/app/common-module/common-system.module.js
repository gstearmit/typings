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
var left_menu_component_1 = require('./component/left-menu/left-menu.component');
var CommonSystemModule = (function () {
    function CommonSystemModule() {
    }
    CommonSystemModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule
            ],
            providers: [],
            declarations: [
                left_menu_component_1.LeftMenuComponent
            ],
            exports: [
                common_1.CommonModule,
                left_menu_component_1.LeftMenuComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], CommonSystemModule);
    return CommonSystemModule;
}());
exports.CommonSystemModule = CommonSystemModule;
//# sourceMappingURL=common-system.module.js.map