import {CommunityInfo} from './community-info'
import {CommunityContact} from './community-contact'
import {KeyValue} from './key-value'



export class Product 
{
    id: number;
    name: string;
    price: number;
    images: ProductImage[];
    communityInfo: CommunityInfo;
    communityContact: CommunityContact[];
    itemSpecifics : KeyValue[];
    packagingDetails : KeyValue[];

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

export class ProductImage
{
    id : number;
    title: string;
    url: string;
    rank : number;
}