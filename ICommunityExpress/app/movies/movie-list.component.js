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
var MovieListComponent = (function () {
    function MovieListComponent(router) {
        this.router = router;
        var movie1 = new movie_1.Movie(1, 'into the wild');
        var movie2 = new movie_1.Movie(2, 'fight club', 2000);
        var movie3 = new movie_1.Movie(3, 'stay');
        var movie4 = new movie_1.Movie(4, 'the secret window');
        this.movies = Array();
        this.movies.push(movie1);
        this.movies.push(movie2);
        this.movies.push(movie3);
        this.movies.push(movie4);
    }
    MovieListComponent.prototype.toggleShowMovie = function () {
        this.newMovie = this.newMovie != null ? null : new movie_1.Movie();
    };
    MovieListComponent.prototype.addMovie = function () {
        if (this.newMovie.id != 0 && this.newMovie.name != "") {
            this.movies.push(this.newMovie);
            this.newMovie = null;
        }
    };
    MovieListComponent.prototype.setCurrentMovie = function (movie) {
        //first click
        if (this.selectedMovie == null) {
            this.selectedMovie = movie;
        }
        else {
            if (this.selectedMovie.id == movie.id) {
                this.selectedMovie = null;
            }
            else {
                this.selectedMovie = movie;
            }
        }
    };
    return MovieListComponent;
}());
MovieListComponent = __decorate([
    core_1.Component({
        selector: 'movies',
        templateUrl: 'app/movies/movie-list.html'
    }),
    __metadata("design:paramtypes", [router_1.Router])
], MovieListComponent);
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=movie-list.component.js.map