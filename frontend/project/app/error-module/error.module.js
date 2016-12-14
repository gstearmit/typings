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
var error_routes_1 = require('./error.routes');
var not_found_component_1 = require('./component/not-found/not-found.component');
var internal_server_component_1 = require('./component/internal-server/internal-server.component');
var ErrorModule = (function () {
    function ErrorModule() {
    }
    ErrorModule = __decorate([
        core_1.NgModule({
            imports: [
                error_routes_1.errorRouting,
                common_1.CommonModule,
            ],
            declarations: [
                not_found_component_1.NotFoundComponent,
                internal_server_component_1.InternalServerComponent
            ],
            exports: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], ErrorModule);
    return ErrorModule;
}());
exports.ErrorModule = ErrorModule;
//# sourceMappingURL=error.module.js.map