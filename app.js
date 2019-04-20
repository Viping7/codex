var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var routeEr = require('route-er');
var port=process.env.PORT || 5000;
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'./dist/index.html'));
});
app.use(express.static(path.join(__dirname,'./dist')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
routeEr.setRoutePath(__dirname + '/routes.js'); 
app.use('/',routeEr.init('byMethod'));
app.listen(port,function(){
    console.log(`Application running on ${port}!`);
});
module.exports=app
