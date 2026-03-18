import * as borrowerValidationSchemas from '../schemas/borrower.schema.js';
import ApiError from '../utils/ApiError.js';

export default (req, res, next) => {
  const { error } =
    borrowerValidationSchemas.borrowerAdditionValidationSchema.validate(
      req.body,
    );
  if (error)
    return next(new ApiError(`Validation Error: ${error.message}`, 400));
  next();
};
