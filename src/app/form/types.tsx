import * as y from "yup";

export const FormValues = y.object({ firstName: y.string().min(1, { message: 'Required' }), lastName: y.string().min(1, { message: 'Required' }) })
export type FormValues = y.InferType<typeof FormValues>;
