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
var community_info_1 = require("../../../model/community-info");
var CommunityInfoVisit = (function () {
    function CommunityInfoVisit() {
    }
    CommunityInfoVisit.prototype.ngOnInit = function () { };
    return CommunityInfoVisit;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", community_info_1.CommunityInfo)
], CommunityInfoVisit.prototype, "communityInfo", void 0);
CommunityInfoVisit = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'community-info-visit',
        templateUrl: 'community-info-visit.html'
    }),
    __metadata("design:paramtypes", [])
], CommunityInfoVisit);
exports.CommunityInfoVisit = CommunityInfoVisit;
//# sourceMappingURL=community-info-visit.component.js.map