export function Products() {
  return (
    <section id="products" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-12 text-center text-4xl font-bold">Products</h2>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="rounded-xl border p-8 shadow-sm">
          <h3 className="text-xl font-bold">Plastic Bags</h3>

          <p className="mt-4 text-zinc-600">
            High-quality custom plastic bags for businesses.
          </p>
        </div>

        <div className="rounded-xl border p-8 shadow-sm">
          <h3 className="text-xl font-bold">Paper Bags</h3>

          <p className="mt-4 text-zinc-600">
            Eco-friendly packaging solutions.
          </p>
        </div>

        <div className="rounded-xl border p-8 shadow-sm">
          <h3 className="text-xl font-bold">Luxury Packaging</h3>

          <p className="mt-4 text-zinc-600">
            Premium packaging for luxury brands.
          </p>
        </div>
      </div>
    </section>
  );
}
