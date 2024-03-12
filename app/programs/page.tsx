import { AllProductsList } from 'app/ui/programs/all-products-list';
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
    <div className="flex flex-col justify-center pb-4 md:flex-row lg:justify-start">
      {programs.length > 0 ? (
        <div className="mb-16 grid w-full grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-y-8 lg:px-8">
          <AllProductsList programs={programs} />
        </div>
      ) : null}
    </div>
  );
}
