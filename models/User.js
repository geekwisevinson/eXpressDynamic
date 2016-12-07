const mongoose = require('mongoose');

const Schema = mongoose.Schema;

UserSchema = new Schema({
		name: { type: String },
		roles: [String],
		created_at: { type: Date, default: Date.now },
});

User = mongoose.model('User', UserSchema);
