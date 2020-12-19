import { Router } from 'express';
import { createUser, loginUser } from '../Controllers/UserController';
const userRouter: Router = Router();

userRouter.post('/register', createUser);
userRouter.post('/login', createUser);

export default userRouter;
