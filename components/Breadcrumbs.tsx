import Link from "next/link";
import { absoluteUrl } from "@/data/site";
import { JsonLd } from "@/components/JsonLd";

type Crumb = {
  name: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const allItems = [{ name: "Home", href: "/" }, ...items];

  return (
    <>
      <nav aria-label="Breadcrumb" className="bg-slate-50 py-3 text-sm">
        <ol className="container flex flex-wrap gap-2 text-slate-600">
          {allItems.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              {index > 0 ? <span aria-hidden="true">/</span> : null}
              {index === allItems.length - 1 ? (
                <span className="font-semibold text-slate-900">{item.name}</span>
              ) : (
                <Link className="focus-ring rounded-sm hover:text-orange-700" href={item.href}>
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: allItems.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: absoluteUrl(item.href)
          }))
        }}
      />
    </>
  );
}
