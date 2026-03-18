import jwt from 'jsonwebtoken';
import ApiError from '../utils/ApiError.js';

export default (req, res, next) => {
  const bearerToken = req.headers['authorization'];
  if (!bearerToken) {
    throw new ApiError('you are not logged-in, please login to continue', 401);
  }
  const token = bearerToken.split(' ')[1];
  if (!token) {
    throw new ApiError('you are not logged-in, please login to continue', 401);
  }
  const jwtSecret = process.env.JWT_SECRET;
  try {
    const payload = jwt.verify(token, jwtSecret);
    req.user = payload;
    next();
  } catch (error) {
    if (error.message === 'invalid signature') {
      throw new ApiError(
        'token is not valid, please login again to continue',
        401,
      );
    } else if (error.message === 'jwt expired') {
      throw new ApiError(
        'token is expired, please login again to continue',
        401,
      );
    }
    throw new Error('internal server error');
  }
};
