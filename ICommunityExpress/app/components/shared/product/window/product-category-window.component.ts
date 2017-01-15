import { Component, Input } from '@angular/core';
import {ProductCategoryWindow} from '../../../../model/product-category-window';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'product-category-window',
  templateUrl: 'product-category-window.html'
})
export class ProductCategoryWindowComponent 
{
    @Input()
    category: ProductCategoryWindow; 
}
