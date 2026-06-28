import { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  description: string;
  action?: ReactNode;
};

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold">{title}</h1>

        <p className="mt-3 text-zinc-500">{description}</p>
      </div>

      {action}
    </div>
  );
}
