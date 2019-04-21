var component=require('./routes/component')
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
var parseComponent = require('./services/parseComponent');
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
        },
        {
            path:'/parseTs',
            controller:parseComponent.readTsFile
        }
    ],
    'post' : [
        {
            path:'/components',
            controller: component.saveComponent,
        },
        {
            path : '/saveFiles',
            middleware:[upload.single('file')],
            controller : component.uploadFilestoDB
        }
    ]
}
