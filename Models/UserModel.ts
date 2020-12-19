import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});
const User = mongoose.model('users', userSchema);

export default User;
