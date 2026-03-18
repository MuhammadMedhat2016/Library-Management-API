import prismaClient from '../configs/db.js';

const getUserByEmail = (email) => {
  return prismaClient.user.findFirst({ where: { email } });
};

export default {
  getUserByEmail,
};
