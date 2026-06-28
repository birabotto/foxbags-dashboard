type Column<T> = {
  key: keyof T;
  label: string;
};

type DataTableProps<T> = {
  columns: readonly Column<T>[];
  data: T[];
};

export function DataTable<T extends { id: string }>({
  columns,
  data,
}: DataTableProps<T>) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-zinc-100 text-zinc-600">
          <tr>
            {columns.map((column) => (
              <th key={String(column.key)} className="px-6 py-4 font-semibold">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-t">
              {columns.map((column) => (
                <td key={String(column.key)} className="px-6 py-4">
                  {String(row[column.key])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
