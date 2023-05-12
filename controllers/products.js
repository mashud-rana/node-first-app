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

    Product.create({
        title:title,
        price:price,
        imageUrl:imageUrl,
        description:description
    }).then(result=>{
        res.redirect('/products');
    }).catch(error=>{
        console.log(error);
    });
    // res.redirect('/products');
};

exports.getAllProducts=(req, res, next)=> {
    Product.findAll().then(products=>{
        res.render('shop/product-list',{pageTitle:'Products',prods:products,path:'/products'})
    }).catch(error=>{
        console.log(error);
    });
    // Product.fetchAll().then((result)=>{
    //     res.render('shop/product-list',{pageTitle:'Products',prods:result[0],path:'/products'});
    // }).catch((error)=>{
    //     console.log(error);
    // })
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
    Product.findAll().then(products=>{
        res.render('admin/product-list',{pageTitle:'Admin Products',prods:products,path:'/admin/products'});
    }).catch(error=>{
        console.log(error);
    });
};

exports.shopProductDetails=(req,res,next)=>{
    const productId=req.params.productId;
    Product.findByPk(productId).then((product)=>{
        res.render('shop/product-details',{path:'/product-details',prod:product,pageTitle:"Product Details"})
    }).catch((error)=>{
        console.log(error);
    })
    // console.log(req.params.productId);
    // const productId=req.params.productId;
    // Product.find(productId, (product)=>{
    //     res.render('shop/product-details',{path:'/product-details',prod:product,pageTitle:"Product Details"})
    // });
    
};

exports.adminGetSingleProduct=(req,res,next)=>{
    let productId=req.params.productId;
    Product.findByPk(productId).then(product=>{
        if(!product)
        {
            res.redirect('/products');
        }else{
            res.render('admin/edit-product',{path:'/product-details',prod:product,pageTitle:"Edit Product"})
        }
    }).catch(error=>{
        console.log(error);
    })
}

exports.adminUpdateProduct=(req,res,next)=>{
    let productId=req.body.product_id;
    Product.findByPk(productId).then(product=>{
        product.title=req.body.title;
        product.price=req.body.price;
        product.imageUrl=req.body.image_url;
        product.description=req.body.description;
        return product.save();
        
    }).then(response=>{
        res.redirect('/admin/products');
    })
    .catch(error=>{
        console.log(error);
    })
}

exports.adminProductDelete=(req,res,next)=>{
    let productId=req.body.product_id;
    Product.findByPk(productId).then(product=>{
        return Product.destroy({where:{id:productId}});
    }).then(response=>{
        res.redirect('/admin/products');
    }).catch(error=>{
        console.log(error);
    })
}