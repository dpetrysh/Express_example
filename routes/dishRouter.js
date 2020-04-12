const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req, res, next) => {
	res.statusCode = 200;
	res.setHeader('Context-Type', 'text/plain');
	next();
})
.get((req, res, next) => {
	res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
	res.end(' Will add the dish: ' + req.body.name + ' with details ' + req.body.description);
})
.put((req, res, next) => {
	res.statusCode = 403;
	res.end('Put operation not supported on /dishes');
})
.delete((req, res, next) => {
	res.end('Deleting all the dishes');
});


dishRouter.route('/:dishId')
.all((req, res, next) => {
	res.statusCode = 200;
	res.setHeader('Context-Type', 'text/plain');
	next();
})
.get((req, res, next) => {
	res.end('Will send the dish: ' + req.params.dishId + ' to you!');
})
.post((req, res, next) => {
	res.statusCode = 403;
	res.end('Post operation is not supported on /dishes/:dishId');
})
.put((req, res, next) => {
	res.end('Will make some changes on ' + req.params.dishId);
})
.delete((req, res, next) => {
	res.end('Deleting the dish: ' + req.params.dishId + '.');
});

module.exports = dishRouter;