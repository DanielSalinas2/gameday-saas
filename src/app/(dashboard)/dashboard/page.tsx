import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { LogoutButton } from "@/components/logout-button";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            GameDay
          </h1>
          <LogoutButton />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            Welcome back{session.user.name ? `, ${session.user.name}` : ""}!
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {session.user.email}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Phase 2 Complete
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Authentication system is now working!
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>✅ User registration</li>
              <li>✅ User login</li>
              <li>✅ Session management</li>
              <li>✅ Protected routes</li>
            </ul>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Coming Next
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Phase 3: League Management
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>• Create leagues</li>
              <li>• Multi-tenant isolation</li>
              <li>• League settings</li>
              <li>• Role-based access</li>
            </ul>
          </div>

          <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              Your Account
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Account details
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <span className="font-medium">ID:</span>{" "}
                <span className="font-mono text-xs">{session.user.id}</span>
              </li>
              <li>
                <span className="font-medium">Email:</span> {session.user.email}
              </li>
              {session.user.name && (
                <li>
                  <span className="font-medium">Name:</span> {session.user.name}
                </li>
              )}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
