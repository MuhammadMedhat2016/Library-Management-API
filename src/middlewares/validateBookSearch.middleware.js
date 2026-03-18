import * as bookValidationSchemas from '../schemas/book.schema.js';
import ApiError from '../utils/ApiError.js';

export default (req, res, next) => {
  const { error } = bookValidationSchemas.searchBookSchema.validate(req.body);
  if (error)
    return next(new ApiError(`Validation Error: ${error.message}`, 400));
  next();
};
