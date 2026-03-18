import Joi from 'joi';

export const createBookSchema = Joi.object({
  title: Joi.string().max(128).min(5).required().messages({
    'string.max': 'title must be at most 128 chars',
    'string.min': 'title must be at least 10 chars',
    'any.required': 'book title is required',
  }),
  author: Joi.string().min(10).max(128).messages({
    'string.max': 'author name must be at most 128 chars',
    'string.min': 'author name must be at least 10 chars',
    'any.required': 'author name is required',
  }),
  isbn: Joi.string().length(13).pattern(/^\d+$/).required().messages({
    'string.length': 'isbn must be exactly 13 numbers',
    'string.pattern': 'isbn must be a numeric string',
    'any.required': 'isbn is a required field',
  }),
  location: Joi.string().max(128).messages({
    'string.max': 'location must be at most 128 chars',
  }),
  available_qty: Joi.number().min(0).messages({
    'number.min': 'available books quantity must not be negatives',
  }),
});

export const updateBookSchema = Joi.object({
  title: Joi.string().max(128).min(5).messages({
    'string.max': 'title must be at most 128 chars',
    'string.min': 'title must be at least 10 chars',
    'any.required': 'book title is required',
  }),
  author: Joi.string().min(10).max(128).messages({
    'string.max': 'author name must be at most 128 chars',
    'string.min': 'author name must be at least 10 chars',
    'any.required': 'author name is required',
  }),
  isbn: Joi.forbidden().messages({
    'any.forbidden': 'this field should not exist while updating books',
  }),
  location: Joi.string().max(128).messages({
    'string.max': 'location must be at most 128 chars',
  }),
  available_qty: Joi.number().min(0).messages({
    'number.min': 'available books quantity must not be negatives',
  }),
});

export const isbnSchema = Joi.string()
  .length(13)
  .pattern(/^\d+$/)
  .required()
  .messages({
    'string.length': 'book isbn must be exatly 13 chars long',
    'any.required': 'book isbn is required',
  });

export const searchBookSchema = Joi.object({
  isbn: Joi.string().length(13).pattern(/^\d+$/).messages({
    'string.length': 'book isbn must be exatly 13 chars long',
  }),
  title: Joi.string().max(128).min(5).messages({
    'string.max': 'title must be at most 128 chars',
    'string.min': 'title must be at least 10 chars',
    'any.required': 'book title is required',
  }),
  author: Joi.string().min(10).max(128).messages({
    'string.max': 'author name must be at most 128 chars',
    'string.min': 'author name must be at least 10 chars',
    'any.required': 'author name is required',
  }),
});
