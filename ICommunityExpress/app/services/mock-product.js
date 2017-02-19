/// <reference path="../../_ref.ts" />
"use strict";
var moment = require("moment");
exports.PRODUCT_WINDOWS = [
    { id: 1, name: 'men bag 1', image: 'man-bag.jpg', price: 50 },
    { id: 2, name: 'men bag 2', image: 'man-bag-small.jpg', price: 100 },
    { id: 3, name: 'men bag 3', image: 'man-bag-small.jpg', price: 110 },
    { id: 4, name: 'men bag 4', image: 'man-bag-small.jpg', price: 120 },
    { id: 5, name: 'men bag 5', image: 'man-bag-small.jpg', price: 130 }
];
exports.PRODUCT_CATEGORY_WINDOWS = {
    id: 1,
    name: 'Community number 1',
    country: 'leb',
    products: [
        { id: 1, name: 'men bag 1', image: 'man-bag.jpg', price: 50 },
        { id: 2, name: 'men bag 2', image: 'man-bag-small.jpg', price: 100 },
        { id: 3, name: 'men bag 3', image: 'man-bag-small.jpg', price: 110 },
        { id: 4, name: 'men bag 4', image: 'man-bag-small.jpg', price: 120 },
        { id: 5, name: 'men bag 7', image: 'man-bag-small.jpg', price: 130 }
    ]
};
exports.PRODUCT_DETAIL = {
    id: 1,
    name: 'Product 1 awesome',
    price: 90,
    images: [
        {
            id: 1,
            title: 'this is image 1',
            rank: 1,
            url: 'bag.png'
        },
        {
            id: 2,
            title: 'this is image 2',
            rank: 2,
            url: 'man-bag.jpg'
        }
    ],
    communityInfo: {
        id: 1,
        name: 'community name 1',
        openedDate: moment().format("dddd"),
        //moment().subtract('months', 1).unix()
        rate: 9
    },
    communityContact: [
        {
            id: 1,
            name: 'community name 1'
        },
        {
            id: 2,
            name: 'community name 2'
        }
    ],
    itemSpecifics: [
        {
            key: 'Brand Name',
            value: 'Nike'
        },
        {
            key: 'Color',
            value: 'Blue'
        },
        {
            key: 'Condition',
            value: 'New'
        },
        {
            key: 'Gender',
            value: 'Unisex'
        },
        {
            key: 'Material',
            value: 'PVC'
        },
        {
            key: 'Version',
            value: '1.0.1'
        },
        {
            key: 'Country',
            value: 'Japan'
        },
        {
            key: 'Size',
            value: '1km'
        },
        {
            key: 'Height',
            value: '177 cm'
        }
    ],
    packagingDetails: [
        {
            key: 'unit type',
            value: 'piece'
        },
        {
            key: 'Package Size',
            value: '20cm x 15cm x 10cm (7.87in x 5.91in x 3.94in)'
        },
        {
            key: 'package weight',
            value: '0.800kg (1.76lb.)'
        }
    ]
};
//# sourceMappingURL=mock-product.js.map