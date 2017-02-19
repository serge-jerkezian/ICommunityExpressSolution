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
var product_1 = require("../../../model/product");
var router_1 = require("@angular/router");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.slideInState = "in";
        this.slideOutState = "out";
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        // this.productService.getProductWindows().then(products => this.productWindows = products);
        // this.productService.getProductCategoryWindows().then(category => this.productCategoryWindow = category);
        var _this = this;
        //this.productService.getProductDetail(1).then(x=> this.product = x);
        this.router.params.subscribe(function (params) {
            _this.id = params["id"];
            //this.productService.getProductDetailWebAPI(this.id).subscribe(x => this.product = x);
            _this.productService.getProductDetail(_this.id).subscribe(function (x) { return _this.product = x; });
        });
    };
    return ProductDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", product_1.Product)
], ProductDetailComponent.prototype, "product", void 0);
ProductDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'product-detail',
        templateUrl: 'product-detail.html',
        providers: [product_service_1.ProductService]
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, router_1.ActivatedRoute])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map