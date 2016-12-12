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
var movie_1 = require("../model/movie");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var MovieComponent = (function () {
    function MovieComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        var movie1 = new movie_1.Movie(1, 'into the wild');
        var movie2 = new movie_1.Movie(2, 'fight club');
        var movie3 = new movie_1.Movie(3, 'stay');
        var movie4 = new movie_1.Movie(4, 'the secret window');
        this.movies = Array();
        this.movies.push(movie1);
        this.movies.push(movie2);
        this.movies.push(movie3);
        this.movies.push(movie4);
        this.movie = new movie_1.Movie();
        this.route.params
            .subscribe(function (params) {
            _this.currentId = +params['id'];
            if (_this.currentId != 0) {
                _this.getMovie(_this.currentId);
            }
        });
    };
    MovieComponent.prototype.getMovie = function (id) {
        this.movie = this.movies[0];
        console.info(this.movie.id);
    };
    return MovieComponent;
}());
MovieComponent = __decorate([
    core_1.Component({
        selector: 'moviesAdd',
        templateUrl: 'app/movies/movie.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], MovieComponent);
exports.MovieComponent = MovieComponent;
//# sourceMappingURL=movie.component.js.map