import * as loginValidationSchemas from '../schemas/login.schema.js';

export default (req, res, next) => {
  const { error } = loginValidationSchemas.loginSchema.validate(req.body);
  if (error) return next(error);
  next();
};
