import express from 'express';
import adminController from '../controllers/admin.controller.js';
import adminValidationMiddleware from '../middlewares/adminValidation.middleware.js';
import lockedForMiddleware from '../middlewares/authorization.middleware.js';
import { USER_TYPES } from '../schemas/user.schema.js';
const router = express.Router();

router.post('/', adminValidationMiddleware, adminController.addAdmin);

export default router;
