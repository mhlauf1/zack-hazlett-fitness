import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Program } from 'lib/shopify/types';
import { MdStarRate } from 'react-icons/md';

export function ProductDescription({ program }: { program: Program }) {
  return (
    <div className="realtive mx-2 mb-16 flex h-full flex-col justify-between md:mb-0 lg:mx-0">
      <div>
        <div className="mb-4 mt-6 flex flex-col border-b pb-4">
          <h2 className="font-inter mb-2 text-3xl font-medium lg:mb-4 lg:text-4xl">
            {program.title}
          </h2>
          {program.metafields?.map((metafield: { value: any }) => {
            const cardDescription = metafield.value;
            return (
              <p style={{ fontSize: '1rem' }} className="text-body" key={cardDescription}>
                {cardDescription}
              </p>
            );
          })}
          <div className="mt-4">
            <div className="mb-2 flex gap-1">
              <MdStarRate className="text-orange-400" />
              <MdStarRate className="text-orange-400" />
              <MdStarRate className="text-orange-400" />
              <MdStarRate className="text-orange-400" />
              <MdStarRate className="text-orange-400" />
            </div>
            <span className="text-body">(24) 5-Star Reviews</span>
            <span className="text-body light-grey-text mb-2 mt-4 block lg:mt-8">Limtied Sale</span>
            <Price
              amount={program.priceRange.maxVariantPrice.amount}
              currencyCode={program.priceRange.maxVariantPrice.currencyCode}
              className="text-body-large"
            />
          </div>
        </div>
        {program.descriptionHtml ? (
          <Prose className="text-body mb-6 text-sm leading-tight" html={program.descriptionHtml} />
        ) : null}
      </div>
      <div className="hidden lg:block">
        <AddToCart large variants={program.variants} availableForSale={program.availableForSale} />
      </div>
      <div className="bg-linear fixed bottom-0 left-0 right-0 z-20  block bg-neutral-50 p-6 lg:mb-8 lg:hidden">
        <AddToCart large variants={program.variants} availableForSale={program.availableForSale} />
      </div>
    </div>
  );
}
