import booksService from '../services/books.service.js';
import csvHandler from '../utils/generateCsvFile.js';

const getAllBooks = async (req, res, next) => {
  const books = await booksService.getAllBooks();
  res.json({
    message: 'books records has been retrieved successfully',
    status: 'success',
    data: books,
  });
};

const addBook = async (req, res, next) => {
  const book = await booksService.addBook(req.body);
  res.status(201).json({
    message: 'book record has been added/updated successfully',
    status: 'success',
    data: book,
  });
};

const updateBook = async (req, res, next) => {
  const bookIsbn = req.params.bookIsbn;
  const book = await booksService.updateBook(bookIsbn, req.body);
  res.status(200).json({
    message: 'a book data has been updated successfully',
    status: 'success',
    data: book,
  });
};

const deleteBook = async (req, res, next) => {
  const bookIsbn = req.params.bookIsbn;
  await booksService.deleteBook(bookIsbn);
  res.status(204).json();
};

const searchBook = async (req, res, next) => {
  const books = await booksService.searchBook(req.body);
  res.json({
    message: 'books retrieved successfully',
    status: 'success',
    data: books,
  });
};

const checkoutBook = async (req, res) => {
  const borrowerId = Number(req.params.userId);
  const bookIsbn = req.params.bookIsbn;
  const borrowRequest = await booksService.checkoutBook(
    borrowerId,
    bookIsbn,
    new Date(req.body.due_date),
  );
  res.status(201).json({
    message: `borrower with id ${borrowerId} has borrowed book with isbn ${bookIsbn}`,
    status: 'success',
    data: borrowRequest,
  });
};

const returnbBook = async (req, res) => {
  const requestId = Number(req.params.requestId);
  const bookIsbn = req.params.bookIsbn;
  const borrowerId = Number(req.params.borrowerId);
  const borrowRequest = await booksService.returnBook(
    borrowerId,
    bookIsbn,
    requestId,
  );
  if (borrowRequest.count === 0) {
    res.status(400).json({
      message:
        'borrow request updating failure due to incorrect data or this request already closed',
      status: 'fail',
      data: null,
    });
  }
  res.status(200).json({
    message: `borrower with id ${borrowerId} has returned book with isbn ${bookIsbn}`,
    status: 'success',
    data: null,
  });
};

const getOverdueBooks = async (req, res) => {
  const overdueBooks = await booksService.getOverdueBooks();
  res.status(200).json({
    message: 'overdue dates books has been retrieved successfully',
    status: 'success',
    data: overdueBooks,
  });
};
const getOverDueBooksCsvReport = async (req, res) => {
  const csvData = await booksService.getOverDueBooksCsvReportData();
  res.setHeader('content-type', 'text/csv');
  const headers = csvHandler.extractCsvHeaders(csvData);
  const stringifier = csvHandler.generateCsvStringifier(headers);
  stringifier.pipe(res);
  csvData.forEach((row) => stringifier.write(row));
  stringifier.end();
};

export default {
  getAllBooks,
  addBook,
  updateBook,
  deleteBook,
  searchBook,
  checkoutBook,
  returnbBook,
  getOverdueBooks,
  getOverDueBooksCsvReport,
};
