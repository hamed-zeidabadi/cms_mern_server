import mongoose, { Schema, Model, Document } from 'mongoose';

export interface IUser extends Document {
	username: string;
	password: string;
	posts: string[];
}

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);
const User: Model<IUser> = mongoose.model('users', userSchema);

export default User;
