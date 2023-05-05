const fs = require('fs');
const path=require('path');
const db=require('../utils/database')


module.exports=class Product {
    constructor(title,price,description,imageUrl){
        this.id=Math.random()
        this.title=title;
        this.price=price;
        this.description=description;
        this.imageUrl=imageUrl;
    }

    save(){
        return db.execute('INSERT INTO products (title,price,description,imageUrl) VALUES (?, ?, ?, ?)',
        [this.title,this.price,this.description,this.imageUrl]);
        // const p=path.join(path.dirname(process.mainModule.filename),'data','products.json');

        // fs.readFile(p,(err,fileContent)=>{
        //     let products=[];

        //     if(!err){
        //         products=JSON.parse(fileContent);
        //     }

        //     products.push(this);

        //     fs.writeFile(p,JSON.stringify(products),(err)=>{
        //         console.log(err);
        //     });
        // });
    }

    static fetchAll(cb){
        // const p=path.join(path.dirname(process.mainModule.filename),'data','products.json');
        // fs.readFile(p,(err,fileContent)=>{
        //     if(err){
        //         cb([]);
        //     }
        //     cb(JSON.parse(fileContent));
        // })

        return db.execute('SELECT * FROM products');
    }

    static find(productId,cb){
        return db.execute(`SELECT * FROM products WHERE id=?`,[productId])
        // const p=path.join(path.dirname(process.mainModule.filename),'data','products.json');
        // fs.readFile(p,(err,fileContent)=>{
        //     if(err){
        //         cb(false);
        //     }
        //     const products=JSON.parse(fileContent);
        //     const product=products.find((pro)=>{
        //         if(pro.id==productId)
        //         {
        //             return pro;
        //         }
        //     });
        //     cb(product);

        // })
    }

};