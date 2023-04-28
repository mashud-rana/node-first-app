const path=require('path');
const express=require('express');
// Root Dir
const rootDir=require('../utils/path');

const products=[];


// app.use(bodyParser.urlencoded());

// Create new app route
const route=express.Router();


route.get('/add-product',(req,res,next)=>{
    // res.sendFile(path.join(rootDir,'views','add-product.html'));
    res.render('add-product',{pageTitle:'Add Product',path:'/admin/add-product'})
});

route.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    products.push({title:req.body.title});
    res.redirect('/');
});

// module.exports=route;
exports.routes=route;
exports.products=products;
