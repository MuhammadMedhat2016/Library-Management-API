import ApiError from '../utils/ApiError.js';

export default (...Roles) => {
  return (req, res, next) => {
    if (Roles.includes(req.user.user_type)) {
      next();
    } else {
      next(
        new ApiError(
          `Authorization Error, you are not allowed to perform such action`,
        ),
        403,
      );
    }
  };
};
