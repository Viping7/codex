const mongoose=require('mongoose');
var componentSchema=mongoose.Schema({
    name:{
        type:String
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


module.exports.getComponents = function(callback){
    Component.find(callback);
} 

module.exports.getComponentsById = function(id, callback){
    Component.findById(id,callback);
} 

module.exports.saveComponent = function(componentData,callback){
    var data = new Component(componentData);
    data.save(callback);
} 

module.exports.createOrUpdate = function(componentData,callback){
    if(componentData._id){
        Component.update({_id: componentData._id}, componentData, callback);
    }
    else{
        var data = new Component(componentData);
        data.save(callback);
    }
}   

module.exports=Component;


