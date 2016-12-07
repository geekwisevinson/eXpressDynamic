const mongoose = require('mongoose');

const Schema = mongoose.Schema;

RoleSchema = new Schema({
	name: { type: String }
});

Role = mongoose.model('Role', RoleSchema);