import bcrypt from 'bcrypt';

const hashPassword = (password) => {
  return bcrypt.hash(password, 8);
};


const comparePasswords = async (plainPassword, hashedPassword) => {
  return bcrypt.compare(plainPassword, hashedPassword);
};

export default {
  comparePasswords,
  hashPassword
};
