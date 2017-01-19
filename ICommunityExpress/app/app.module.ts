import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }        from './components/pages/root/app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';


import { ProductDetailComponent } from './components/shared/product/product-detail.component';
import { ProductWindowComponent } from './components/shared/product/window/product-window.component';


import { ProductCategoryWindowComponent } from './components/shared/product/window/product-category-window.component';





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
    HeaderComponent,
    ProductDetailComponent,
    ProductWindowComponent,
    ProductCategoryWindowComponent,
    IfEmptyPipe
    
  ],
//   providers: [
//     HeroService
//   ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}