import { PersonalTraining } from 'app/ui/home/v3';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { SubPageHeader } from 'components/subpage-header';
import { sorting } from 'lib/constants';
import { Suspense } from 'react';
import Loading from './loading';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<Loading />}>
      <div className="mx-auto mb-8 pt-[7vh]">
        <div className="bg-white px-4 pb-8 pt-4 lg:px-6">
          <SubPageHeader text="Programs" />
          <h2>Explore Programs</h2>
        </div>
        <div className="relative mx-2 flex flex-col pb-4 text-black md:mx-6 md:flex-row">
          <div className="mb-8 flex flex-col gap-4 md:mb-0 md:gap-16">
            <div className="order-first w-full flex-none md:max-w-[150px]">
              <Collections />
            </div>
            <div className="forder-none flex-none md:order-last md:w-[150px]">
              <FilterList list={sorting} title="Sort by" />
            </div>
          </div>
          <div className="order-last min-h-screen w-full md:order-none">{children}</div>
        </div>
        <PersonalTraining />
      </div>
    </Suspense>
  );
}
