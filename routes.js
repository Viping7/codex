var component=require('./routes/component')
var parseComponent = require('./routes/parseComponent');
module.exports = {
    'get' : [
        {
            path:'/components',
            controller: component.getComponents,
        },{
            path:'/getComponents',
            controller: parseComponent.getParser,
        }
    ],
    'post' : [
        {
            path:'/components',
            controller: component.saveComponent,
        }
    ]
}
