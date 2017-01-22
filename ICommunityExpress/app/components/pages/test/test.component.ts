import { Component, OnInit  } from '@angular/core';
import {ProductService} from '../../../services/product.service'

import {Product} from '../../../model/product';



@Component({
  moduleId: module.id,
  selector: 'test',
  templateUrl: 'test.html',
  providers: [ProductService]
})
export class TestComponent implements OnInit 
{ 
  product : Product;
  

  constructor(private productService:ProductService )
  {
  }

  ngOnInit(): void 
  {
    let errorObject :Product = new Product();
    errorObject.id = 8;
    errorObject.name = "vigor";
    errorObject.price = 99;


    this.productService.getProductDetailWebAPI(1).subscribe(x => this.product = x);

    // this.productService.getProductDetailWebAPI(1).subscribe((data) =>  this.product = data,
    // (err) => this.product = errorObject); 

    
  }



}