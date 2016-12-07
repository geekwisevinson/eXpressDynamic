	const mongoose = require('mongoose');

	const Schema = mongoose.Schema;

	EmailSchema = new Schema({
		success:Boolean,

		data:{
			from: { type: String },
			to: { type: String },
			bcc: [String],
			subject: { type: String},
			html:{type:String},
			text:{type:String},
			attachment:Array,
			created_at: { type: Date, default: Date.now },
		}
	});

	Email = mongoose.model('Email', EmailSchema);
