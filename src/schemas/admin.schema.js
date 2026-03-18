import Joi from 'joi';
import {
  userAddidtionValidationSchema,
  userUpdatingValidationSchema,
} from './user.schema.js';

export const adminSchema = Joi.object({
  access_level: Joi.number().integer().required(),
});

export const AdminAdditionValidationSchema =
  userAddidtionValidationSchema.concat(adminSchema);

export const adminUpdatingValidationSchema =
  userUpdatingValidationSchema.concat(adminSchema);
