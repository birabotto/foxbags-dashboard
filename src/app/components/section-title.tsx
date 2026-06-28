type SectionTitleProps = {
  label: string;
  title: string;
  description: string;
};

export function SectionTitle({ label, title, description }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
        {label}
      </p>

      <h2 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-lg leading-8 text-zinc-600">{description}</p>
    </div>
  );
}
