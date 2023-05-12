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
route.get('/product-edit/:productId',productsController.adminGetSingleProduct);
route.post('/update-product',productsController.adminUpdateProduct);
route.post('/product-delete',productsController.adminProductDelete)
// module.exports=route;
exports.routes=route;
