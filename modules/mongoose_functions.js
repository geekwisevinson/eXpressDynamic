/*
 db functions
 mongoose should be imported here
 */

/*
 all functions should follow this standard with params
 first parameter should be Model
 second should be the query object containing the identifying properties
 last should be the data being saved
 */

module.exports = {

	Save_New : (Model,data)=>{
		let model = new Model(data);
		return model.save();
	},

	Get_All : (Model)=>{
		return Model.find({});
	},

	Get_Some : (Model,query)=>{
		return Model.find(query);
	},

	Get_One : (Model,query)=>{
		return Model.findOne(query);
	},

	Delete_One : (Model,query)=>{
		return Model.remove(query);
	},

	Update_One : (Model,query,data)=>{
		return Model.findOneAndUpdate(query,data);
	}

};