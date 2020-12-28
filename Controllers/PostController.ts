import { Request, Response, NextFunction } from 'express';

const allPost = async (req: Request, res: Response, next: NextFunction) => {
	try {
		next();
	} catch (err) {
		console.log('ERORR : ', err);
	}
};
const createPost = async (req: Request, res: Response, next: NextFunction) => {
	try {
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
