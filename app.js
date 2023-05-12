const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
// Root Dir
const { routes: adminRoutes } = require('./routes/admin');
const shopRoutes = require('./routes/shop')
const rootDir=require('./utils/path');
// 404 Error Controller
const errorController=require('./controllers/error')
// sequelize
const sequelize=require('./utils/database')
const Product=require('./models/product')
const User=require('./models/user')

const app = express();
app.set('view engine', 'ejs') // register the template engine
app.set('views', 'views') // specify the views directory

// get body data
app.use(bodyParser.urlencoded())
// Static file 
app.use(express.static(path.join(rootDir, 'public')))

// First Middleware
app.use('/', (req, res, next) => {
    next();
});

// All route
app.use('/admin', adminRoutes);
app.use(shopRoutes);
// 404 page
app.use(errorController.error404);


// database Relation
Product.belongsTo(User,{constraints:true,onDelete:"CASCADE"})
User.hasMany(Product);

sequelize.sync({
    force:true
}).then(result=>{
    app.listen(8000);
}).catch((error)=>{
    console.log(error);
})

