"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { getFullName } from "@/app/form/server";
import { FormValues } from "@/app/form/types";

export default function Form() {
  const { register, handleSubmit, reset, formState: { errors, isValid, isSubmitting } } = useForm<FormValues>(
    {
      mode: "all",
      defaultValues: { firstName: "", lastName: "" },
      resolver: zodResolver(FormValues)
    }
  );

  const onSubmit = async (data: FormValues) => {
    const result = await getFullName(data);
    console.log(result);
    reset();
  };

  return <form onSubmit={handleSubmit(onSubmit)} className="m-1">
    <input
      {...register("firstName")}
      className={
        "mb-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 " +
        "focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white " +
        "dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      }
      placeholder="First name"
    />
    {errors.firstName ? <p className="text-red-500">{errors.firstName.message}</p> : null}
    <input
      {...register("lastName")}
      className={
        "mb-1 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 " +
        "focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white " +
        "dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      }
      placeholder="Last name"
    />
    {errors.lastName ? <p className="text-red-500">{errors.lastName.message}</p> : null}
    <button
      type="submit"
      className={
        "bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-4 " +
        "mb-2 me-2 rounded-full px-5 py-2.5 text-sm font-medium focus:ring-gray-300 " +
        "dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 " +
        (isValid ? "dark:bg-green-700 " : "dark:bg-red-700 ") +
        (isSubmitting ? "opacity-50" : "")
      }
      disabled={!isValid || isSubmitting}
    >
      Send
    </button>
  </form>;
}
