import type {Website} from '@/lib/data';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import Link from 'next/link';
import { Icon } from './icon';

type SiteCardProps = {
  site: Website;
};

export function SiteCard({site}: SiteCardProps) {
  return (
    <Link href={site.url} target="_blank" rel="noopener noreferrer" className="block h-full">
      <Card className="flex h-full cursor-pointer flex-col bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <CardHeader className="flex flex-row items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon name={site.icon} className="h-6 w-6" />
          </div>
          <CardTitle className="text-lg font-semibold font-headline">
            {site.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription>{site.description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
