"use client"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { FormValues, getFullName } from "@/app/form/server";

export default function Form() {
  const { register, handleSubmit, reset, formState } = useForm<FormValues>({ resolver: zodResolver(FormValues) });

  const onSubmit = async (data: FormValues) => {
    const result = await getFullName(data);
    console.log(result);
    reset();
  };

  return <form onSubmit={handleSubmit(onSubmit)} className="m-1">
    <input {...register('firstName')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-1" placeholder="First name" />
    <input {...register('lastName')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-1" placeholder="Last name" />
    <button
      type="submit"
      className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
      disabled={!formState.isValid}
    >
      Send
    </button>
  </form>
}
