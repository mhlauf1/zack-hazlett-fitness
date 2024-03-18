import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import { WhatIsIncluded } from 'components/product/what-is-included';
import { FEATURED_PROGRAMS } from 'lib/constants';
import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

export default async function Featured() {
  const featuredProgram = await getCollectionProducts({ collection: FEATURED_PROGRAMS });
  const program = featuredProgram[1];

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

  return program ? (
    <div className="z-30 mx-2 flex w-full flex-col gap-8 rounded-xl border bg-white px-8 py-16 text-[#232323] duration-300 md:mx-4 lg:mx-6 lg:flex-row">
      <Link className="relative flex lg:w-1/2" href={`/program/${program.handle}`}>
        <div className="relative hidden rounded-xl border border-neutral-200 lg:flex lg:w-1/2 lg:flex-1">
          <Image
            src={program.featuredImage?.url}
            objectFit="cover"
            alt={program.title}
            fill
            className="flex flex-1 rounded-xl"
          />
        </div>
        <div className="relative  flex h-[300px] w-full rounded-xl border border-neutral-200 lg:hidden lg:w-2/5 lg:flex-1">
          <Image
            className="flex flex-1 rounded-xl"
            src={program.featuredImage?.url}
            objectFit="cover"
            alt="Zack Hazlett Fitenss"
            fill
          />
        </div>
      </Link>
      <div className="flex h-auto w-full flex-col items-start  drop-shadow-md duration-300 hover:opacity-90 hover:drop-shadow-xl lg:w-1/2 lg:flex-1 ">
        <span className="font-inter mb-8 rounded-full bg-blue-500 px-4 py-1 text-white">
          Featured Program
        </span>
        <Link className="relative flex w-full flex-col" href={`/program/${program.handle}`}>
          <div className="mb-4 flex  w-full items-start justify-between">
            <div className="flex w-full flex-col justify-between gap-1">
              <span className="text-body-small font-nohemi font-light uppercase">
                {program.tags}
              </span>
              <h3 className="font-inter text-3xl font-medium">{program.title}</h3>
            </div>
            <Price
              amount={program.priceRange.maxVariantPrice.amount}
              currencyCode={program.priceRange.maxVariantPrice.currencyCode}
              className="text-body-small"
            />
          </div>
          <div className="w-2/3">{getCardDescription(program)}</div>
          <div className="py-12">
            <WhatIsIncluded program={program} />
          </div>
        </Link>
        <div className="flex w-full flex-row items-end justify-between gap-8 px-6">
          <div className="z-20 flex w-2/3 flex-col gap-4">
            <AddToCart
              large
              variants={program.variants}
              availableForSale={program.availableForSale}
            />
          </div>
          <Link className="relative flex" href={`/program/${program.handle}`}>
            <p className="light-grey-text underline">VIEW ALL DETAILS</p>
          </Link>
        </div>
      </div>
    </div>
  ) : null;
}
