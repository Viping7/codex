const mongoose=require('mongoose');
var componentSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description :{
        type:String
    },
    html : {
        type : String
    },
    ts : {
        type : String
    },
    css : {
        type : String
    }
});

const Component = module.exports=mongoose.model('component',componentSchema);


module.exports.getComponents = function(id, callback){
    Component.find(id,callback);
} 

module.exports.saveComponent = function(componentData,callback){
    var data = new Component(componentData);
    data.save(callback);
}  
module.exports=Component;


