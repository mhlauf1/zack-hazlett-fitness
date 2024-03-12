import { ButtonBento } from 'components/buttons';
import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import { getProductRecommendations } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

export async function RelatedProducts({ id }: { id: string }) {
  const relatedPrograms = await getProductRecommendations(id);

  if (!relatedPrograms.length) return null;

  return (
    <div className="p-4 lg:px-8 lg:py-16">
      <h2 className="mb-4 text-2xl text-neutral-800 ">Related Products</h2>
      <ul className="flex flex-col gap-8 lg:flex-row">
        {relatedPrograms.map((program) => (
          <li className="rounded-xl border border-neutral-300 p-4 lg:p-8" key={program.handle}>
            <Link href={`/program/${program.handle}`}>
              <div className="relative h-[175px] w-full  duration-300 ease-in-out hover:opacity-80 lg:h-[30vh] lg:w-[25vw]">
                <Image
                  alt={program.title}
                  src={program.featuredImage?.url}
                  fill
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <div className="mb-2 mt-8 flex flex-col justify-between">
                <h3 className="mb-2 text-2xl">{program.title}</h3>
                <Price
                  amount={program.priceRange.maxVariantPrice.amount}
                  currencyCode={program.priceRange.maxVariantPrice.currencyCode}
                  className="text-body"
                />
              </div>
            </Link>
            <div className="mt-6 flex flex-col gap-2">
              <AddToCart variants={program.variants} availableForSale={program.availableForSale} />
              <Link href={`/program/${program.handle}`}>
                <ButtonBento full dark>
                  View all Details
                </ButtonBento>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
