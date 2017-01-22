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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_routing_module_1 = require('./app-routing.module');
var http_1 = require('@angular/http');
var app_component_1 = require('./components/pages/root/app.component');
var home_component_1 = require('./components/pages/home/home.component');
var test_component_1 = require('./components/pages/test/test.component');
var header_component_1 = require('./components/shared/header/header.component');
var product_detail_component_1 = require('./components/shared/product/product-detail.component');
var product_window_component_1 = require('./components/shared/product/window/product-window.component');
var product_category_window_component_1 = require('./components/shared/product/window/product-category-window.component');
var if_empty_1 = require('./filter/if-empty');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                header_component_1.HeaderComponent,
                test_component_1.TestComponent,
                product_detail_component_1.ProductDetailComponent,
                product_window_component_1.ProductWindowComponent,
                product_category_window_component_1.ProductCategoryWindowComponent,
                if_empty_1.IfEmptyPipe
            ],
            //   providers: [
            //     HeroService
            //   ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map