const fs = require('fs');
const path=require('path');


module.exports=class Product {
    constructor(title,price,description,imageUrl){
        this.id=Math.random()
        this.title=title;
        this.price=price;
        this.description=description;
        this.imageUrl=imageUrl;
    }

    save(){
        const p=path.join(path.dirname(process.mainModule.filename),'data','products.json');

        fs.readFile(p,(err,fileContent)=>{
            let products=[];

            if(!err){
                products=JSON.parse(fileContent);
            }

            products.push(this);

            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            });
        });
    }

    static fetchAll(cb){
        const p=path.join(path.dirname(process.mainModule.filename),'data','products.json');
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                cb([]);
            }
            cb(JSON.parse(fileContent));
        })
    }

    static find(productId,cb){
        const p=path.join(path.dirname(process.mainModule.filename),'data','products.json');
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                cb(false);
            }
            const products=JSON.parse(fileContent);
            const product=products.find((pro)=>{
                if(pro.id==productId)
                {
                    return pro;
                }
            });
            cb(product);

        })
    }

};