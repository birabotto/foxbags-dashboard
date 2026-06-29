import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, className = "", ...props }: InputProps) {
  return (
    <label className="block">
      {label && (
        <span className="mb-2 block text-sm font-medium text-zinc-700">
          {label}
        </span>
      )}

      <input
        className={`w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-orange-500 ${className}`}
        {...props}
      />
    </label>
  );
}
