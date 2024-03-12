import { PersonalTraining } from 'app/ui/home/v3';
import { AllProductsList } from 'app/ui/programs/all-products-list';
import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import FilterList from 'components/layout/search/filter';
import { SubPageHeader } from 'components/subpage-header';
import { defaultSort, sorting } from 'lib/constants';
import { getProducts } from 'lib/shopify';

export const runtime = 'edge';

export const metadata = {
  title: 'Programs',
  description: 'Browse list of programs in the store.'
};

export default async function ProgramsPage({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;

  const programs = await getProducts({ sortKey, reverse, query: searchValue });

  return (
    <div className="mx-auto pt-[8vh]">
      <div className="bg-white px-8 py-8">
        <SubPageHeader text="Programs" />
        <h2>Explore Programs</h2>
      </div>
      <div className="mx-6 flex  flex-col gap-8 px-4 pb-4 md:flex-row">
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <Collections />
        </div>
        {programs.length > 0 ? (
          <div className="mb-16 mt-4 grid grid-cols-1 gap-4 gap-y-8 px-8 md:grid-cols-2 lg:grid-cols-3">
            <AllProductsList programs={programs} />
          </div>
        ) : null}
        <div className="order-none flex-none md:order-last md:w-[125px]">
          <FilterList list={sorting} title="Sort by" />
        </div>
      </div>
      <PersonalTraining />
      <Footer />
    </div>
  );
}

// export default async function ProgramsPage() {
//   return (
//     <>
//       <div className="mx-auto pt-[8vh]">
//         <div className="bg-white px-8 py-8">
//           <SubPageHeader text="Programs" />
//           <h2>Explore Programs</h2>
//         </div>
//         <div className="flex flex-col gap-2 px-8">
//           {/* <h3 className="text-body">All Programs</h3> */}
//           <Collections />
//         </div>

//       </div>
//       <Footer />
//     </>
//   );
// }
