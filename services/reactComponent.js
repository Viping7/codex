var fs = require('fs');
createReactComponent = function (declarations) {
    
   // if (declarations =='ClassDeclaration') {
       let componentName = declarations.name;
        fs.createWriteStream('templates/react/' + componentName + '.js', "", function (err) {
            if (err) 
                throw err;
                else {
                console.log('Saved!');
                var appComponent = require('./'+componentName);
                console.log('name of the component',appComponent);
                }
        });
   // }
}

module.exports.readTsFile = function(){
    try{
        parser.parseSource(request).then(function(result){
          result.declarations.forEach(declaration => {
            createReactComponent(declaration);
          });
          console.log("after parsed",result);
        },function(err){
          console.log("after parsed",err);
        });
    }
    catch(e){
      next(e)
    }
  }


