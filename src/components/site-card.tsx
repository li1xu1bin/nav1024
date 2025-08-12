import type {Website} from '@/lib/data';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import Link from 'next/link';
import {ArrowUpRight} from 'lucide-react';
import { Icon } from './icon';

type SiteCardProps = {
  site: Website;
};

export function SiteCard({site}: SiteCardProps) {
  return (
    <Card className="flex h-full flex-col bg-card transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
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
      <CardFooter>
        <Button asChild variant="ghost" className="w-full justify-center">
          <Link href={site.url} target="_blank" rel="noopener noreferrer">
            Visit Site
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
