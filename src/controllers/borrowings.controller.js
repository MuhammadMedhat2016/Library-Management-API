import csvHandler from '../utils/generateCsvFile.js';

import borrowingsService from '../services/borrowings.service.js';

const getBorrowingsReport = async (req, res) => {
  const csvData = await borrowingsService.getBorrowingsReportData();
  const headers = csvHandler.extractCsvHeaders(csvData);
  const stringifier = csvHandler.generateCsvStringifier(headers);
  res.setHeader('content-type', 'text/csv');
  stringifier.pipe(res);
  csvData.forEach((row) => stringifier.write(row));
  stringifier.end();
};

const getAllActiveBorrowings = async (req, res) => {
  const borrowerId = Number(req.params.userId);
  const borrowings = await borrowingsService.getAllActiveBorrowings(borrowerId);
  res.status(200).json({
    message: 'borrowing has been retrived successfully',
    status: 'success',
    data: borrowings,
  });
};

export default {
  getBorrowingsReport,
  getAllActiveBorrowings,
};
