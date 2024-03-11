import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { MdStarRate } from 'react-icons/md';
import { VariantSelector } from './variant-selector';

const benefits = [
  'Weekly Workout Schedules',
  'Customized Meal Plans',
  'Flexibility Improvement',
  '24/7 Support',
  'Increased Energy Levels',
  'Progress Tracking'
];

export function ProductDescription({ product }: { product: Product }) {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <div className="my-6 flex flex-col border-b pb-6">
          <div className="mb-8 block lg:hidden">
            <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
          </div>
          <h2 className="mb-2 text-3xl lg:text-4xl">{product.title}</h2>
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
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
              className="text-body-large"
            />
          </div>
        </div>
        <VariantSelector options={product.options} variants={product.variants} />

        {product.descriptionHtml ? (
          <Prose className="text-body mb-6 text-sm leading-tight" html={product.descriptionHtml} />
        ) : null}
        <div>
          <p className="mb-4 text-lg">What&#39;s Included:</p>
          <ul className="mb-6 grid grid-cols-1 gap-4 gap-x-8 md:grid-cols-2">
            {benefits.map((benefit) => (
              <li className="flex items-center gap-2" key={benefit}>
                <div className="h-1 w-1 rounded-full bg-neutral-300" />
                <span className="text-body text-center">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="hidden lg:block">
        <AddToCart variants={product.variants} availableForSale={product.availableForSale} />
      </div>
    </div>
  );
}
