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
          <li className="flex h-auto w-full  flex-1 flex-col items-start justify-between rounded-xl  border bg-white px-6  py-4 drop-shadow-md duration-300 hover:opacity-90 hover:drop-shadow-xl ">
            <Link href={`/program/${program.handle}`} className="w-full">
              <div className="relative flex h-[250px] w-full flex-col items-center lg:h-[300px] ">
                <Image
                  src={program.featuredImage?.url}
                  objectFit="cover"
                  alt={program.title}
                  fill
                  className="flex flex-1 rounded-xl"
                />
              </div>
              <div className="mt-6 flex w-full items-start justify-between">
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
              <div className="mt-1">
                <ul className="mb-6 grid grid-cols-1 gap-2">
                  {program.metafields?.map((metafield: { value: any }) => {
                    const cardDescription = metafield.value;
                    return (
                      <li style={{ fontSize: '1rem' }} className="text-body" key={cardDescription}>
                        {cardDescription}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Link>
            <div className="w-full">
              <div className="z-20 flex w-full flex-col gap-4">
                <AddToCart
                  variants={program.variants}
                  availableForSale={program.availableForSale}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
