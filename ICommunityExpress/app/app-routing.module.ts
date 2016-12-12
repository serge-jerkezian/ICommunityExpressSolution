import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }   from './home/home.component';
import { MovieListComponent }   from './movies/movie-list.component';
import { MovieComponent }   from './movies/movie.component';

const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '',  component: HomeComponent },
  { path: 'movies',  component: MovieListComponent },
  { path: 'movie/:id',  component: MovieComponent },

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}