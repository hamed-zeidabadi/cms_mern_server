import { Router } from 'express';
import { createUser, loginUser } from '../Controllers/UserController';

import { userValidator } from '../validator';

const userRouter: Router = Router();

userRouter.post('/register', userValidator, createUser);
userRouter.post('/login', userValidator, loginUser);

export default userRouter;
