import { RelatedProducts } from 'app/ui/programs/related-products';
import Image from 'next/image';

import { ProductDescription } from 'components/product/product-description';
import { HIDDEN_PRODUCT_TAG } from 'lib/constants';
import { getProduct } from 'lib/shopify';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

export const runtime = 'edge';

export async function generateMetadata({
  params
}: {
  params: { handle: string };
}): Promise<Metadata> {
  const product = await getProduct(params.handle);

  if (!product) return notFound();

  const { url, width, height, altText: alt } = product.featuredImage || {};
  const indexable = !product.tags.includes(HIDDEN_PRODUCT_TAG);

  return {
    title: product.seo.title || product.title,
    description: product.seo.description || product.description,
    robots: {
      index: indexable,
      follow: indexable,
      googleBot: {
        index: indexable,
        follow: indexable
      }
    },
    openGraph: url
      ? {
          images: [
            {
              url,
              width,
              height,
              alt
            }
          ]
        }
      : null
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const program = await getProduct(params.handle);

  if (!program) return notFound();

  const programJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Program',
    name: program.title,
    description: program.description,
    image: program.featuredImage.url,
    offers: {
      '@type': 'AggregateOffer',
      availability: program.availableForSale
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      priceCurrency: program.priceRange.minVariantPrice.currencyCode,
      highPrice: program.priceRange.maxVariantPrice.amount,
      lowPrice: program.priceRange.minVariantPrice.amount
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(programJsonLd)
        }}
      />
      <div className="mx-auto px-2 pt-20 lg:px-4 lg:pt-28">
        <div className="mb-8 flex flex-col lg:mb-0 lg:flex-row lg:gap-8">
          <div className="flex h-full flex-1 rounded-xl">
            <div className="relative flex h-[250px] w-full flex-col items-center lg:h-[600px]">
              <Image
                src={program.featuredImage?.url}
                objectFit="cover"
                alt={program.title}
                fill
                className="flex flex-1 rounded-xl"
              />
            </div>
          </div>
          <div className="flex flex-1">
            <ProductDescription program={program} />
          </div>
        </div>
        <Suspense>
          <RelatedProducts id={program.id} />
        </Suspense>
      </div>
    </>
  );
}
