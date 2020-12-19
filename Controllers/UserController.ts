import { Request, Response, NextFunction } from 'express';
import User from './../Models/UserModel';
const createUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { username, password } = await req.body;
		const newUser = await new User({
			username,
			password,
		});
		newUser.save();
		res.status(200).json(newUser);

		next();
	} catch (err) {
		console.log('ERORR : ', err);
	}
};

export { createUser };
