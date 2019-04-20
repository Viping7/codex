var component=require('./routes/component')
module.exports = {
    'get' : [
        {
            path:'/components',
            controller: component.getComponents,
        }
    ],
    'post' : [
        {
            path:'/components',
            controller: component.saveComponent,
        }
    ]
}
