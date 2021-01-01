import mongoose, { Schema, Model, Document } from 'mongoose';

export interface IPost extends Document {
	title?: string;
	content?: string;
	image?: string;
	user?: any;
	timestamps?: any;
}

const postSchema = new Schema(
	{
		title: {
			type: String,
		},
		content: {
			type: String,
		},
		image: {
			type: String,
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: 'users',
		},
	},
	{ timestamps: true }
);
const Post: Model<IPost> = mongoose.model('posts', postSchema);

export default Post;
