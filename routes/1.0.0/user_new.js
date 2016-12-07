
module.exports=(app)=> {
	app.post('/user/new', function(req, res) {
		console.log(req.body);
		Model_Save_New(User, req.body).then(
			(data)=> {
				console.log(data);
				res.json(data);
			}
		);
	});
};