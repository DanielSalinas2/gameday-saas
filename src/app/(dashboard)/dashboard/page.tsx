export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Dashboard
        </h1>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Manage your sports leagues and teams
        </p>
      </div>

      <div className="rounded-lg border border-zinc-200 bg-white p-12 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-md">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
            <svg
              className="h-8 w-8 text-zinc-400 dark:text-zinc-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            No leagues yet
          </h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            You haven&apos;t created or joined any leagues yet. League management
            functionality will be available in the next phase of development.
          </p>
          <div className="mt-6 rounded-md bg-zinc-50 p-4 dark:bg-zinc-800">
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              <strong>Coming soon:</strong> Create leagues, invite members, manage
              teams, schedule games, and track standings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
