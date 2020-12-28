import { Request, Response, NextFunction } from 'express';
import JWT from 'jsonwebtoken';

//fix error
declare global {
	namespace Express {
		interface Request {
			user: any;
		}
	}
}

const Auth = async (req: Request, res: Response, next: NextFunction) => {
	try {
		//get token
		const token = await req.header('auth-token');

		//check token
		if (!token) {
			return res.status(401).json({
				message: 'no token ! auth denied :(',
			});
		}

		//verify token
		const key: string = process.env.SECRET || '';

		JWT.verify(token, key, (err, decode) => {
			if (err) {
				return res.status(401).json({
					message: 'token is not valid !',
				});
			} else {
				req['user'] = decode;
				next();
			}
		});
	} catch (err) {
		console.log(err);
		res.status(403).json({
			err,
		});
	}
};

export { Auth };
