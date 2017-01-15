import { Injectable } from '@angular/core';
import { ProductWindow } from '../model/product-window';
import { ProductCategoryWindow } from '../model/product-category-window';
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

}