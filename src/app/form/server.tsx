"use server"

export interface FormValues {
  firstName: string;
  lastName: string;
}

export async function getFullName(data: FormValues): Promise<void> {

  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("server action", data);
}
