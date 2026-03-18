import prismaClient from '../configs/db.js';
import ApiError from '../utils/ApiError.js';

const getAllBooks = () => {
  return prismaClient.book.findMany();
};

const addBook = (bookData) => {
  return prismaClient.book.upsert({
    where: {
      isbn: bookData.isbn,
    },
    create: {
      ...bookData,
    },
    update: {
      available_qty: {
        increment: bookData.available_qty,
      },
    },
  });
};

const updateBook = (bookIsbn, bookData) => {
  return prismaClient.book.update({
    where: {
      isbn: bookIsbn,
    },
    data: bookData,
  });
};

const deleteBook = (bookIsbn) => {
  return prismaClient.book.deleteMany({
    where: { isbn: bookIsbn },
  });
};

const searchBook = (searchCriteria) => {
  return prismaClient.book.findMany({
    where: {
      ...searchCriteria,
    },
  });
};

const checkoutBook = (borrowerId, bookIsbn, dueDate) => {
  return prismaClient.$transaction(async (tx) => {
    const updateResult = await tx.book.updateMany({
      where: { isbn: bookIsbn, available_qty: { gt: 0 } },
      data: { available_qty: { decrement: 1 } },
    });
    if (updateResult.count === 0) {
      throw new ApiError(`Not enough books with ISBN ${bookIsbn}`, 400);
    }
    return await tx.borrowRequests.create({
      data: { bid: borrowerId, isbn: bookIsbn, due_date: dueDate },
    });
  });
};

const returnBook = (borrowerId, bookIsbn, requestId) => {
  return prismaClient.borrowRequests.updateMany({
    data: { returned_at: new Date() },
    where: {
      request_id: requestId,
      returned_at: null,
      isbn: bookIsbn,
      bid: borrowerId,
    },
  });
};

const getOverdueBooks = () => {
  return prismaClient.borrowRequests.findMany({
    where: { due_date: { lt: new Date() } },
  });
};

const getOverDueBooksCsvReportData = () => {
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
    where: { due_date: { lt: new Date(tomorrow), gte: new Date(lastMonth) } },
  });
};

export default {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
  searchBook,
  checkoutBook,
  returnBook,
  getOverdueBooks,
  getOverDueBooksCsvReportData,
};
