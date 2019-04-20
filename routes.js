var component=require('./routes/component')
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
