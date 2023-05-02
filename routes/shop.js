const path=require('path');
const express = require('express');
// Root Dir
const rootDir=require('../utils/path');
const productsController=require('../controllers/products');


const route = express.Router();
route.get('/',productsController.index)
route.get('/products', productsController.getAllProducts);
route.get('/cart',productsController.cart)
route.get('/product-details/:productId',productsController.shopProductDetails)

module.exports=route;