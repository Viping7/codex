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


module.exports.getComponentById = function(id, callback){
    Component.findById(id,callback);
} 

module.exports.saveComponent = function(componentData,callback){
    var data = new Component({
        name : componentData.name , 
        description : componentData.description , 
        html : componentData.html, 
        ts : componentData.ts, 
        css : componentData.css
    });
    data.save(callback);
}  


