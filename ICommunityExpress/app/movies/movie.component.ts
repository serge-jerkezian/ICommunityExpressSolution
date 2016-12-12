import { Component } from '@angular/core';
import {Movie} from '../model/movie';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'moviesAdd',
  templateUrl: 'app/movies/movie.html'
})
export class MovieComponent 
{
  currentId: number;

  movies: Movie[]; 

  movie:Movie;

  constructor( private route: ActivatedRoute, private router: Router) {}

  ngOnInit() 
  {

    let movie1 = new Movie(1,'into the wild');
    let movie2 = new Movie(2,'fight club');
    let movie3 = new Movie(3,'stay');
    let movie4 = new Movie(4,'the secret window');


    this.movies = Array<Movie>(); 
    this.movies.push(movie1);
    this.movies.push(movie2);
    this.movies.push(movie3);
    this.movies.push(movie4);

    this.movie = new Movie();


  this.route.params
    // (+) converts string 'id' to a number
    //.switchMap((params: Params) => this.getMovie(+params['id']));
    //.subscribe((hero: Hero) => this.hero = hero);

    .subscribe((params: Params) => 
    {
        this.currentId = +params['id'];

        if(this.currentId != 0)
        {
          this.getMovie(this.currentId);
        }
      });
  }

  getMovie(id:number): void
  {
    this.movie =  this.movies[0];
    console.info(this.movie.id);
  }

  




}
