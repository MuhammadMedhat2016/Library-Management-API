import borrowerService from '../services/borrower.service.js';
import extractBorrowerFields from '../utils/extractBorrowerFields.js';
import extractUserFields from '../utils/extractUserFields.js';
import flattenObject from '../utils/flattenObject.js';

const updateBorrower = async (req, res) => {
  const borrowerId = Number(req.params.userId);
  const userData = extractUserFields(req.body);
  const borrowerData = extractBorrowerFields(req.body);
  const borrower = await borrowerService.updateBorrower(
    borrowerId,
    userData,
    borrowerData,
  );
  res.status(200).json({
    message: 'a borrower has been updated successfully',
    status: 'success',
    data: borrower,
  });
};
const deleteBorrower = async (req, res) => {
  const borrowerId = Number(req.params.userId);
  await borrowerService.deleteBorrower(borrowerId);
  res.status(204).json();
};

const getAllBorrowers = async (req, res) => {
  let borrowers = await borrowerService.getAllBorrowers();
  borrowers = borrowers.map((borrower) => {
    const flattenedBorrower = flattenObject(borrower);
    delete flattenedBorrower.password;
    delete flattenedBorrower.id;
    return flattenedBorrower;
  });
  res.status(200).json({
    message: 'borrowers data has been retrieved successfully',
    status: 'success',
    data: borrowers,
  });
};

export default {
  updateBorrower,
  deleteBorrower,
  getAllBorrowers,
};
