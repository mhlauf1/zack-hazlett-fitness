import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Program } from 'lib/shopify/types';
import { MdStarRate } from 'react-icons/md';
import { WhatIsIncluded } from './what-is-included';

export function ProductDescription({ program }: { program: Program }) {
  return (
    <div className="realtive mx-2 mb-8 flex h-full flex-col justify-between md:mb-0 lg:mx-0">
      <div className="mb-4">
        <div className="mb-4 mt-6 flex flex-col border-b pb-4">
          <div className="bg-linear mb-8 mt-4 block lg:hidden">
            <AddToCart
              large
              variants={program.variants}
              availableForSale={program.availableForSale}
            />
          </div>
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-inter mb-4 text-3xl font-medium lg:text-4xl">{program.title}</h2>
              <span className="text-body light-grey-text mb-1 block lg:mt-2">Limtied Sale</span>
              <Price
                amount={program.priceRange.maxVariantPrice.amount}
                currencyCode={program.priceRange.maxVariantPrice.currencyCode}
                className="text-body-large"
              />
            </div>
            <div className="mt-4">
              <div className="mb-2 flex gap-1">
                <MdStarRate className="text-orange-400" />
                <MdStarRate className="text-orange-400" />
                <MdStarRate className="text-orange-400" />
                <MdStarRate className="text-orange-400" />
                <MdStarRate className="text-orange-400" />
              </div>
              <span className="text-body-small font-semibold">(24) 5-Star Reviews</span>
            </div>
          </div>

          {program.descriptionHtml ? (
            <Prose
              className="text-body my-6 text-sm leading-tight"
              html={program.descriptionHtml}
            />
          ) : null}
          <WhatIsIncluded program={program} />
        </div>
      </div>
      <div className="hidden lg:block">
        <AddToCart large variants={program.variants} availableForSale={program.availableForSale} />
      </div>
    </div>
  );
}
