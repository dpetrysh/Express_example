const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => {
	res.statusCode = 200;
	res.setHeader('Context-Type', 'text/plain');
	next();
})
.get((req, res, next) => {
	res.end('Will send all the promotions to you!');
})
.post((req, res, next) => {
	res.end(' Will add the promotion: ' + req.body.name + ' with details ' + req.body.description);
})
.put((req, res, next) => {
	res.statusCode = 403;
	res.end('Put operation not supported on /promotions');
})
.delete((req, res, next) => {
	res.end('Deleting all the promotions');
});


promoRouter.route('/:promoId')
.all((req, res, next) => {
	res.statusCode = 200;
	res.setHeader('Context-Type', 'text/plain');
	next();
})
.get((req, res, next) => {
	res.end('Will send the promotion: ' + req.params.promoId + ' to you!');
})
.post((req, res, next) => {
	res.statusCode = 403;
	res.end('Post operation is not supported on /promotions/:promoId');
})
.put((req, res, next) => {
	res.end('Will make some changes on ' + req.params.promoId);
})
.delete((req, res, next) => {
	res.end('Deleting the promo: ' + req.params.promoId + '.');
});

module.exports = promoRouter;