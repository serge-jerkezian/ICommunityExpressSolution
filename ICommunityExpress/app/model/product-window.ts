import {Product} from './product'

export class ProductWindow
{
  id: number;
  name: string;
  price: number;
  image: string

    constructor();
    constructor(id:number,name:string);   
    constructor(id:number,name:string,price:number,image:string);
    constructor(id?:number,name?:string,price?:number,image?:string)
    {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }

    // getProduct() : Product
    // {
    //     let product = new Product();
    //     product.id = this.id;
    //     product.name = this.name;
    //     product.price = this.price;
    //     return product;
    // }

}