import { SectionTitle } from "@/app/components/section-title";
import { Card } from "@/app/components/ui/card";

const products = [
  {
    name: "Plastic Bags",
    description: "Custom plastic bags for retail stores, events, and brands.",
  },
  {
    name: "Paper Bags",
    description: "Eco-friendly paper packaging with custom sizes and printing.",
  },
  {
    name: "Luxury Packaging",
    description: "Premium packaging solutions for boutique and luxury brands.",
  },
];

export function Products() {
  return (
    <section id="products" className="mx-auto max-w-6xl px-6 py-24">
      <SectionTitle
        label="Products"
        title="Packaging solutions for every business"
        description="Create and manage products with sizes, colors, quantities, prices, and production details."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {products.map((product) => (
          <Card key={product.name}>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-2xl">
              📦
            </div>

            <h3 className="text-xl font-bold">{product.name}</h3>

            <p className="mt-4 text-zinc-600">{product.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
