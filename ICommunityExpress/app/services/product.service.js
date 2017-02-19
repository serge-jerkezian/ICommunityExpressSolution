"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var mock_product_1 = require("../services/mock-product");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var base_service_1 = require("./base.service");
var ProductService = (function (_super) {
    __extends(ProductService, _super);
    function ProductService(http) {
        return _super.call(this, http) || this;
    }
    ProductService.prototype.getProductWindows = function () {
        return Promise.resolve(mock_product_1.PRODUCT_WINDOWS);
    };
    ProductService.prototype.getProductCategoryWindows = function () {
        return Promise.resolve(mock_product_1.PRODUCT_CATEGORY_WINDOWS);
    };
    ProductService.prototype.getProductDetail = function (id) {
        return Rx_1.Observable.of(mock_product_1.PRODUCT_DETAIL);
    };
    ProductService.prototype.getProductDetailWebAPI = function (id) {
        return this.get('http://localhost:5000/product/detail', { id: id });
    };
    return ProductService;
}(base_service_1.BaseService));
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map