import { ProductWindow } from '../model/product-window';
import { ProductCategoryWindow } from '../model/product-category-window';

export const PRODUCT_WINDOWS: ProductWindow[] = [
    { id: 1, name: 'men bag 1', image: 'man-bag.jpg', price: 50 },
    { id: 2, name: 'men bag 2', image: 'man-bag-small.jpg', price: 100 },
    { id: 3, name: 'men bag 3', image: 'man-bag-small.jpg', price: 110 },
    { id: 4, name: 'men bag 4', image: 'man-bag-small.jpg', price: 120 },
    { id: 5, name: 'men bag 5', image: 'man-bag-small.jpg', price: 130 }
];

export const PRODUCT_CATEGORY_WINDOWS: ProductCategoryWindow = 
{
    id: 1,
    name: 'Community number 1',
    country : 'leb',
    products : [
    { id: 1, name: 'men bag 1', image: 'man-bag.jpg', price: 50 },
    { id: 2, name: 'men bag 2', image: 'man-bag-small.jpg', price: 100 },
    { id: 3, name: 'men bag 3', image: 'man-bag-small.jpg', price: 110 },
    { id: 4, name: 'men bag 4', image: 'man-bag-small.jpg', price: 120 },
    { id: 5, name: 'men bag 7', image: 'man-bag-small.jpg', price: 130 }
]

}