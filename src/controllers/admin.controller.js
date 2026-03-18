import adminService from '../services/admin.service.js';
import extractAdminFields from '../utils/extractAdminFields.js';
import extractUserFields from '../utils/extractUserFields.js';

const addAdmin = async (req, res) => {
  const userData = extractUserFields(req.body);
  const adminData = extractAdminFields(req.body);
  const admin = await adminService.addAdmin(userData, adminData);
  res.status(201).json({
    message: 'admin has been added sucessfully',
    status: 'success',
    data: admin,
  });
};

export default {
  addAdmin,
};
