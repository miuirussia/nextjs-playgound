"use server"
import { z } from 'zod';

export const FormValues = z.object({ firstName: z.string(), lastName: z.string()})
export type FormValues = z.infer<typeof FormValues>;

export async function getFullName(data: FormValues): Promise<string> {

  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("server action", data);

  return `Hello, ${data.firstName} ${data.lastName}!`
}
