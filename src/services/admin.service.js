import prismaClient from '../configs/db.js';
import passwordsManagement from '../utils/passwordsManagement.js';

const getAdminByUserId = (userId) => {
  return prismaClient.admin.findFirst({ where: { id: userId } });
};

const addAdmin = async (userData, adminData) => {
  userData.user_type = 'ADMIN';
  userData.password = await passwordsManagement.hashPassword(userData.password);
  return prismaClient.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: userData,
    });
    const borrower = tx.admin.create({
      data: { id: user.uid, ...adminData },
    });
    return {
      ...user,
      ...borrower,
    };
  });
};

export default {
  getAdminByUserId,
  addAdmin,
};
