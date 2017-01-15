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
var core_1 = require("@angular/core");
var product_service_1 = require("../../../services/product.service");
var HomeComponent = (function () {
    function HomeComponent(productService) {
        this.productService = productService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProductWindows().then(function (products) { return _this.productWindows = products; });
        this.productService.getProductCategoryWindows().then(function (category) { return _this.productCategoryWindow = category; });
        debugger;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'home',
        templateUrl: 'home.html',
        providers: [product_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map