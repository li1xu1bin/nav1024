import {NavigatorClient} from '@/components/navigator-client';
import {websites, categories} from '@/lib/data';

export default function Home() {
  return <NavigatorClient categories={categories} websites={websites} />;
}
