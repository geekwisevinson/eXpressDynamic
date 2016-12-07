
module.exports=(app)=> {
	app.post('/role/new', function(req, res) {
		console.log(req.body);
		Model_Save_New(Role, req.body).then(
			(data)=> {
				console.log(data);
				res.json(data);
			}
		);
	});
};