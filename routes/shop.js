const path=require('path');
const express = require('express');
// Root Dir
const rootDir=require('../utils/path');
const {products}=require('./admin')

const route = express.Router();
route.get('/', (req, res, next) => {
    // console.log('shop',products);
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    
    res.render('shop',{shopTitle:'Shop',prods:products});
});

module.exports=route;