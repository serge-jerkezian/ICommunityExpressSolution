import { Component, OnInit  } from '@angular/core';
import {ProductService} from '../../../services/product.service'
import {ProductWindow} from '../../../model/product-window';
import {ProductCategoryWindow} from '../../../model/product-category-window';



@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.html',
  providers: [ProductService]
})
export class HomeComponent implements OnInit 
{ 
  productWindows : ProductWindow[];
  productCategoryWindow : ProductCategoryWindow;

  constructor(private productService:ProductService )
  {
  }

  ngOnInit(): void 
  {
    this.productService.getProductWindows().then(products => this.productWindows = products);
    this.productService.getProductCategoryWindows().then(category => this.productCategoryWindow = category);

    debugger
  }



}