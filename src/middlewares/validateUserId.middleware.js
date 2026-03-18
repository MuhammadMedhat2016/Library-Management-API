import * as userValidationSchemas from '../schemas/user.schema.js';
import ApiError from '../utils/ApiError.js';

export default (req, res, next) => {
  const userId = req.params.userId;
  const { error } =
    userValidationSchemas.userIdValidationSchema.validate(userId);
  if (error)
    return next(new ApiError(`Validation Error: ${error.message}`, 400));
  next();
};
