import type {Website, Category} from '@/lib/data';
import {SiteCard} from './site-card';

type SiteListProps = {
  websites: Website[];
  categories: Category[];
};

export function SiteList({websites, categories}: SiteListProps) {
  const groupedWebsites = websites.reduce((acc, site) => {
    (acc[site.category] = acc[site.category] || []).push(site);
    return acc;
  }, {} as Record<string, Website[]>);

  const categoriesWithSites = categories.filter(
    (category) => groupedWebsites[category.name]?.length > 0
  );

  if (websites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center h-[60vh]">
        <h3 className="text-xl font-semibold">No websites found</h3>
        <p className="text-muted-foreground mt-2">
          Try a different search term or select another category.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {categoriesWithSites.map((category) => (
        <section key={category.id} id={category.id}>
          <h2 className="text-2xl font-bold font-headline mb-4 pb-2 border-b-2 border-primary/20">
            {category.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {groupedWebsites[category.name].map((site) => (
              <SiteCard key={site.id} site={site} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
