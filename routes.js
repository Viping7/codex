var component=require('./routes/component')
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
module.exports = {
    'get' : [
        {
            path:'/components',
            controller: component.getComponents,
        },{
            path:'/component/:id',
            controller:component.getComponentById
        },{
            path: '/convertAndDownload/:id',
            controller: component.convertAndDownload
        }
    ],
    'post' : [
        {
            path:'/components',
            middleware:[upload.single('file')],
            controller: component.saveComponent,
        }
    ]
}
