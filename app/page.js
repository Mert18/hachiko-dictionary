import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-6xl font-bold text-center">
          Welcome to Hachiko Dictionary
        </h1>
        <Link href="/authentication">Go to App</Link>
      </div>
    </main>
  );
}
