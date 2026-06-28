import { Navbar } from "@/app/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <Navbar />

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-20 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
          Foxbags
        </p>

        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
          Custom packaging orders managed in one modern dashboard.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-600">
          Manage products, customers, orders, payments, and delivery status for
          custom packaging businesses.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/dashboard"
            className="rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Open Dashboard
          </a>

          <a
            href="#products"
            className="rounded-full border border-zinc-300 px-8 py-3 font-semibold transition hover:bg-zinc-100"
          >
            View Products
          </a>
        </div>
      </section>
    </main>
  );
}
