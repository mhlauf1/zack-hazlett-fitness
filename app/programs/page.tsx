import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import { defaultSort, sorting } from 'lib/constants';
import { getProducts } from 'lib/shopify';
import Image from 'next/image';
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
      <p className="text-body" key={cardDescription}>
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
      <div className="relative py-24">
        <div className="mx-auto flex flex-col items-start px-4 sm:px-6 lg:px-20">
          <p className="font-inter rounded-full bg-blue-600/10 px-4 py-2 text-sm font-semibold leading-6 text-blue-600 ring-1 ring-inset ring-blue-600/10">
            Explore Programs
          </p>
          <h1 className="mt-8  text-3xl  font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Fitness and Nutrition Programs
          </h1>
          <p className="mt-4 max-w-xl text-sm text-gray-700">
            Our thoughtfully designed workspace objects are crafted in limited runs. Improve your
            productivity and organization with these sale items before we run out.
          </p>
        </div>
        <div className="mx-auto">
          <div className="mx-auto max-w-2xl text-center"></div>
          <div className="mx-auto  px-4 sm:px-6 lg:px-20">
            <div className="mt-12 flex flex-col gap-8">
              {programs.map((program) => (
                <div className="flex w-full flex-col justify-between gap-8 border bg-neutral-50 p-4 md:flex-row md:p-8">
                  <div>
                    <div key={program.id}>
                      <div className="flex flex-col  pb-4  duration-150 md:flex-row">
                        <div className="flex flex-col items-stretch">
                          <Link className="mb-12" href={`/program/${program.handle}`}>
                            <p className="mb-4">{program.tags}</p>
                            <div className="flex w-full justify-between">
                              <h2 className="mb-4 text-3xl font-normal text-stone-800">
                                {program.title}
                              </h2>
                              <Price
                                amount={program.priceRange.maxVariantPrice.amount}
                                currencyCode={program.priceRange.maxVariantPrice.currencyCode}
                                className="text-body-large"
                              />
                            </div>
                            <div className="tex-sm  w-full">{getCardDescription(program)}</div>
                            <div className="prose prose-sm mt-4 text-gray-500">
                              <ul role="list">
                                <GetIncludedInfo program={program} />
                              </ul>
                            </div>
                          </Link>
                          <div className="z-20 flex flex-col gap-4 md:mt-0">
                            <AddToCart
                              large
                              variants={program.variants}
                              availableForSale={program.availableForSale}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <Link
                      className=" duration-300 group-hover:opacity-75"
                      href={`/program/${program.handle}`}
                    >
                      <div className="relative flex h-[80vh] w-full flex-1 md:w-[40vw]">
                        <Image
                          src={program.featuredImage?.url}
                          alt={program.title}
                          fill
                          objectFit="cover"
                        />
                      </div>
                    </Link>
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
