import { BarChart3, CreditCard, ClipboardList } from "lucide-react";

import { SectionTitle } from "@/app/components/section-title";
import { Card } from "@/app/components/ui/card";

const features = [
  {
    title: "Orders",
    description:
      "Track every order from quote request to production and delivery.",
    icon: ClipboardList,
  },
  {
    title: "Payments",
    description:
      "Use Stripe checkout to receive deposits and confirm payments.",
    icon: CreditCard,
  },
  {
    title: "Dashboard",
    description:
      "View revenue, customers, products, and order status in one place.",
    icon: BarChart3,
  },
];

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
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card key={feature.title}>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-bold">{feature.title}</h3>

                <p className="mt-4 text-zinc-600">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
