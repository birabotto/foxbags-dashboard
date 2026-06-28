import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base = "rounded-xl px-6 py-3 font-semibold transition duration-200";

  const variants = {
    primary:
      "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20",

    secondary:
      "border border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
