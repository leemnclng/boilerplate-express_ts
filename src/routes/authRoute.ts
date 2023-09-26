import express, { Router } from 'express';
import authController from '../controller/authController';

const router: Router = express.Router();

router.get('/signin',authController.signinController);

export default router;