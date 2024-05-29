"use server"
import * as y from "yup";

export const FormValues = y.object({ firstName: y.string().min(1, { message: 'Required' }), lastName: y.string().min(1, { message: 'Required' }) })
export type FormValues = y.InferType<typeof FormValues>;

export async function getFullName(data: FormValues): Promise<string> {

  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("server action", data);

  return `Hello, ${data.firstName} ${data.lastName}!`
}
