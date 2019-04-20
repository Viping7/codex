
module.exports = (name,extn,html) =>{
    let structure = `
    import React, { Component } from 'react';
    import './${name}.${extn}';
    class ${name} extends Component {
        constructor(props){
            super(props);
        }
        render(){
            return(
                ${html}
            )
        }
    }
    export default ${name};

`
return structure;
}