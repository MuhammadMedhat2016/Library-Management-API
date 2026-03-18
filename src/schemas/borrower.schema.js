import Joi from 'joi';
import {
  userAddidtionValidationSchema,
  userUpdatingValidationSchema,
} from './user.schema.js';

export const borrowerSchema = Joi.object({
  membership_date: Joi.date(),
  expiry_date: Joi.date(),
});

export const borrowerAdditionValidationSchema =
  userAddidtionValidationSchema.concat(borrowerSchema);

export const borrowerUpdatingValidationSchema =
  userUpdatingValidationSchema.concat(borrowerSchema);
