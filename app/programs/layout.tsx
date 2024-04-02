import { Suspense } from 'react';
import Loading from './loading';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="order-last min-h-screen w-full md:order-none">{children}</div>
    </Suspense>
  );
}
