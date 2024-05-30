"use server";
import { FormValues } from "@/app/form/types";
import "server-only";

export async function getFullName(data: FormValues): Promise<string> {

  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("server action", data);

  return `Hello, ${data.firstName} ${data.lastName}!`;
}
