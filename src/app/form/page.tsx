import Link from "next/link";
import { unstable_after as after } from "next/server";
import { z } from "zod";

import Form from "@/app/form/form";
import List from "@/app/form/list";

const Todos = z.array(z.object({ completed: z.boolean(), id: z.number(), title: z.string(), userId: z.number() }))
type Todos = z.infer<typeof Todos>

export default async function FormView() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos').then(d => d.json()).then(d => Todos.parseAsync(d));

  after(() => {
    console.log('after');
  })

  return <div>
    <h1>Test</h1>
    <Link href="/">Back</Link>
    <Form />
    <List value={data} />
  </div>
}
