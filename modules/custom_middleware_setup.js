const fs = require('fs');
const middlewares = fs.readdirSync('./custom_middleware', 'utf-8');
const middleware = {};

middlewares.forEach(middle => {
	middleware[middle.slice(0,-3)] =  require('./../custom_middleware/' + `${middle.slice(0, -3)}`) ;
});

module.exports = middleware;