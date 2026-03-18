import express from 'express';
import borrowerController from '../controllers/borrowers.controller.js';
import validateBorrowerUpdatingMiddleware from '../middlewares/validateBorrowerUpdating.middleware.js';
import booksRouter from './books.router.js';
import borrowingsRouter from './borrowings.router.js';
import validateUserIdMiddleware from '../middlewares/validateUserId.middleware.js';
import lockedForMiddleware from '../middlewares/authorization.middleware.js';
import { USER_TYPES } from '../schemas/user.schema.js';

const router = express.Router();

router.get(
  '/',
  lockedForMiddleware(USER_TYPES.ADMIN),
  borrowerController.getAllBorrowers,
);

router.use(validateUserIdMiddleware);

router.patch(
  '/:userId',
  validateBorrowerUpdatingMiddleware,
  lockedForMiddleware(USER_TYPES.ADMIN),
  borrowerController.updateBorrower,
);
router.delete(
  '/:userId',
  lockedForMiddleware(USER_TYPES.ADMIN),
  borrowerController.deleteBorrower,
);

router.use('/:userId/books', booksRouter);

router.use('/:userId/borrowings', borrowingsRouter);

export default router;
