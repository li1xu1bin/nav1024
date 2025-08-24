import { Suspense } from 'react';
import {NavigatorClient} from '@/components/navigator-client';
import {websites, categories} from '@/lib/data';

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavigatorClient categories={categories} websites={websites} />
    </Suspense>
  );
}
