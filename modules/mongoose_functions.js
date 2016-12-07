module.exports = ()=>{

	Model_Save_New = (Mongoose_Model,data_to_save)=>{
			let mongoose_model = new Mongoose_Model(data_to_save);
			return mongoose_model.save();
	};

	Model_Get_All = (Mongoose_Model)=>{


			return Mongoose_Model.find({});


	};
	//
	// Model_Get_Some = (Mongoose_Model,query_object,req,res)=>{
	// 	Mongoose_Model.find(query_object, function(err, array_of_objects) {
	// 		if (err)
	// 			res.json({message:err,success:false});
	// 		if(array_of_objects)
	// 			res.json({data:array_of_objects,success:true});
	// 	});
	// };
	//
	// Model_Get_One = (Mongoose_Model,query_object,req,res)=>{
	// 	Mongoose_Model.findOne(query_object, function(err, object) {
	// 		if (err) console.log(err);
	// 		if(object){
	// 			object.remove(function(err) {
	// 				if (err)
	// 					res.json({message:err,success:false});
	//
	// 					res.json({data:query_object,success:true});
	// 			});
	// 		}
	// 	});
	// };
	//
	// Model_Delete_One = (Mongoose_Model,query_object,req,res)=>{
	// 	Mongoose_Model.findOne(query_object, function(err, object) {
	// 		if (err)
	// 			res.json({message:err,success:false});
	// 		if(object)
	// 			res.json({data:object,success:true});
	// 	});
	// };
	//
	Model_Update_One = (Mongoose_Model,req,query_object)=>{

		return Mongoose_Model.findOneAndUpdate({_id:req.params._id},query_object);
	};

};