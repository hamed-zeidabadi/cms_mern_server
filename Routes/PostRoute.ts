import { Router } from 'express';
import {
	allPost,
	createPost,
	deltePost,
	updatePost,
} from '../Controllers/PostController';




const postRouter: Router = Router();

postRouter.post('/');
postRouter.post('/');

export default postRouter;
