import Joi from 'joi';

export const dueDateSchema = Joi.date().greater('now');
