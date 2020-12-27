import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const userValidator = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const { username, password } = await req.body;

	const schema = Joi.object({
		username: Joi.string().min(4).max(30).required(),
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
	next();
};

export { userValidator };
