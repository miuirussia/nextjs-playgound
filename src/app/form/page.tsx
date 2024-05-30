import Link from "next/link";
import Image from "next/image";
import { unstable_after as after } from "next/server";
import * as y from "yup";

import Form from "@/app/form/form";
import List from "@/app/form/list";

const Todos = y.array(
  y.object({
    completed: y.boolean().required(),
    id: y.number().required(),
    title: y.string().required(),
    userId: y.number().required()
  })
).required()
type Todos = y.InferType<typeof Todos>

export default async function FormView() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    .then(d => d.json())
    .then(d => Todos.validate(d));

  after(() => {
    console.log('after');
  })

  return <div>
    <Image
      src="/vercel.svg"
      alt="Vercel Logo"
      className="dark:invert"
      width={100}
      height={24}
      priority
    />
    <h1>Test</h1>
    <Link href="/">Back</Link>
    <Form />
    <List value={data} />
  </div>
}
