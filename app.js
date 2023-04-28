const express = require('express');
const bodyParser = require('body-parser')
const path=require('path');
// Root Dir
const rootDir=require('./utils/path');

const app = express();
app.set('view engine', 'pug') // register the template engine
app.set('views', 'views') // specify the views directory


const {routes:adminRoutes}=require('./routes/admin');
const shopRoutes=require('./routes/shop')

// get body data
app.use(bodyParser.urlencoded())
// Static file 
app.use(express.static(path.join(rootDir,'public')))

// First Middleware
app.use('/', (req, res, next) => {
    next();
});

app.use('/admin',adminRoutes);
app.use(shopRoutes);

// 404 page
app.use((req,res,next)=>{
    // res.status(404).sendFile(path.join(rootDir,'views','404.html'));
    res.render('404');
});

app.listen(3000);