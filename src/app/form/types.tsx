import * as y from "yup";

export const FormValues = y.object(
  {
    firstName: y.string().required('First name should not be empty'),
    lastName: y.string().required('Last name sould not be empty')
  }
).required();
export type FormValues = y.InferType<typeof FormValues>;
