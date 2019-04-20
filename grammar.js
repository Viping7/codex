var _symbolTable = require('./symbolTable.json');
module.exports = {
    getComponent : function(jsComponent){
      let regex =this.generateRegex(_symbolTable.lookup.component);
      console.log("Regex",regex);
      if (regex.test(jsComponent)){
          console.log("Matched String",jsComponent.match(regex))
          return jsComponent.match(regex);
      }
    },
    generateRegex : function(rule){
       return new RegExp(rule)
    }
}


