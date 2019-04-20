var _symbolTable = require('./symbolTable.json');
module.exports = {
    getComponent : function(jsComponent){
      let regex = generateRegex(_symbolTable.component);
      if (jsComponent.test(regex)){
          return jsComponent.match(regex);
      }
    },
    generateRegex : function(rule){
       return new RegExp(rule)
    }
}


