"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var product_1 = require("../model/product");
var mock_product_1 = require("../services/mock-product");
var ProductService = (function () {
    function ProductService() {
    }
    ProductService.prototype.getProductWindows = function () {
        return Promise.resolve(mock_product_1.PRODUCT_WINDOWS);
    };
    ProductService.prototype.getProductCategoryWindows = function () {
        return Promise.resolve(mock_product_1.PRODUCT_CATEGORY_WINDOWS);
    };
    ProductService.prototype.getProductDetail = function (id) {
        var products = Promise.resolve(mock_product_1.PRODUCT_WINDOWS);
        var product = new product_1.Product();
        return products.then(function (x) { return product = x[0]; });
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable()
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map