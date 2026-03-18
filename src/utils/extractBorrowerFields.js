import { borrowerSchema } from '../schemas/borrower.schema.js';

export default (data) => {
  const { value } = borrowerSchema.validate(data, {
    stripUnknown: true,
  });
  return value;
};
