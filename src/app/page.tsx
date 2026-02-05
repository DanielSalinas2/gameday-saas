import Link from "next/link";
import { auth } from "@/lib/auth";

export default async function Home() {
  const session = await auth();

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
          <p>Phase 2: Authentication System</p>
          <p className="text-green-600 dark:text-green-400">Complete</p>
        </div>

        <div className="flex gap-4">
          {session ? (
            <Link
              href="/dashboard"
              className="rounded-md bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Go to Dashboard
            </Link>
          ) : (
            <>
              <Link
                href="/register"
                className="rounded-md bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Get Started
              </Link>
              <Link
                href="/login"
                className="rounded-md border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
              >
                Sign In
              </Link>
            </>
          )}
        </div>

        <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-6 text-left dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-50">
            Features
          </h2>
          <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li>✅ Secure user authentication</li>
            <li>✅ Protected dashboard routes</li>
            <li>✅ Session management with JWT</li>
            <li>• Multi-tenant league management (coming next)</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
