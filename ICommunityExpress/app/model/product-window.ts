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

}