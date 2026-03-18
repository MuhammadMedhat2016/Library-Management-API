import * as bookValidationSchemas from '../schemas/book.schema.js';

export default (req, res, next) => {
  const { error } = bookValidationSchemas.createBookSchema.validate(req.body);
  if (error)
    return next(new ApiError(`Validation Error: ${error.message}`, 400));
  next();
};
