import { PersonalTraining } from 'app/ui/home/v3';
import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { SubPageHeader } from 'components/subpage-header';
import { sorting } from 'lib/constants';
import { Suspense } from 'react';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <div className="mx-auto pt-[7vh]">
        <div className="bg-white px-4 pb-8 pt-4 lg:px-6">
          <SubPageHeader text="Programs" />
          <h2>Explore Programs</h2>
        </div>
        <div className="relative mx-2 flex flex-col  gap-4 pb-4 text-black md:flex-row lg:mx-6">
          <div className=" order-first w-full flex-none md:max-w-[130px]">
            <Collections />
          </div>

          <div className="order-last min-h-screen w-full md:order-none">{children}</div>
          <div className="forder-none flex-none md:order-last md:w-[130px]">
            <FilterList list={sorting} title="Sort by" />
          </div>
        </div>
        <PersonalTraining />
        <Footer />
      </div>
    </Suspense>
  );
}
