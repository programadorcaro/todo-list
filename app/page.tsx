import prisma from "@/lib/db";
import { addTask } from "@/server/actions/tasks";

export default async function Home() {
  const tasks = await prisma.task.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="text-center">
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>

      <form action={addTask}>
        <input name="title" type="text" className="text-black" />
        <button type="submit">create</button>
      </form>
    </main>
  );
}
