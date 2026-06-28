import { DataTable } from "@/app/components/ui/data-table";

const products = [
  {
    id: "1",
    name: "Plastic Bag",
    category: "Plastic",
    minimumOrder: "500 units",
    status: "Active",
  },
  {
    id: "2",
    name: "Paper Bag",
    category: "Paper",
    minimumOrder: "300 units",
    status: "Active",
  },
  {
    id: "3",
    name: "Luxury Gift Bag",
    category: "Luxury",
    minimumOrder: "100 units",
    status: "Draft",
  },
];

const columns = [
  { key: "name", label: "Product" },
  { key: "category", label: "Category" },
  { key: "minimumOrder", label: "Minimum Order" },
  { key: "status", label: "Status" },
] as const;

export default function ProductsPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Products</h1>

        <p className="mt-3 text-zinc-500">Manage all Foxbags products.</p>
      </div>

      <DataTable columns={columns} data={products} />
    </div>
  );
}
