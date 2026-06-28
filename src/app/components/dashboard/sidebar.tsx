import {
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
  Settings,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    icon: Package,
  },
  {
    title: "Customers",
    icon: Users,
  },
  {
    title: "Orders",
    icon: ShoppingCart,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

export function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-white">
      <div className="border-b p-6">
        <h1 className="text-2xl font-bold">
          Fox<span className="text-orange-500">bags</span>
        </h1>
      </div>

      <nav className="flex-1 p-4">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="mb-2 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition hover:bg-orange-50 hover:text-orange-500"
            >
              <Icon size={20} />

              {item.title}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
