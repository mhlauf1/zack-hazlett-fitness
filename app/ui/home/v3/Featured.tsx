import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import { WhatIsIncluded } from 'components/product/what-is-included';
import { FEATURED_PROGRAMS } from 'lib/constants';
import { getCollectionProducts } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from './section-header';

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
    <div className="z-30 mx-2 mb-8 flex w-auto flex-col gap-8 rounded-xl border bg-neutral-50 px-4 pb-8 pt-4 text-[#232323] duration-300 hover:bg-white md:mx-4 lg:mx-6 lg:flex-row lg:px-8 lg:py-16">
      <Link className="relative flex flex-col lg:w-1/2" href={`/program/${program.handle}`}>
        <div className="flex lg:hidden">
          <SectionHeader text="Featured Program" />
        </div>
        <div className="relative hidden flex-1 rounded-xl border border-neutral-200 lg:flex lg:w-full">
          <Image
            src={program.featuredImage?.url}
            objectFit="cover"
            alt={program.title}
            fill
            className="flex flex-1 rounded-xl"
          />
        </div>
        <div className="relative  flex h-[300px] w-full rounded-xl border border-neutral-200 lg:hidden lg:w-2/5">
          <Image
            className="flex flex-1 rounded-xl"
            src={program.featuredImage?.url}
            objectFit="cover"
            alt="Zack Hazlett Fitenss"
            fill
          />
        </div>
      </Link>
      <div className="flex h-auto w-full flex-col items-start drop-shadow-md duration-300 lg:w-2/3 ">
        <div className="hidden lg:flex">
          <SectionHeader text="Featured Program" />
        </div>
        <Link className="relative flex w-full flex-col" href={`/program/${program.handle}`}>
          <div className="mb-2 flex w-full flex-col items-start justify-between gap-4 lg:mb-4 lg:flex-row lg:gap-0">
            <div className="flex w-full flex-col justify-between gap-1">
              <span className="text-body-small font-nohemi font-light uppercase">
                {program.tags}
              </span>
              <h3 className="font-inter text-2xl font-medium lg:text-3xl">{program.title}</h3>
            </div>
            <div>
              <span className="text-body light-grey-text mb-1 block lg:mt-2">Limtied Sale</span>
              <Price
                amount={program.priceRange.maxVariantPrice.amount}
                currencyCode={program.priceRange.maxVariantPrice.currencyCode}
                className="text-body-large"
              />
            </div>
          </div>
          <div className="w-full lg:w-2/3">{getCardDescription(program)}</div>
          <div className="py-6 lg:py-12">
            <WhatIsIncluded program={program} />
          </div>
        </Link>
        <div className="flex w-full flex-col items-center justify-between gap-8 px-6 lg:flex-row lg:items-end">
          <div className="z-20 flex w-full flex-col gap-4 lg:w-2/3">
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
