var component=require('./routes/component')
var parseComponent = require('./routes/parseComponent');
module.exports = {
    'get' : [
        {
            path:'/components',
            controller: component.getComponents,
        },{
            path:'/component/:id',
            controller:component.getComponentById
        }
    ],
    'post' : [
        {
            path:'/components',
            controller: component.saveComponent,
        }
    ]
}
