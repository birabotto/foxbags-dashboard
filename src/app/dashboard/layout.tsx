import { ReactNode } from "react";

import { Sidebar } from "@/app/components/dashboard/sidebar";
import { Topbar } from "@/app/components/dashboard/topbar";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Topbar />

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
