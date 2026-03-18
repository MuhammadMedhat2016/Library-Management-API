import { adminSchema } from '../schemas/admin.schema.js';

export default (data) => {
  const { value } = adminSchema.validate(data, {
    stripUnknown: true,
  });
  return value;
};
