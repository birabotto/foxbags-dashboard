type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none transition focus:border-orange-500"
    />
  );
}
