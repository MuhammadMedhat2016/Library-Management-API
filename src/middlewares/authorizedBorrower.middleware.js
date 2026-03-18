import { USER_TYPES } from '../schemas/user.schema.js';
import ApiError from '../utils/ApiError.js';

export default (req, res, next) => {
  const user = req.user;
  const requestedId = Number(req.params.userId);

  if (!user) {
    throw new ApiError(
      `Authroization Error: you are not allowed to perform such action`,
      401,
    );
  }

  if (user.user_type === USER_TYPES.BORROWER) {
    console.log(requestedId, user.id);
    if (user.id === requestedId) {
      return next();
    } else {
      throw new ApiError('Forbidden: You cannot access other users data', 403);
    }
  }

  throw new Error('internal server error');
};
