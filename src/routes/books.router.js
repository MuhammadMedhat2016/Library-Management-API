import express from 'express';
import booksController from '../controllers/books.controller.js';
import validateBookAdditionMiddleware from '../middlewares/validateBookAddition.middleware.js';
import validateBookUpdatingMiddleware from '../middlewares/validateBookUpdating.middleware.js';
import validateBookIsbnMiddleware from '../middlewares/validateBookIsbn.middleware.js';
import validateBookSearchMiddleware from '../middlewares/validateBookSearch.middleware.js';
import validateBorrowingOverdueDateMiddleware from '../middlewares/validateBorrowingOverdueDate.middleware.js';
import rateLimiterMiddleware from '../middlewares/rateLimiter.middleware.js';
import lockedForMiddleware from '../middlewares/authorization.middleware.js';
import { USER_TYPES } from '../schemas/user.schema.js';
import authorizedBorrowerOrAdminMiddleware from '../middlewares/authorizedBorrowerOrAdmin.middleware.js';
import authorizedBorrowerMiddleware from '../middlewares/authorizedBorrower.middleware.js';

const router = express.Router({ mergeParams: true });

router.get('/', booksController.getAllBooks);
router.post(
  '/',
  validateBookAdditionMiddleware,
  lockedForMiddleware(USER_TYPES.ADMIN),
  booksController.addBook,
);

router.get(
  '/overdue',
  lockedForMiddleware(USER_TYPES.ADMIN),
  booksController.getOverdueBooks,
);

router.get(
  '/overdue/report',
  rateLimiterMiddleware,
  lockedForMiddleware(USER_TYPES.ADMIN),
  booksController.getOverDueBooksCsvReport,
);

router.post(
  '/search',
  validateBookSearchMiddleware,
  booksController.searchBook,
);

router.patch(
  '/:bookIsbn',
  validateBookIsbnMiddleware,
  validateBookUpdatingMiddleware,
  lockedForMiddleware(USER_TYPES.ADMIN),
  booksController.updateBook,
);
router.delete(
  '/:bookIsbn',
  validateBookIsbnMiddleware,
  lockedForMiddleware(USER_TYPES.ADMIN),
  booksController.deleteBook,
);

router.post(
  '/:bookIsbn/checkout',
  validateBookIsbnMiddleware,
  validateBorrowingOverdueDateMiddleware,
  authorizedBorrowerMiddleware,
  booksController.checkoutBook,
);

router.patch(
  '/:bookIsbn/return/:requestId',
  validateBookIsbnMiddleware,
  lockedForMiddleware(USER_TYPES.BORROWER),
  booksController.returnbBook,
);

export default router;
