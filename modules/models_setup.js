

/**
 * Initialize our 1.0.0 routes.
 *
 * @param app
 */
const fs = require('fs');
module.exports=()=> {

	const models = fs.readdirSync('./models', 'utf-8');
	models.forEach(model => {
		console.log(model);
		console.log(this);
		require(`./../models/${model.slice(0, -3)}`);
	});
};
