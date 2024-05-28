"use client"
import { useForm } from "react-hook-form";
import Link from "next/link";

import { FormValues, getFullName } from "@/app/form/server";

export default function Form() {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const result = await getFullName(data);
    console.log(result);
  };

  return <div>
    <h1>Test</h1>
    <Link href="/">Back</Link>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="First name" />
      <input {...register('lastName')} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Last name" />
      <button type="submit">Send</button>
    </form>
  </div>
}
