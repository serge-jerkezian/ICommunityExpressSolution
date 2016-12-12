import { Component } from '@angular/core';
import {Movie} from '../model/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'movies',
  templateUrl: 'app/movies/movie-list.html'
})
export class MovieListComponent 
{
  movies: Movie[]; 

  selectedMovie: Movie;
  newMovie: Movie;

  constructor( private router: Router)
  {
    let movie1 = new Movie(1,'into the wild');
    let movie2 = new Movie(2,'fight club',2000);
    let movie3 = new Movie(3,'stay');
    let movie4 = new Movie(4,'the secret window');


    this.movies = Array<Movie>(); 
    this.movies.push(movie1);
    this.movies.push(movie2);
    this.movies.push(movie3);
    this.movies.push(movie4);
  }

  toggleShowMovie():void
  {
      this.newMovie = this.newMovie != null ? null : new Movie();
  }

  addMovie()
  {
    if(this.newMovie.id != 0 && this.newMovie.name != "")
    {
      this.movies.push(this.newMovie);
      this.newMovie = null;
    }
  }

  setCurrentMovie(movie:Movie)
  {
    //first click
    if(this.selectedMovie == null)
    {
      this.selectedMovie = movie;
    }
    else
    {
      if(this.selectedMovie.id == movie.id )
      {
        this.selectedMovie = null
      }
      else
      {
        this.selectedMovie = movie;
      }
    }
    

  }



}
