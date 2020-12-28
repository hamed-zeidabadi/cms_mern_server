import { Request, Response, NextFunction } from 'express';

import User from './../Models/UserModel';
import bcrypt from 'bcryptjs';

import JWT from 'jsonwebtoken';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { username, password } = await req.body;

		// verify username
		const user = await User.find({ username });
		if (user) {
			res.status(400).json({
				message: 'username does exist ! ',
			});
		}

		// hash password

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
		const { username, password } = await req.body;

		// verify username
		const user = await User.findOne({ username });
		if (!user) {
			res.status(404).json({
				message: 'username does not exist ! ',
			});
		}

		// verify password
		const validatePassword = bcrypt.compare(password, user!.password);

		if (!validatePassword) {
			res.status(400).json({
				message: 'wrong password !',
			});
		}

		// set JWT
		const key: string = process.env.SECRET || '';

		const payload = {
			user: {
				id: user!.id,
			},
		};

		await JWT.sign(
			payload,
			key,
			{
				expiresIn: 3600 * 24 * 7,
			},

			(err, token) => {
				if (err) {
					res.status(400).json({
						message: err,
					});
				}
				res.status(200).json({ token });
			}
		);
	} catch (err) {
		console.log('ERORR : ', err);
	}
};

export { createUser, loginUser };
