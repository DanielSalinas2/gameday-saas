export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">GameDay</h1>
        <p className="text-zinc-500">
          Sports League Management Platform
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="/login"
            className="rounded bg-black px-4 py-2 text-white"
          >
            Login
          </a>
          <a
            href="/register"
            className="rounded border px-4 py-2"
          >
            Register
          </a>
        </div>
      </div>
    </main>
  );
}