import { LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
};

export function StatCard({
  title,
  value,
  description,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-zinc-500">{title}</p>

        <div className="rounded-xl bg-orange-100 p-3 text-orange-600">
          <Icon size={22} />
        </div>
      </div>

      <h3 className="mt-6 text-3xl font-bold">{value}</h3>

      <p className="mt-2 text-sm text-zinc-500">{description}</p>
    </div>
  );
}
