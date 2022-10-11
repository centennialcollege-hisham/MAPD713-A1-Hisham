const SERVER_NAME = 'image-api';
const PORT = 8000;
const HOST = '127.0.0.1';

var COUNTER_GET = 0;
var COUNTER_POST = 0;

var restify = require('restify')

    // Get a persistence engine for the images
    , ImagesSave = require('save')('images')

    // Create the restify server
    , server = restify.createServer({name: SERVER_NAME})

server.listen(PORT, HOST, function () {
    console.log('Server %s listening at %s', server.name, server.url)
    console.log('Endpoints: %s/images', server.url)
    console.log('Method: GET, POST,Delete')
})

server.use(restify.fullResponse()).use(restify.bodyParser())

// Get all images
server.get('/images', function (req, res, next) {
    console.log('- GET Images: Received Request')
    COUNTER_GET++;

    ImagesSave.find({}, function (error, images) {
        console.log(images)
        if(images.length === 0){
            res.send(204,images)
        } else {
            res.send(200,images)
        }
        console.log('- GET Images: Sending Response')
    })

    console.log('Processed Request Count--> GET: %s, POST: %s', COUNTER_GET, COUNTER_POST)
})


//Create Image
server.post('/images', function (req, res, next) {
    console.log('- Post Image: Received Request')
    COUNTER_POST++;

    if (req.params.imageId === undefined) {
        return next(new restify.InvalidArgumentError('ImageID Missing'))
    }
    if (req.params.name === undefined) {
        return next(new restify.InvalidArgumentError('Image Name Missing'))
    }
    if (req.params.url === undefined) {
        return next(new restify.InvalidArgumentError('Image URL Missing'))
    }
    if (req.params.size === undefined) {
        return next(new restify.InvalidArgumentError('Image Size Missing'))
    }
    var image = {
        imageId: req.params.imageId,
        name: req.params.name,
        url: req.params.url,
        size: req.params.size
    }

    // Create image
    ImagesSave.create(image, function (error, image) {
        if (error) return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)))
        res.send(201, image)
        console.log('< Images POST: sending response')
    })
    console.log('Processed Request Count--> GET: %s, POST: %s', COUNTER_GET, COUNTER_POST)
})

// Delete all images
server.del('/images', function (req, res, next) {
    ImagesSave.deleteMany({}, function (error, image) {
        // If there are any errors, pass them to next in the correct format
        if (error) return next(new restify.InvalidArgumentError(JSON.stringify(error.errors)))
        res.send()
    })
})
