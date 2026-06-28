type BadgeProps = {
  children: React.ReactNode;
  variant?: "success" | "warning" | "default";
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variants = {
    success: "bg-green-100 text-green-700",
    warning: "bg-orange-100 text-orange-700",
    default: "bg-zinc-100 text-zinc-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
