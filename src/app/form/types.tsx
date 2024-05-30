import * as y from "yup";

export const FormValues = y.object(
  {
    firstName: y.string().min(10, "First name should not be empty").required(),
    lastName: y.string().min(10, "Last name sould not be empty").required()
  }
).required();
export type FormValues = y.InferType<typeof FormValues>;
