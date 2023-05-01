const Product =require('../models/product')

exports.getAddProduct=(req,res,next)=>{
    // res.sendFile(path.join(rootDir,'views','add-product.html'));
    res.render('admin/add-product',{pageTitle:'Add Product',path:'/admin/add-product'})
};

exports.addNewProduct=(req,res,next)=>{
    const product=new Product(req.body.title);
    product.save();
    res.redirect('/products');
};

exports.getAllProducts=(req, res, next) => {
    Product.fetchAll((products)=>{
        res.render('shop/product-list',{pageTitle:'Products',prods:products,path:'/products'});
    });
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
