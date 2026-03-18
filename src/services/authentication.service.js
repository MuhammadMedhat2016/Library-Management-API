import jwt from 'jsonwebtoken';
import borrowerService from './borrower.service.js';
import ApiError from '../utils/ApiError.js';
import extractUserFields from '../utils/extractUserFields.js';
import extractBorrowerFields from '../utils/extractBorrowerFields.js';
import userService from './user.service.js';
import adminService from './admin.service.js';
import passwordsManagement from '../utils/passwordsManagement.js';

const login = async (userCreds) => {
  const { email, password } = userCreds;

  let user = await userService.getUserByEmail(email);
  if (!user) {
    throw new ApiError(`Invalid Credentials, please try again!!`, 401);
  }

  const hasedSaltedPassword = user.password;
  const compareResult = passwordsManagement.comparePasswords(
    password,
    hasedSaltedPassword,
  );
  if (compareResult === false) {
    throw new ApiError(`Invalid Credentials, please try again!!`, 401);
  }

  if (user.user_type === 'BORROWER') {
    const borrower = await borrowerService.getBorrowerByUserId(user.uid);
    user = { ...user, ...borrower };
  } else if (user.user_type === 'ADMIN') {
    const admin = await adminService.getAdminByUserId(user.uid);
    user = { ...user, ...admin };
  }

  delete user.password;

  const JWT_SECRET = process.env.JWT_SECRET;
  const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
  const token = jwt.sign(user, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
  return token;
};

const signup = async (rawData) => {
  const userData = extractUserFields(rawData);
  const borrowerData = extractBorrowerFields(rawData);
  const hasedSaltedPassword = await passwordsManagement.hashPassword(
    userData.password,
  );
  userData.password = hasedSaltedPassword;
  return borrowerService.addBorrower(userData, borrowerData);
};

export default {
  login,
  signup,
};
