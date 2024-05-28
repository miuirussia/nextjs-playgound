import Link from "next/link";

import Form from "@/app/form/form";
import List from "@/app/form/list";

export default async function FormView() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos').then(d => d.json());

  return <div>
    <h1>Test</h1>
    <Link href="/">Back</Link>
    <Form />
    <List value={data} />
  </div>
}
