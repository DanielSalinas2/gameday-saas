export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950">
      <main className="flex flex-col items-center gap-8 text-center px-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            GameDay
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Sports League Management Platform
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-zinc-500 dark:text-zinc-500">
          <p>Phase 1: Project Foundation</p>
          <p className="text-green-600 dark:text-green-400">Setup complete</p>
        </div>

        <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-6 text-left dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-50">
            Next Steps
          </h2>
          <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>1. Configure your database in <code className="rounded bg-zinc-100 px-1.5 py-0.5 dark:bg-zinc-800">.env</code></li>
            <li>2. Run <code className="rounded bg-zinc-100 px-1.5 py-0.5 dark:bg-zinc-800">npx prisma migrate dev</code></li>
            <li>3. Proceed to Phase 2: Authentication</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
