import prismaClient from '../configs/db.js';

const addBorrower = (userData, borrowerData) => {
  return prismaClient.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: userData,
    });
    const borrower = tx.borrower.create({
      data: { id: user.uid, ...borrowerData },
    });
    return {
      ...user,
      ...borrower,
    };
  });
};

const updateBorrower = (borrowerId, userData, borrowerData) => {
  delete userData.password;
  return prismaClient.$transaction(async (tx) => {
    const [user, borrower] = await Promise.all([
      tx.user.update({ where: { uid: borrowerId }, data: userData }),
      tx.borrower.update({
        data: borrowerData,
        where: { id: borrowerId },
      }),
    ]);
    delete user.password;
    delete borrower.id;
    return { ...user, ...borrower };
  });
};
// const deleteBorrower = (borrowerId) => {
//   return prismaClient.$transaction([
//     prismaClient.user.deleteMany({ where: { uid: borrowerId } }),
//     prismaClient.borrower.deleteMany({ where: { id: borrowerId } }),
//   ]);
// };
const deleteBorrower = (borrowerId) => {
  return prismaClient.user.update({
    where: { uid: borrowerId },
    data: { status: 'INACTIVE' },
  });
};

const getAllBorrowers = () => {
  return prismaClient.user.findMany({
    where: { status: 'ACTIVE', user_type: 'BORROWER' },
    include: { borrower: true },
  });
};

const getBorrowerByUserId = (userId) => {
  return prismaClient.borrower.findFirst({ where: { id: userId } });
};

export default {
  addBorrower,
  updateBorrower,
  deleteBorrower,
  getAllBorrowers,
  getBorrowerByUserId,
};
