import { Bell } from "lucide-react";

export function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">
      <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>

        <p className="text-zinc-500">Welcome back 👋</p>
      </div>

      <button className="rounded-xl border p-3 hover:bg-zinc-100">
        <Bell />
      </button>
    </header>
  );
}
