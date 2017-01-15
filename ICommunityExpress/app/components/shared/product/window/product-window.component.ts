import { Component, Input } from '@angular/core';
import {ProductWindow} from '../../../../model/product-window';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'product-window',
  templateUrl: 'product-window.html'
})
export class ProductWindowComponent 
{
  @Input()
  product: ProductWindow; 



}
