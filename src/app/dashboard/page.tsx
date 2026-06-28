import { DollarSign, Package, ShoppingCart, Users } from "lucide-react";

import { StatCard } from "@/app/components/dashboard/stat-card";

const stats = [
  {
    title: "Revenue",
    value: "$12,450",
    description: "+18% from last month",
    icon: DollarSign,
  },
  {
    title: "Orders",
    value: "128",
    description: "24 orders in production",
    icon: ShoppingCart,
  },
  {
    title: "Customers",
    value: "86",
    description: "12 new customers this month",
    icon: Users,
  },
  {
    title: "Products",
    value: "34",
    description: "Active packaging products",
    icon: Package,
  },
];

const recentOrders = [
  {
    customer: "Bloom Boutique",
    product: "Luxury Paper Bag",
    status: "In Production",
    amount: "$980",
  },
  {
    customer: "Casa Verde",
    product: "Eco Paper Bag",
    status: "Pending Payment",
    amount: "$420",
  },
  {
    customer: "North Coffee",
    product: "Custom Plastic Bag",
    status: "Completed",
    amount: "$1,250",
  },
  {
    customer: "Luna Beauty",
    product: "Premium Gift Bag",
    status: "Shipped",
    amount: "$760",
  },
];

export default function DashboardPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Overview</h1>

        <p className="mt-2 text-zinc-500">
          Track your packaging business performance.
        </p>
      </div>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            icon={stat.icon}
          />
        ))}
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-3">
        <div className="rounded-2xl border bg-white p-6 shadow-sm xl:col-span-2">
          <h2 className="text-xl font-bold">Recent Orders</h2>

          <div className="mt-6 overflow-hidden rounded-xl border">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-100 text-zinc-600">
                <tr>
                  <th className="px-4 py-3">Customer</th>
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Amount</th>
                </tr>
              </thead>

              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.customer} className="border-t">
                    <td className="px-4 py-4 font-medium">{order.customer}</td>
                    <td className="px-4 py-4 text-zinc-600">{order.product}</td>
                    <td className="px-4 py-4">
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
                        {order.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right font-semibold">
                      {order.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Production Status</h2>

          <div className="mt-6 space-y-5">
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span>Pending</span>
                <span>35%</span>
              </div>
              <div className="h-3 rounded-full bg-zinc-100">
                <div className="h-3 w-[35%] rounded-full bg-orange-500" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span>In Production</span>
                <span>45%</span>
              </div>
              <div className="h-3 rounded-full bg-zinc-100">
                <div className="h-3 w-[45%] rounded-full bg-orange-500" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span>Completed</span>
                <span>20%</span>
              </div>
              <div className="h-3 rounded-full bg-zinc-100">
                <div className="h-3 w-[20%] rounded-full bg-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
