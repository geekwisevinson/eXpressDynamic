
module.exports=(app)=> {
	app.patch('/user/:_id', function(req, res) {
		console.log(req.body);


		Model_Get_All(Role).then((roles)=>{

				console.log(roles);

			if(roles){
				realRoles = roles.map(role=>role.name);
				console.log('real',realRoles);
				acceptedRoles = [];
				req.body.roles.map(role=>{
					if(realRoles.includes(role)) acceptedRoles.push(role);
				});
				console.log('accept',acceptedRoles);

				req.body.roles = acceptedRoles;

				Model_Update_One(User, req,req.body).then(
					(data)=> {
						res.json(data);
					}
				);
			}
		}
		);

	});
};