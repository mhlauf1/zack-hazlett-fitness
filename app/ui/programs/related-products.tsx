import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import { getProductRecommendations } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';

export async function RelatedProducts({ id }: { id: string }) {
  const relatedPrograms = await getProductRecommendations(id);
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

  if (!relatedPrograms.length) return null;

  return (
    <div className="mb-8 lg:mb-0 lg:py-16">
      <h2 className="mb-4 text-2xl text-neutral-800 ">Related Products</h2>
      <ul className="flex flex-col gap-8 lg:flex-row">
        {relatedPrograms.map((program) => (
          <div className="w-full lg:w-[500px]">
            <li className="flex h-auto w-full flex-1 flex-col items-start justify-between rounded-xl border  bg-white pb-4 drop-shadow-md duration-300 hover:opacity-90 hover:drop-shadow-xl ">
              <Link href={`/program/${program.handle}`} className="w-full">
                <div className="relative flex h-[350px] w-full flex-col items-center lg:h-[400px] ">
                  <Image
                    src={program.featuredImage?.url}
                    objectFit="cover"
                    alt={program.title}
                    fill
                    className="flex flex-1 rounded-t-xl"
                  />
                </div>
                <div className="mt-6 flex  w-full items-start justify-between px-6">
                  <div className="flex w-full flex-col justify-between gap-1">
                    <span className="text-body-small font-nohemi font-light uppercase">
                      {program.tags}
                    </span>
                    <h3 className="font-inter text-xl font-medium">{program.title}</h3>
                  </div>
                  <Price
                    amount={program.priceRange.maxVariantPrice.amount}
                    currencyCode={program.priceRange.maxVariantPrice.currencyCode}
                    className="text-body-small"
                  />
                </div>
                <div className="mt-1 px-6 ">
                  <div className="my-4 w-full">{getCardDescription(program)}</div>
                </div>
              </Link>
              <div className="w-full px-6">
                <div className="z-20 flex w-full flex-col gap-4">
                  <AddToCart
                    large
                    variants={program.variants}
                    availableForSale={program.availableForSale}
                  />
                </div>
              </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
