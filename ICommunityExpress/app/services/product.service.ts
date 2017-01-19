import { Injectable } from '@angular/core';
import { ProductWindow } from '../model/product-window';
import { ProductCategoryWindow } from '../model/product-category-window';
import { Product } from '../model/product';
import {PRODUCT_WINDOWS,PRODUCT_CATEGORY_WINDOWS} from '../services/mock-product'

@Injectable()
export class ProductService 
{
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

}