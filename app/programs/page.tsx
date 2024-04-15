import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import { defaultSort, sorting } from 'lib/constants';
import { getProducts } from 'lib/shopify';
import Link from 'next/link';
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

  function getCardDescription(program: any) {
    const cardDescription = program.metafields?.find(
      (metafield: any) => metafield.key === 'card_description'
    )?.value;

    return (
      <p className="text-lg text-stone-100" key={cardDescription}>
        {cardDescription}
      </p>
    );
  }

  const GetIncludedInfo = ({ program }: { program: any }) => {
    let includedItems = program.metafields.find(
      (metafield: any) => metafield.key === 'program_includes'
    )?.value;
    includedItems = JSON.parse(includedItems);

    return includedItems?.map((item: any, index: any) => (
      <li className="font-inter" key={item}>
        {item}
      </li>
    ));
  };

  return (
    <div className="bg-white pt-8">
      <div className="relative py-16 md:py-24">
        <div className="mx-auto flex flex-col items-start px-4 sm:px-6 lg:px-20">
          <p className="font-inter rounded-full bg-blue-600/10 px-4 py-2 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10">
            Explore Programs
          </p>
          <h1 className="mt-8  text-3xl  font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Fitness and Nutrition Programs
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-700">
            Our thoughtfully designed workspace objects are crafted in limited runs. Improve your
            productivity and organization with these sale items before we run out.
          </p>
        </div>
        <div className="mx-auto">
          <div className="mx-auto max-w-2xl text-center"></div>
          <div className="mx-auto  px-4 sm:px-6 lg:px-20">
            <div className="mt-12 flex flex-col gap-8 md:flex-row">
              {programs.map((program) => (
                <div
                  key={program.id}
                  className="flex w-auto flex-col gap-8 rounded-xl border border-neutral-50 bg-neutral-700 p-8 duration-300 hover:border  hover:border-neutral-200 hover:bg-blue-700 focus:bg-blue-700  active:bg-blue-700  md:p-8"
                >
                  <div className="flex h-full   flex-col justify-between duration-150">
                    <div>
                      <Link className="mb-12" href={`/program/${program.handle}`}>
                        <p
                          style={{ letterSpacing: 3 }}
                          className="mb-6 text-sm uppercase text-neutral-100"
                        >
                          {program.tags}
                        </p>
                        <div className="flex w-full flex-col justify-between md:flex-row">
                          <h2 className="mb-2 text-3xl font-normal text-stone-100 md:mb-4">
                            {program.title}
                          </h2>
                          <Price
                            amount={program.priceRange.maxVariantPrice.amount}
                            currencyCode={program.priceRange.maxVariantPrice.currencyCode}
                            className="text-2xl text-stone-100"
                          />
                        </div>
                        <div className="mt-4 w-full md:mt-0  md:w-2/3">
                          {getCardDescription(program)}
                        </div>
                        <div className="prose prose-sm mt-4 text-gray-100">
                          <ul role="list">
                            <GetIncludedInfo program={program} />
                          </ul>
                        </div>
                      </Link>
                    </div>
                    <div className="z-20 mt-6 flex flex-col gap-4">
                      <AddToCart
                        large
                        variants={program.variants}
                        availableForSale={program.availableForSale}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
