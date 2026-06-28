export function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
        Foxbags Dashboard
      </p>

      <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
        Manage your packaging business from one place.
      </h1>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-600">
        A complete platform to manage customers, products, custom orders,
        payments, production tracking and shipping.
      </p>

      <div className="mt-12 flex gap-5">
        <button className="rounded-lg bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600">
          Get Started
        </button>

        <button className="rounded-lg border border-zinc-300 px-8 py-4 font-semibold hover:bg-zinc-100">
          Learn More
        </button>
      </div>
    </section>
  );
}
