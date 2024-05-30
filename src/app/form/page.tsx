import Link from "next/link";
import Image from "next/image";
import { z } from "zod";

import Form from "@/app/form/form";
import List from "@/app/form/list";

const Todos = z.array(
  z.object({
    completed: z.boolean(),
    id: z.number(),
    title: z.string(),
    userId: z.number()
  })
);
type Todos = z.infer<typeof Todos>

export default async function FormView() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos")
    .then(d => d.json())
    .then(d => Todos.parseAsync(d));

  return <div>
    <Image
      src="/vercel.svg"
      alt="Vercel Logo"
      className="dark:invert w-[100px] h-[24px]"
      width={100}
      height={24}
      priority
    />
    <h1>Test</h1>
    <Link href="/">Back</Link>
    <Form />
    <List value={data} />
  </div>;
}
