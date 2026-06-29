import { Edit, Plus, Trash } from "lucide-react";

import { PageHeader } from "@/app/components/dashboard/page-header";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { DataTable } from "@/app/components/ui/data-table";
import { customers, type Customer } from "@/lib/mock-data";

const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "company",
    label: "Company",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "status",
    label: "Status",
    render: (value: Customer[keyof Customer]) => (
      <Badge variant={value === "Active" ? "success" : "default"}>
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

export default function CustomersPage() {
  return (
    <div>
      <PageHeader
        title="Customers"
        description="Manage customer profiles and company information."
        action={
          <Button>
            <span className="flex items-center gap-2">
              <Plus size={18} />
              Add Customer
            </span>
          </Button>
        }
      />

      <DataTable columns={columns} data={customers} />
    </div>
  );
}
