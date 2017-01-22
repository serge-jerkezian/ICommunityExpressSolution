import { Component, OnInit ,Input } from '@angular/core';
import {ProductService} from '../../../services/product.service'
import {Product} from '../../../model/product';




@Component({
  moduleId: module.id,
  selector: 'product-detail',
  templateUrl: 'product-detail.html',
  providers: [ProductService]
})
export class ProductDetailComponent implements OnInit 
{ 

  @Input()
  product: Product;

  constructor(private productService:ProductService ){ }

  ngOnInit(): void 
  {
    // this.productService.getProductWindows().then(products => this.productWindows = products);
    // this.productService.getProductCategoryWindows().then(category => this.productCategoryWindow = category);

    //this.productService.getProductDetail(1).then(x=> this.product = x);
  }

}