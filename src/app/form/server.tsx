"use server"

export interface FormValues {
  firstName: string;
  lastName: string;
}

export async function getFullName(data: FormValues): Promise<string> {

  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("server action", data);

  return `Hello, ${data.firstName} ${data.lastName}!`
}
