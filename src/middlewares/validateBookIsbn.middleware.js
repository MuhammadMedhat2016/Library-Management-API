import * as bookValidationSchemas from '../schemas/book.schema.js';
import ApiError from '../utils/ApiError.js';

export default (req, res, next) => {
  const bookIsbn = req.params.bookIsbn;
  console.log(bookIsbn);
  const { error } = bookValidationSchemas.isbnSchema.validate(bookIsbn);
  if (error)
    return next(new ApiError(`Validation Error: ${error.message}`, 400));
  next();
};
