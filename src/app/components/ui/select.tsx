import { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string;
  options: string[];
};

export function Select({
  label,
  options,
  className = "",
  ...props
}: SelectProps) {
  return (
    <label className="block">
      {label && (
        <span className="mb-2 block text-sm font-medium text-zinc-700">
          {label}
        </span>
      )}

      <select
        className={`w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-orange-500 ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
