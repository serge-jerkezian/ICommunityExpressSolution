import { Component } from '@angular/core';
import {Product} from '../../model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'movies',
  templateUrl: 'app/movies/movie-list.html'
})
export class MovieListComponent 
{
  product: Product; 

  constructor( private router: Router)
  {
    let movie1 = new Product(1,'into the wild');

  }



}
