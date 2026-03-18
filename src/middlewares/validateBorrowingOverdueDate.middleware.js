import * as borrowingValidationSchemas from '../schemas/borrowing.schema.js';
import ApiError from '../utils/ApiError.js';

export default (req, res, next) => {
  const { error } = borrowingValidationSchemas.dueDateSchema.validate(
    new Date(req.body.due_date),
  );
  if (error)
    return next(new ApiError(`Validation Error: ${error.message}`, 400));
  next();
};
