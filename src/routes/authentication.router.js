import express from 'express';
import authenticationController from '../controllers/authentication.controller.js';
import validateBorrowerAdditionMiddleware from '../middlewares/validateBorrowerAddition.middleware.js';
import validateBorrowerLoginCredsMiddleware from '../middlewares/loginValidation.middleware.js';

const router = express.Router();

router.post(
  '/signup',
  validateBorrowerAdditionMiddleware,
  authenticationController.signup,
);

router.post(
  '/login',
  validateBorrowerLoginCredsMiddleware,
  authenticationController.login,
);

export default router;
