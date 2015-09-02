
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	email: String,
	username: {
		type: String,
		trim: true,
		unique: true
	},
	password: String,
});

mongoose.model('User', UserSchema);
