import * as y from "yup";

export const FormValues = y.object({ firstName: y.string().required(), lastName: y.string().required() }).required();
export type FormValues = y.InferType<typeof FormValues>;
