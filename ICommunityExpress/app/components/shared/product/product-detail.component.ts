import { Component, OnInit ,Input } from '@angular/core';
import {ProductService} from '../../../services/product.service'
import {Product} from '../../../model/product';
import { ActivatedRoute } from '@angular/router';




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
  id:  number;

  constructor(private productService:ProductService,private router:ActivatedRoute ){ }

  ngOnInit(): void 
  {
    // this.productService.getProductWindows().then(products => this.productWindows = products);
    // this.productService.getProductCategoryWindows().then(category => this.productCategoryWindow = category);

    //this.productService.getProductDetail(1).then(x=> this.product = x);

        this.router.params.subscribe(params =>
    {
      this.id = params["id"];
      //this.productService.getProductDetailWebAPI(this.id).subscribe(x => this.product = x);

      this.productService.getProductDetail(this.id).subscribe(x => this.product = x);
    });
  }

}