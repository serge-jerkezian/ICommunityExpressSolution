import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent }        from './components/pages/root/app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TestComponent } from './components/pages/test/test.component';
  
import { HeaderComponent } from './components/shared/header/header.component';
import { ProductDetailComponent } from './components/pages/product-detail/product-detail.component';
import { ProductWindowComponent } from './components/shared/product/window/product-window.component';
import { ProductCategoryWindowComponent } from './components/shared/product/window/product-category-window.component';
import { CommunityInfoVisit } from './components/shared/community/community-info-visit.component';
import { CommunityContact } from './components/shared/community/community-contact.component';

import { IfEmptyPipe} from './filter/if-empty'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule

  ],
  declarations: [
    AppComponent,    
    HomeComponent,
    HeaderComponent,
    TestComponent,
    ProductDetailComponent,
    ProductWindowComponent,
    ProductCategoryWindowComponent,
    CommunityInfoVisit,
    CommunityContact,
    IfEmptyPipe
    
  ],
//   providers: [
//     HeroService
//   ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}