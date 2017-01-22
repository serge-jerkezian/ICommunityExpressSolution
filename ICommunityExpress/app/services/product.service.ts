import { Injectable } from '@angular/core';
import { ProductWindow } from '../model/product-window';
import { ProductCategoryWindow } from '../model/product-category-window';
import { Product } from '../model/product';
import {PRODUCT_WINDOWS,PRODUCT_CATEGORY_WINDOWS} from '../services/mock-product'

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { HttpModule } from '@angular/http';
import {BaseService} from './base.service'




@Injectable()
export class ProductService extends BaseService
{
  constructor(http : Http){
    super(http);
  }

  getProductWindows(): Promise<ProductWindow[]> 
  {
    return Promise.resolve(PRODUCT_WINDOWS);
  }

  getProductCategoryWindows(): Promise<ProductCategoryWindow> 
  {
    return Promise.resolve(PRODUCT_CATEGORY_WINDOWS);
  }

  getProductDetail(id:number) : Promise<Product>
  {
    var products = Promise.resolve(PRODUCT_WINDOWS);

    var product = new Product();

    return products.then(x => product = x[0] );
  }

  getProductDetailWebAPI(id:number) : Observable<Product>
  {
      return this.get('http://localhost:5000/product/detail', {id:99});
  }

}