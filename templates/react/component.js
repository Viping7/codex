
module.exports = (name,extn,html,state,methods) =>{
    let structure = `
    import React, { Component } from 'react';
    import './${name}.${extn}';
    class ${name} extends Component {
        constructor(props){
            super(props);
            ${state}
        }
        render(){
            ${methods}
            return(
                ${html}
            )
        }
    }
    export default ${name};

`
return structure;
}