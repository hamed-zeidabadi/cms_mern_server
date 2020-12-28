import mongoose, { Schema, Model, Document } from 'mongoose';

export interface IUser extends Document {
	// username: string;
	// password: string;
}

const postSchema = new Schema({
	// username: {
	// 	type: String,
	// 	required: true,
	// 	unique: true,
	// },
	// password: {
	// 	type: String,
	// 	required: true,
	// },
});
const Post: Model<IUser> = mongoose.model('posts', postSchema);

export default Post;
