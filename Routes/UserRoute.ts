import { Router } from 'express';
import { createUser } from '../Controllers/UserController';
const userRouter: Router = Router();

userRouter.post('/register', createUser);

export default userRouter;
