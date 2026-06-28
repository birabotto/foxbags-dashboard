import { SectionTitle } from "@/app/components/section-title";

export function About() {
  return (
    <section id="about" className="bg-zinc-100 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          label="About"
          title="Built for real business operations"
          description="This project simulates a real SaaS-style admin platform with authentication, database, payments, dashboard analytics, and deployment."
        />

        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold">Orders</h3>
            <p className="mt-4 text-zinc-600">
              Track every order from quote request to production and delivery.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold">Payments</h3>
            <p className="mt-4 text-zinc-600">
              Use Stripe checkout to receive deposits and confirm payments.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-bold">Dashboard</h3>
            <p className="mt-4 text-zinc-600">
              View revenue, customers, products, and order status in one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
