const Product =require('../models/product')
const asyncHandler = require('express-async-handler')

exports.getAddProduct=(req,res,next)=>{
    // res.sendFile(path.join(rootDir,'views','add-product.html'));
    res.render('admin/add-product',{pageTitle:'Add Product',path:'/admin/add-product'})
};

exports.addNewProduct=(req,res,next)=>{
    const title=req.body.title;
    const price=req.body.price;
    const description=req.body.description;
    const imageUrl=req.body.image_url;

    const product=new Product(title,price,description,imageUrl);
    product.save().then(()=>{
        res.redirect('/products')
    }).catch(error=>{
        console.log(error);
    });
    // res.redirect('/products');
};

exports.getAllProducts=(req, res, next)=> {
    Product.fetchAll().then((result)=>{
        res.render('shop/product-list',{pageTitle:'Products',prods:result[0],path:'/products'});
    }).catch((error)=>{
        console.log(error);
    })
    // Product.fetchAll((products)=>{
    //     res.render('shop/product-list',{pageTitle:'Products',prods:products,path:'/products'});
    // });
    // console.log('shop',products);
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    
};

exports.index=(req,res,next)=>{
    res.render('shop/index',{pageTitle:'Shop',path:'/'});
}

exports.cart=(req,res,next)=>{
    res.render('shop/cart',{pageTitle:"Cart",path:'/cart'});
};

exports.adminGetProducts=(req,res,next)=>{
    res.render('admin/product-list',{pageTitle:'Admin Products',path:'/admin/products'})
};

exports.shopProductDetails=(req,res,next)=>{
    const productId=req.params.productId;
    Product.find(productId).then(([rows,defaultField])=>{
        res.render('shop/product-details',{path:'/product-details',prod:rows[0],pageTitle:"Product Details"})
    }).catch((error)=>{
        console.log(error);
    })
    // console.log(req.params.productId);
    // const productId=req.params.productId;
    // Product.find(productId, (product)=>{
    //     res.render('shop/product-details',{path:'/product-details',prod:product,pageTitle:"Product Details"})
    // });
    
};