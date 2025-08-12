import type {Website} from '@/lib/data';
import {
  Card,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from './icon';

type SiteCardProps = {
  site: Website;
};

export function SiteCard({site}: SiteCardProps) {
  return (
    <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block h-full">
      <Card className="flex h-full cursor-pointer items-center gap-4 bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {site.imageUrl ? (
            <Image src={site.imageUrl} alt={`${site.title} logo`} width={48} height={48} className="h-12 w-12 object-cover rounded-lg" />
          ) : site.icon ? (
            <Icon name={site.icon} className="h-8 w-8" />
          ) : null}
        </div>
        <div className="flex-grow overflow-hidden">
          <CardTitle className="truncate text-lg font-semibold font-headline">
            {site.title}
          </CardTitle>
          <CardDescription className="truncate">
            {site.description}
          </CardDescription>
        </div>
      </Card>
    </Link>
  );
}
