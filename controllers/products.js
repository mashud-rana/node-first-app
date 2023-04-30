const Product =require('../models/product')

exports.getAddProduct=(req,res,next)=>{
    // res.sendFile(path.join(rootDir,'views','add-product.html'));
    res.render('add-product',{pageTitle:'Add Product',path:'/admin/add-product'})
};

exports.addNewProduct=(req,res,next)=>{
    const product=new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getAllProducts=(req, res, next) => {
    Product.fetchAll((products)=>{
        res.render('shop',{pageTitle:'Shop',prods:products,path:'/'});
    });
    // console.log('shop',products);
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    
};
