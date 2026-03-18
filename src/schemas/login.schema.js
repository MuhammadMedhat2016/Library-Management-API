import Joi from 'joi';

export const loginSchema = Joi.object({
  email: Joi.string().min(5).max(128).required().messages({
    'string.min': 'invalid Creds',
    'string.max': 'invalid Creds',
    'any.required': 'email field is mandatory',
  }),
  password: Joi.string().min(5).max(128).required().messages({
    'string.min': 'invalid Creds',
    'string.max': 'invalid Creds',
    'any.required': 'password field is mandatory',
  }),
});
