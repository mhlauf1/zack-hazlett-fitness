import { BlueButton } from 'components/buttons';
import Price from 'components/price';
import { getProductRecommendations } from 'lib/shopify';
import Image from 'next/image';
import Link from 'next/link';
export async function RelatedProducts({ id }: { id: string }) {
  const relatedProducts = await getProductRecommendations(id);

  if (!relatedProducts.length) return null;

  return (
    <div className="py-16">
      <h2 className="mb-4 text-2xl text-neutral-800 ">Related Products</h2>
      <ul className="flex flex-col gap-8 lg:flex-row">
        {relatedProducts.map((product) => (
          <li key={product.handle}>
            <Link href={`/program/${product.handle}`}>
              <div className="hover:opacity-80lg:h-[50vh] relative  h-[400px] w-full duration-300 ease-in-out lg:w-[25vw]">
                <Image
                  alt={product.title}
                  src={product.featuredImage?.url}
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="mb-2 mt-4 flex justify-between">
                <h3 className="text-2xl">{product.title}</h3>
                <Price
                  amount={product.priceRange.maxVariantPrice.amount}
                  currencyCode={product.priceRange.maxVariantPrice.currencyCode}
                  className="text-body"
                />
              </div>
            </Link>
            <BlueButton href={`/program/${product.handle}`}>View Program</BlueButton>
          </li>
        ))}
      </ul>
    </div>
  );
}
