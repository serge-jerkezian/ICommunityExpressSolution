export class ProductDetail
{
    id: number;
    name: string;
    price: number;
    //images: ProductImage[];

    constructor();
    constructor(id: number, name: string);
    constructor(id: number, name: string, price: number);
    constructor(id?: number, name?: string, price?: number) 
    {
        this.id = id;
        this.name = name;
        this.price = price;
    }

}

// export class ProductImage
// {
//     id : number;
//     title: string;
//     url: string;
//     rank : number;
// }