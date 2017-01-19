import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }   from './components/pages/home/home.component';
import { ProductDetailComponent }   from './components/shared/product/product-detail.component';


const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '',  component: HomeComponent },
  { path: 'product/detail',  component: ProductDetailComponent },


];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}