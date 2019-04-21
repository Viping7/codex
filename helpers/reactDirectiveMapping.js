var regex = {
    "*ngfor": [/(?:let|var)[ A-z ]*(of)/,/[A-z]*[0-9]*[(?:;| |'')]*;/]
}
module.exports = {
    '*ngfor': (value,input,tagName,classes)=>{
        try{
        let iteratorName = value.match(regex["*ngfor"][0])[0].split(' ')[1];
        let array = value.split("of")[1].trim();
        // value.match(regex["*ngif"][1]).split(';')[0];
        let replacedContent = `
          { this.state.${array}.map(${iteratorName} =>{
               return <${tagName} className="${classes.join(' ')}">${input}</${tagName}>
            })
          }
        `
        return replacedContent;
        }catch(e){
            return ''
        } 
    },
    "(click)":(value,input,tagName,classes)=>{
        try{    
            let replacedContent = `
                <${tagName} className="${classes.join(' ')}" onClick={${value}}">${input}</${tagName}>
            `
            return replacedContent;
        }catch(e){
            return '';
        }
    },
    "*ngif":(value,input,tagName,classes)=>{
        try{
            let replacedContent = `
            {
                (${value})?<${tagName} className="${classes.join(' ')}">${input}</${tagName}>:null
            }`
            return replacedContent;
        }catch(e){
            return ''
        }
    }
}