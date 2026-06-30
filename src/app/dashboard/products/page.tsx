"use client";
import { Edit, Plus, Trash } from "lucide-react";

import { PageHeader } from "@/app/components/dashboard/page-header";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { DataTable } from "@/app/components/ui/data-table";
import { products, type Product } from "@/lib/mock-data";
import { useMemo, useState } from "react";
import { SearchInput } from "@/app/components/ui/search-input";
import { Select } from "@/app/components/ui/select";
import { Input } from "@/app/components/ui/input";
import { Modal } from "@/app/components/ui/modal";

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
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productList, setProductList] = useState(products);

  const filteredProducts = useMemo(() => {
    return productList.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || product.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [productList, search, statusFilter]);

  function handleAddProduct(formData: FormData) {
    const name = String(formData.get("name"));
    const category = String(formData.get("category"));
    const minimumOrder = String(formData.get("minimumOrder"));
    const status = String(formData.get("status")) as Product["status"];

    const newProduct: Product = {
      id: crypto.randomUUID(),
      name,
      category,
      minimumOrder,
      status,
    };

    setProductList((currentProducts) => [newProduct, ...currentProducts]);
    setIsModalOpen(false);
  }
  return (
    <div>
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="w-full md:max-w-sm">
          <SearchInput value={search} onChange={setSearch} />
        </div>

        <div className="flex items-center gap-4">
          <Select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            options={["All", "Active", "Draft"]}
          />

          <p className="text-sm text-zinc-500">
            {filteredProducts.length} products
          </p>
        </div>
      </div>
      <div className="mb-8 flex items-center justify-between">
        <PageHeader
          title="Products"
          description="Manage all Foxbags products."
          action={
            <Button onClick={() => setIsModalOpen(true)}>
              <span className="flex items-center gap-2">
                <Plus size={18} />
                Add Product
              </span>
            </Button>
          }
        />
      </div>

      <DataTable columns={columns} data={filteredProducts} />
      <Modal
        title="Add Product"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="space-y-4">
          <form action={handleAddProduct} className="space-y-4">
            <Input
              name="name"
              label="Product name"
              placeholder="Plastic Bag"
              required
            />

            <Input
              name="category"
              label="Category"
              placeholder="Plastic"
              required
            />

            <Input
              name="minimumOrder"
              label="Minimum order"
              placeholder="500 units"
              required
            />

            <Select
              name="status"
              label="Status"
              options={["Active", "Draft"]}
            />

            <div className="flex justify-end gap-3 pt-4">
              <Button
                type="button"
                variant="secondary"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>

              <Button type="submit">Save Product</Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
