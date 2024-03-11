'use client';
import { ButtonBento } from 'components/buttons';
import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import { ProgramType } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import { WhatIsIncluded } from './what-is-included';

type FeaturedProgramCardProps = {
  program: ProgramType;
};

export const FeaturedProgramCard = ({ program }: FeaturedProgramCardProps) => {
  return (
    <div className="flex flex-1 flex-col flex-wrap justify-between gap-2 rounded-xl border border-neutral-400 bg-white px-6 pb-4 pt-12 duration-300 hover:opacity-90 lg:px-6 lg:pt-16">
      <div className="flex flex-1 flex-col items-start justify-between lg:py-4">
        <div>
          <div className="flex w-full flex-col items-center gap-6">
            <Image
              src={program.featuredImage?.url}
              objectFit="cover"
              alt={program.title}
              height={175}
              width={175}
              className="flex h-[150px] w-[150px] rounded-xl md:h-[200px] md:w-[200px]"
            />
          </div>
          <div className="mb-2 mt-16 flex w-full items-start justify-between lg:mb-8">
            <div className="flex w-full flex-col justify-between gap-2">
              <span className="text-body-small font-nohemi font-light uppercase">
                {program.tags}
              </span>
              <h3 className="text-2xl">{program.title}</h3>
            </div>
            <Price
              amount={program.priceRange.maxVariantPrice.amount}
              currencyCode={program.priceRange.maxVariantPrice.currencyCode}
              className="text-body"
            />
          </div>
          <WhatIsIncluded program={program} />
        </div>
        <div className="mt-6 w-full lg:mt-10">
          <div className="flex w-full flex-col gap-4">
            <AddToCart variants={program.variants} availableForSale={program.availableForSale} />
            <Link href={`/program/${program.handle}`}>
              <ButtonBento full dark>
                View all Details
              </ButtonBento>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
