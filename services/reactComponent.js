var fs = require('fs');
module.exports.createReactComponent = function (declarations) {
    
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


