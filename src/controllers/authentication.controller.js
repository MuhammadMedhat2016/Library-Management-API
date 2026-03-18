import authenticationService from '../services/authentication.service.js';

const login = async (req, res) => {
  const token = await authenticationService.login(req.body);
  res.status(200).json({
    message: "you've successully logged-in",
    status: 'success',
    data: token,
  });
};

const signup = async (req, res) => {
  const borrower = await authenticationService.signup(req.body);
  res.status(201).json({
    message: 'a borrower has been added successfully',
    status: 'success',
    data: borrower,
  });
};


export default {
  login,
  signup,
};
