const logger = require('morgan');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

module.exports=(app)=> {
	app.use(logger('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(cookieParser());
	console.log('middleware setup');

	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		res.header('Access-Control-Allow-Methods','POST, GET, DELETE, PUT');
		next();
	});
};


