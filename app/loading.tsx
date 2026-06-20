export default function Loading() {
  return (
    <section className="py-16">
      <div className="container">
        <div className="h-8 w-48 animate-pulse rounded-md bg-slate-200" />
        <div className="mt-6 h-20 max-w-3xl animate-pulse rounded-md bg-slate-100" />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="h-32 animate-pulse rounded-lg bg-slate-100" />
          <div className="h-32 animate-pulse rounded-lg bg-slate-100" />
          <div className="h-32 animate-pulse rounded-lg bg-slate-100" />
        </div>
      </div>
    </section>
  );
}
