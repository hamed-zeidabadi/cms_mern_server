import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';
import User from './../Models/UserModel';
import bcrypt from 'bcryptjs';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { username, password } = await req.body;

		//validator

		const schema = Joi.object({
			username: Joi.string().min(6).max(30).required(),
			password: Joi.string().min(6).max(30).required(),
		});

		const result = await schema.validate({
			username,
			password,
		});

		if (result.error) {
			res.status(400).json({
				message: result.error.details[0].message,
			});
		}

		//hash password

		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hashSync(password, salt);

		const newUser = await new User({
			username,
			password: hashPassword,
		});

		newUser.save();
		res.status(200).json(newUser);

		next();
	} catch (err) {
		console.log('ERORR : ', err);
	}
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
	} catch (err) {
		console.log('ERORR : ', err);
	}
};

export { createUser, loginUser };
