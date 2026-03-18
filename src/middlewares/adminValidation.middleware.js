import * as adminValidationSchemas from '../schemas/admin.schema.js';
import ApiError from '../utils/ApiError.js';

export default (req, res, next) => {
  const { error } =
    adminValidationSchemas.AdminAdditionValidationSchema.validate(req.body);
  if (error)
    return next(new ApiError(`Validation Error: ${error.message}`, 400));
  next();
};
