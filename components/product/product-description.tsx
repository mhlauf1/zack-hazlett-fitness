import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Program } from 'lib/shopify/types';
import { MdStarRate } from 'react-icons/md';

export function ProductDescription({ program }: { program: Program }) {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <div className="mb-4 mt-6 flex flex-col border-b pb-4">
          <div className="mb-8 block lg:hidden">
            <AddToCart variants={program.variants} availableForSale={program.availableForSale} />
          </div>
          <h2 className="mb-2 text-3xl lg:text-4xl">{program.title}</h2>
          <div>
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
        <div>
          <p className="mb-4 text-lg">What&#39;s Included:</p>
          <ul className="mb-6 grid grid-cols-1 gap-2">
            {program.metafields?.map((metafield: { value: any }) => {
              const includedItems = JSON.parse(metafield.value).included;
              return includedItems.map((item: string) => (
                <li key={item} className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-neutral-300" />
                  <p className="text-body">{item}</p>
                </li>
              ));
            })}
          </ul>
        </div>
      </div>
      <div className="hidden lg:block">
        <AddToCart variants={program.variants} availableForSale={program.availableForSale} />
      </div>
    </div>
  );
}
