import prismaClient from '../configs/db.js';

const getBorrowingsReportData = () => {
  const now = new Date();
  const lastMonth = new Date(
    now.getFullYear(),
    now.getMonth() - 1,
    now.getDate(),
  )
    .toISOString()
    .split('T')[0];

  const tomorrow = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
  )
    .toISOString()
    .split('T')[0];
  return prismaClient.borrowRequests.findMany({
    where: {
      request_date: { lt: new Date(tomorrow), gte: new Date(lastMonth) },
    },
  });
};

const getAllActiveBorrowings = (borrowerId) => {
  return prismaClient.borrowRequests.findMany({
    where: { bid: borrowerId, returned_at: null },
  });
};

export default {
  getBorrowingsReportData,
  getAllActiveBorrowings,
};
