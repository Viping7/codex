var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var cors = require('cors');
var routeEr = require('route-er');
var port=process.env.PORT || 5000;
const mongoose = require('mongoose');
var connectionString="mongodb://vipin:codex1234@ds155073.mlab.com:55073/codex"
mongoose.connect(connectionString, {useNewUrlParser: true});
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'./dist/index.html'));
});
app.use(express.static(path.join(__dirname,'./dist')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
routeEr.setRoutePath(__dirname + '/routes.js'); 
app.use(cors());

app.use('/',routeEr.init('byMethod'));
app.listen(port,function(){
    console.log(`Application running on ${port}!`);
});
module.exports=app
