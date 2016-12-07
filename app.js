const express = require('express');
const app = express();



const mongoose_functions = require('./modules/mongoose_functions');
mongoose_functions();


const db_setup = require('./modules/db_setup');
db_setup();

const model_setup = require('./modules/models_setup');
model_setup();

const middleware_setup = require('./modules/middleware_setup');
middleware_setup(app);

const routes_setup = require('./modules/routes_setup');
routes_setup.run.forEach(set =>{
	set(app);
});

app.listen(process.env.PORT, function () {
	console.log('Example app listening on port '+process.env.PORT+'!')
});
