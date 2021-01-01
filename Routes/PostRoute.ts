import { Router } from 'express';
import { Auth } from '../auth';
import {
	allPost,
	createPost,
	deltePost,
	updatePost,
} from '../Controllers/PostController';

const postRouter: Router = Router();
postRouter.get('/post/all', allPost);
postRouter.post('/post/create', Auth, createPost);

export default postRouter;
