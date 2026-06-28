import { Edit, Plus, Trash } from "lucide-react";

import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { DataTable } from "@/app/components/ui/data-table";
import { PageHeader } from "@/app/components/dashboard/page-header";

type Product = {
  id: string;
  name: string;
  category: string;
  minimumOrder: string;
  status: "Active" | "Draft";
};

const products: Product[] = [
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
  {
    key: "name",
    label: "Product",
  },
  {
    key: "category",
    label: "Category",
  },
  {
    key: "minimumOrder",
    label: "Minimum Order",
  },
  {
    key: "status",
    label: "Status",
    render: (value: Product[keyof Product]) => (
      <Badge variant={value === "Active" ? "success" : "warning"}>
        {String(value)}
      </Badge>
    ),
  },
  {
    key: "id",
    label: "Actions",
    render: () => (
      <div className="flex gap-2">
        <button className="rounded-lg border p-2 hover:bg-zinc-100">
          <Edit size={16} />
        </button>

        <button className="rounded-lg border p-2 text-red-500 hover:bg-red-50">
          <Trash size={16} />
        </button>
      </div>
    ),
  },
] as const;

export default function ProductsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <PageHeader
          title="Products"
          description="Manage all Foxbags products."
          action={
            <Button>
              <span className="flex items-center gap-2">
                <Plus size={18} />
                Add Product
              </span>
            </Button>
          }
        />
      </div>

      <DataTable columns={columns} data={products} />
    </div>
  );
}
