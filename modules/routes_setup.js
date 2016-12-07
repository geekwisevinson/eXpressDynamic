const fs = require('fs');
const v = '1.0.0';
const routes = fs.readdirSync('./routes/'+v, 'utf-8');
const routing = {};
routing.run = [];

routes.forEach(route => {
	console.log(route);
	routing.run.push( require('./../routes/'+v+ '/' + `${route.slice(0, -3)}`) );
});

module.exports = routing;