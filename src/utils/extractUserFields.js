import { userAddidtionValidationSchema } from '../schemas/user.schema.js';

export default (data) => {
  const { value } = userAddidtionValidationSchema.validate(data, {
    stripUnknown: true,
  });
  return value;
};
