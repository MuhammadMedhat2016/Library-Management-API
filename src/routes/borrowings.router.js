import express from 'express';
import borrowingsController from '../controllers/borrowings.controller.js';
import rateLimiterMiddleware from '../middlewares/rateLimiter.middleware.js';
import lockedForMiddleware from '../middlewares/authorization.middleware.js';
import authorizedBorrowerOrAdminMiddleware from '../middlewares/authorizedBorrowerOrAdmin.middleware.js';
import { USER_TYPES } from '../schemas/user.schema.js';

const router = express.Router({ mergeParams: true });

router.get(
  '/report',
  rateLimiterMiddleware,
  lockedForMiddleware(USER_TYPES.ADMIN),
  borrowingsController.getBorrowingsReport,
);

router.get(
  '/',
  authorizedBorrowerOrAdminMiddleware,
  borrowingsController.getAllActiveBorrowings,
);

export default router;
