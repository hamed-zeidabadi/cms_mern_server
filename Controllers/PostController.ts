import { Request, Response, NextFunction, json } from 'express';
import Post from '../Models/PostModel';
import User from '../Models/UserModel';
import JWT from 'jsonwebtoken';

const allPost = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const posts = await Post.find().populate('user', '-password');
		res.status(200).json(posts);
		next();
	} catch (err) {
		console.log('ERORR : ', err);
	}
};
const createPost = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { title, content, image } = await req.body;
		const id = req.user.id;
		const newPost = await Post.create({
			title,
			content,
			image,
			user: id,
		});
		newPost.save();
		res.status(200).json(newPost);
		next();
	} catch (err) {
		console.log('ERORR : ', err);
	}
};

const updatePost = async (req: Request, res: Response, next: NextFunction) => {
	try {
		next();
	} catch (err) {
		console.log('ERORR : ', err);
	}
};

const deltePost = async (req: Request, res: Response, next: NextFunction) => {
	try {
		next();
	} catch (err) {
		console.log('ERORR : ', err);
	}
};

export { allPost, createPost, updatePost, deltePost };
