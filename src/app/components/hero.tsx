import { Button } from "@/app/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-24 text-center">
        <div className="mb-6 rounded-full border border-orange-200 bg-white px-5 py-2 text-sm font-semibold text-orange-600 shadow-sm">
          Modern dashboard for custom packaging
        </div>

        <h1 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight text-zinc-900 md:text-7xl">
          Manage packaging orders from quote to delivery.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-600">
          Foxbags Dashboard helps packaging businesses manage products,
          customers, custom orders, payments, production status, and deliveries.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a href="/dashboard">
            <Button>Open Dashboard</Button>
          </a>

          <a href="#products">
            <Button variant="secondary">View Products</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
