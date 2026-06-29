import { Edit, Plus, Trash } from "lucide-react";

import { PageHeader } from "@/app/components/dashboard/page-header";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { DataTable } from "@/app/components/ui/data-table";
import { orders, type Order } from "@/lib/mock-data";

const columns = [
  { key: "customer", label: "Customer" },
  { key: "product", label: "Product" },
  { key: "quantity", label: "Quantity" },
  {
    key: "status",
    label: "Status",
    render: (value: Order[keyof Order]) => {
      const status = String(value);

      const variant =
        status === "Completed" || status === "Shipped"
          ? "success"
          : status === "Pending"
            ? "warning"
            : "default";

      return <Badge variant={variant}>{status}</Badge>;
    },
  },
  { key: "amount", label: "Amount" },
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

export default function OrdersPage() {
  return (
    <div>
      <PageHeader
        title="Orders"
        description="Manage customer orders, production status, and payments."
        action={
          <Button>
            <span className="flex items-center gap-2">
              <Plus size={18} />
              Add Order
            </span>
          </Button>
        }
      />

      <DataTable columns={columns} data={orders} />
    </div>
  );
}
