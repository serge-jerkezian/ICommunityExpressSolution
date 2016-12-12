import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }        from './root/app.component';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movies/movie-list.component';
import { MovieComponent } from './movies/movie.component';
import { IfEmptyPipe} from './filter/if-empty'




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  declarations: [
    AppComponent,    
    HomeComponent,
    MovieListComponent,
    MovieComponent,
    IfEmptyPipe
    
  ],
//   providers: [
//     HeroService
//   ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}