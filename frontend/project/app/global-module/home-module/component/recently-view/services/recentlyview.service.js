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
/* * * ./app/home/hot-deal/services/recentlyview.service.ts * * */
// Imports
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var RecentlyviewService = (function () {
    function RecentlyviewService(http) {
        this.http = http;
        this.objRecentlyView = [];
    }
    RecentlyviewService.prototype.getAll = function () {
        if (localStorage.getItem('dataRecentlyview')) {
            return JSON.parse(localStorage.getItem('dataRecentlyview'));
        }
        else {
            return [];
        }
    };
    RecentlyviewService.prototype.create = function (Recentlyview) {
        var data_parsed = [];
        if (localStorage.getItem('dataRecentlyview')) {
            data_parsed = JSON.parse(localStorage.getItem('dataRecentlyview'));
        }
        data_parsed.push(Recentlyview);
        localStorage.setItem("dataRecentlyview", JSON.stringify(data_parsed));
        return data_parsed;
        // console.log(localStorage.getItem('dataRecentlyview'));
    };
    RecentlyviewService.prototype.update = function (Recentlyview) {
        return this.http.put('/api/users/' + Recentlyview.id, Recentlyview, this.jwt()).map(function (response) { return response.json(); });
    };
    RecentlyviewService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    // private helper methods
    RecentlyviewService.prototype.jwt = function () {
        // create authorization header with jwt token
        var recentlyviewStorage = JSON.parse(localStorage.getItem('recentlyviewStorage'));
        if (recentlyviewStorage) {
            return recentlyviewStorage;
        }
    };
    RecentlyviewService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RecentlyviewService);
    return RecentlyviewService;
}());
exports.RecentlyviewService = RecentlyviewService;
//# sourceMappingURL=recentlyview.service.js.map