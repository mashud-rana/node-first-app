const express=require('express');
// Root Dir
const rootDir=require('../utils/path');
const productsController=require('../controllers/products');

// app.use(bodyParser.urlencoded());

// Create new app route
const route=express.Router();


route.get('/add-product',productsController.getAddProduct);
route.post('/add-product',productsController.addNewProduct);
route.get('/products',productsController.adminGetProducts);
// module.exports=route;
exports.routes=route;
