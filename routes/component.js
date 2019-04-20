var component=require('./../Repo/component')
const tempWrite = require('temp-write');
var parseService = require('../services/parseComponent');
module.exports={
    getComponents : function(req,res){
        component.getComponents(function(err,components){
            if(err){
                res.status(500).json({
                    'result' : {
                        'status' :500,
                        'error': 'Unable to fetch data'
                    }
                });
            }
            else{
                res.status(200).json({
                    'result' : {
                        'status' :200,
                        'data': components
                    }
                });
            }
        });
    },
    saveComponent : function(req,res){
        if(req.body){
            parseService.parseForDB(req.file, (err,data)=>{
                if(err){
                    return res.status(500).json({
                        'result' : {
                            'status' :500,
                            'message': 'Somthing went wrong'
                        }
                    });
                }
                data.name = req.body.name;
                data.description = req.body.description;
                component.saveComponent(data,function(err,components){
                    if(err){
                        res.status(500).json({
                            'result' : {
                                'status' :500,
                                'error': 'Unable to save data'
                            }
                        });
                    }
                    else{
                        res.status(200).json({
                            'result' : {
                                'status' :200,
                                'message': 'Saved successfully'
                            }
                        });
                    }
                });
            })
          
        }
        else{
            res.status(400).json({
                'result' : {
                    'status' :400,
                    'error': 'Request Body missing'
                }
            });
        }
        
    },
    getComponentById: function(req,res){
    
    component.getComponentsById(req.params.id, function(err,components){
        if(err){
            res.status(500).json({
                'result' : {
                    'status' :500,
                    'error': 'Unable to fetch data'
                }
            });
        }
        else{
            res.status(200).json({
                'result' : {
                    'status' :200,
                    'data': components
                }
            });
        }
    })
    },
    convertAndDownload: function(req,res){
        component.getComponentsById(req.params.id, function(err,components){
            if(err){
                res.status(500).json({
                    'result' : {
                        'status' :500,
                        'error': 'Unable to fetch data'
                    }
                });
            }
            else{
                parseService.parseToReact(components,(err,data)=>{
                    if(err){
                        res.status(500).json({
                            'result' : {
                                'status' :500,
                                'error': 'Unable to fetch data'
                            }
                        });
                    }else{
                        let path = tempWrite.sync(new Buffer(data))
                        res.download(path,`${components.name.trim()}.zip`);
                    }       
                })
            }
        })
        }
}
