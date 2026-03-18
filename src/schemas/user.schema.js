import Joi from 'joi';

export const userAddidtionValidationSchema = Joi.object({
  email: Joi.string().min(5).max(128).required().messages({
    'string.min': 'email field must be at least 5 chars long',
    'string.max': 'email field must be at most 128 chars long',
    'any.required': 'email field is mandatory',
  }),
  name: Joi.string().min(5).max(128).required().messages({
    'string.min': 'name field must be at least 5 chars long',
    'string.max': 'name field must be at most 128 chars long',
    'any.required': 'name field is mandatory',
  }),
  password: Joi.string().min(5).max(128).required().messages({
    'string.min': 'password field must be at least 5 chars long',
    'string.max': 'password field must be at most 128 chars long',
    'any.required': 'password field is mandatory',
  }),
  user_type: Joi.allow('ADMIN', 'BORROWER'),
  status: Joi.allow('ACTIVE', 'INACTIVE'),
  registeration_date: Joi.date(),
});

export const userUpdatingValidationSchema = Joi.object({
  name: Joi.string().min(5).max(128).messages({
    'string.min': 'name field must be at least 5 chars long',
    'string.max': 'name field must be at most 128 chars long',
  }),
  status: Joi.string().allow('ACTIVE', 'INACTIVE'),
  registeration_date: Joi.date(),
});

export const userIdValidationSchema = Joi.number().integer().min(1).messages({
  'number.base': 'user id must be a number',
  'number.integer': 'user id must be an integer',
  'number.min': 'user id is a positive number',
});

export const USER_TYPES = {
  ADMIN: 'ADMIN',
  BORROWER: 'BORROWER',
};
