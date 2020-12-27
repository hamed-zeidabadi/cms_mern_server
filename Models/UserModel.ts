import mongoose, { Schema } from 'mongoose';

export interface IUser extends mongoose.Document {
	username: string;
	password: string;
}

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
const User = mongoose.model<IUser>('users', userSchema);

export default User;
